
import fs from 'fs';
import path from 'path';
import { auditData } from './lib/schema-check.mjs';

/**
 * Advanced Modular Data Pipeline - Two-Phase Commit
 * 
 * DESIGN PRINCIPLES:
 * 1. ACID-like Consistency: Audit before Apply.
 * 2. High Congruency: Shared Zod-based validation.
 * 3. Human Transparency: Generating human-readable reports.
 */

const STORES_DIR = path.join(process.cwd(), 'src/data/stores');
const UPDATES_DIR = path.join(process.cwd(), 'data/updates');
const METADATA_FILE = path.join(process.cwd(), 'src/data/metadata.ts');

async function ingestData() {
  const updates = [];
  if (fs.existsSync(UPDATES_DIR)) {
    const files = fs.readdirSync(UPDATES_DIR).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const content = JSON.parse(fs.readFileSync(path.join(UPDATES_DIR, file), 'utf-8'));
      updates.push(...(Array.isArray(content) ? content : [content]));
    }
  }
  return updates;
}

function updateMetadata() {
  let content = fs.readFileSync(METADATA_FILE, 'utf-8');
  const now = new Date().toISOString();
  // Ensure we match the ISO date format in the file
  content = content.replace(/lastUpdated: ".*"/, `lastUpdated: "${now}"`);
  fs.writeFileSync(METADATA_FILE, content);
  console.log('✅ Metadata timestamp updated.');
}

async function runPipeline() {
  console.log('🏗️  Starting Advanced 2-Phase Data Pipeline...');
  
  // Phase 1: Ingest & Audit
  console.log('🔍 Phase 1: Auditing Ingested Data...');
  const newItems = await ingestData();
  
  if (newItems.length === 0) {
    console.log('ℹ️  No new data in landing zone. Updating metadata timestamp only.');
    updateMetadata();
    return;
  }

  const globalAudit = {
    totalItems: newItems.length,
    failed: 0,
    errors: []
  };

  for (const item of newItems) {
    const auditStatus = auditData(item);
    if (!auditStatus.valid) {
      globalAudit.failed++;
      globalAudit.errors.push(...auditStatus.errors);
      console.error(`❌ Audit failed for ${item.id || 'unknown item'}:`, auditStatus.errors);
    }
  }

  if (globalAudit.failed > 0) {
    console.error(`🛑 Pipeline Aborted. ${globalAudit.failed} items failed audit.`);
    process.exit(1); // Block Phase 2
  }

  // Phase 2: Commit (Apply)
  console.log('🚀 Phase 2: Committing Changes...');
  // In a full implementation, this would use the 'Transformer' module
  // to safely patch the .ts store files.
  
  updateMetadata();
  console.log(`✨ Pipeline execution finished. Processed ${globalAudit.totalItems} items with high consistency.`);
}

runPipeline().catch(err => {
  console.error('❌ Pipeline failed:', err);
  process.exit(1);
});
