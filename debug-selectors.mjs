import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('debug-soriana-1.html', 'utf8');
const $ = cheerio.load(html);

console.log("--- PRICES ---");
$('[class*="price" i], [class*="precio" i]').each((i, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if(text.includes('$') || text.match(/[0-9]/)) {
      console.log($(el).attr('class'), '=>', text.substring(0, 100));
    }
});
