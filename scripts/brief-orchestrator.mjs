import { promises as fs } from 'fs';
import path from 'path';

async function main() {
  console.log("Brief Orchestrator running...");
  console.log("Current working directory:", process.cwd());
}

main().catch(err => {
  console.error("Error in brief orchestrator:", err);
  process.exit(1);
});
