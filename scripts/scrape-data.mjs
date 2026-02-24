import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

// Add stealth plugin
chromium.use(stealth());

const UPDATES_DIR = path.join(process.cwd(), 'data/updates');

// Configure which store products link to which real websites and how to find the price
const SCRAPING_MAP = [
  {
    storeId: 'soriana-1',
    productId: 'beef-vs-tofu-1',
    type: 'plantBased',
    // Example: A generic Soriana search or a known working product URL
    url: 'https://www.soriana.com/carne-molida-notmeat-notco-500-g/11267812.html',
    selector: '.price, .price-plp, .sales', 
  },
  {
    storeId: 'mr-tofu-1',
    productId: 'tofu-varieties-1',
    type: 'traditional',
    // Using a different product format for Mr Tofu if the other 404s
    url: 'https://mrtofu.com.mx/products/mori-nu-silken-tofu-firme',
    selector: '.price-item--regular',
  }
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function scrapeDynamicPrices() {
  console.log('🤖 Starting Autonomous Price Scraper...');
  
  if (!fs.existsSync(UPDATES_DIR)) {
    fs.mkdirSync(UPDATES_DIR, { recursive: true });
  }

  // Launch browser with stealth mode
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });

  const updates = [];
  const storesCache = {};

  for (const target of SCRAPING_MAP) {
    const page = await context.newPage();
    console.log(`\n🔍 Fetching ${target.storeId} -> ${target.productId} (${target.type})`);
    console.log(`🔗 URL: ${target.url}`);
    
    try {
      // Go to page
      const response = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      if (response && response.status() === 404) {
          throw new Error('Page returned 404 Not Found');
      }
      
      await delay(Math.floor(Math.random() * 2000) + 2000); // Random delay 2-4s
      
      // Execute a fallback generic brute-force extraction script inside the browser context
      const rawPrice = await page.evaluate((targetSelector) => {
        // First try the specific selector
        let el = document.querySelector(targetSelector);
        let text = el ? (el.innerText || el.textContent) : '';
        
        // If the selector didn't work, grab everything
        if (!text || text.trim() === '') {
             text = document.body.innerText;
        }

        // Match common price patterns like $149.50, $ 2,190.00, $189
        const matches = text.match(/\$\s*([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})?)/g);
        
        if (matches && matches.length > 0) {
           for(const match of matches) {
              const numStr = match.replace('$', '').replace(',', '').trim();
              const num = parseFloat(numStr);
              // Filter out unreasonable fallback prices if we did a full body scan
              if(!isNaN(num) && num > 0 && num < 10000) return num;
           }
        }
        return NaN;
      }, target.selector);

      if (isNaN(rawPrice)) {
        throw new Error(`Failed to find element or parse price.`);
      }

      console.log(`✅ Extracted Price: $${rawPrice}`);

      // Build the update object
      if (!storesCache[target.storeId]) {
        storesCache[target.storeId] = {
          id: target.storeId,
          products: []
        };
      }

      // Find if we already added this product in our cache
      let productUpdate = storesCache[target.storeId].products.find(p => p.id === target.productId);
      if (!productUpdate) {
        productUpdate = { id: target.productId };
        storesCache[target.storeId].products.push(productUpdate);
      }

      // Add the updated price to the correct property (traditional or plantBased)
      productUpdate[target.type] = { price: rawPrice };

    } catch (err) {
      console.error(`❌ Failed to scrape ${target.url}:`, err.message);
    } finally {
      await page.close();
      await delay(Math.floor(Math.random() * 3000) + 2000); // Random delay between pages to avoid rate limits
    }
  }

  await browser.close();

  // Convert cache to array format
  for (const storeId in storesCache) {
    updates.push(storesCache[storeId]);
  }

  if (updates.length > 0) {
    const outputPath = path.join(UPDATES_DIR, 'scraped-prices.json');
    fs.writeFileSync(outputPath, JSON.stringify(updates, null, 2));
    console.log(`\n💾 Saved ${updates.length} store updates to ${outputPath}`);
  } else {
    console.log('\n⚠️ No prices were successfully scraped.');
  }
}

scrapeDynamicPrices().catch(console.error);
