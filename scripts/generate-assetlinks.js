const fs = require('fs');
const path = require('path');
const { loadEnvConfig } = require('@next/env');

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const sha256 = process.env.SHA256_KEY;
const packageName = process.env.PACKAGE_NAME;

if (!sha256 || !packageName) {
    console.error('❌ Missing SHA256_KEY or PACKAGE_NAME in environment');
    process.exit(1);
}

const data = [
    {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
            namespace: "android_app",
            package_name: packageName,
            sha256_cert_fingerprints: [sha256]
        }
    }
];

// Write to public/.well-known/assetlinks.json (for Vercel)
const outputDir = path.join(projectDir, 'public', '.well-known');
const outputPath = path.join(outputDir, 'assetlinks.json');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log(`✅ assetlinks.json generated at ${outputPath}`);
