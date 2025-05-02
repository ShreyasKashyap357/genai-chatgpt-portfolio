const fs = require('fs');
const https = require('https');
const path = require('path');

const certificates = [
  { name: 'intro-generative-ai.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NBDJ8VRS2NXQ/CERTIFICATE_LANDING_PAGE~NBDJ8VRS2NXQ.jpeg' },
  { name: 'genai-for-everyone.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N8UK2PT9U8AJ/CERTIFICATE_LANDING_PAGE~N8UK2PT9U8AJ.jpeg' },
  { name: 'genai-everyone.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HVSU5XTM2AUW/CERTIFICATE_LANDING_PAGE~HVSU5XTM2AUW.jpeg' },
  { name: 'genai-primer.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KZU8EM4BBS9W/CERTIFICATE_LANDING_PAGE~KZU8EM4BBS9W.jpeg' },
  { name: 'prompt-engineering-chatgpt.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QSYQDCSHCTB2/CERTIFICATE_LANDING_PAGE~QSYQDCSHCTB2.jpeg' },
  { name: 'intro-llm.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NSNAMUMEY3XK/CERTIFICATE_LANDING_PAGE~NSNAMUMEY3XK.jpeg' },
  { name: 'genai-llm.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KVWD3Z2XDBJB/CERTIFICATE_LANDING_PAGE~KVWD3Z2XDBJB.jpeg' },
  { name: 'learn-code-ai.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZX5WDHEMB4LB/CERTIFICATE_LANDING_PAGE~ZX5WDHEMB4LB.jpeg' },
  { name: 'chatgpt-excel.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2LLSPGWRVSNW/CERTIFICATE_LANDING_PAGE~2LLSPGWRVSNW.jpeg' },
  { name: 'chatgpt-nlp.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~V6WNFGKRCUAH/CERTIFICATE_LANDING_PAGE~V6WNFGKRCUAH.jpeg' },
  { name: 'build-ai-apps.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QL5KVFFVMGRL/CERTIFICATE_LANDING_PAGE~QL5KVFFVMGRL.jpeg' },
  { name: 'chatgpt-data-analysis.jpg', url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PN54KSFTWGFH/CERTIFICATE_LANDING_PAGE~PN54KSFTWGFH.jpeg' }
];

const outputDir = './public/certificates';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

certificates.forEach(({ name, url }) => {
  const filePath = path.join(outputDir, name);
  const file = fs.createWriteStream(filePath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});