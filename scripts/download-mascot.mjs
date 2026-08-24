import https from 'https';
import fs from 'fs';
import path from 'path';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  const mascotUrl = 'https://bidbento.lol/bidbento-mascot-transparent.svg';
  const dest = path.join(process.cwd(), 'public', 'projects', 'bidbento-mascot-transparent.svg');
  try {
    await download(mascotUrl, dest);
  } catch (e) {
    console.error('Failed to download mascot:', e.message);
  }
}

main();
