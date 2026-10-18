// Copies the web app into www/ (what the Android wrapper loads) and the Android icon/splash images into assets/.
import fs from 'node:fs';
fs.rmSync('www', {recursive: true, force: true});
fs.mkdirSync('www');
for (const f of fs.readdirSync('.')) {
  const web = /\.(html|webmanifest|png|woff2)$/.test(f) || f === 'sw.js';
  if (web && !f.startsWith('android-')) fs.copyFileSync(f, 'www/' + f);
}
fs.mkdirSync('assets', {recursive: true});
const art = {'android-icon.png': 'icon-only.png', 'android-icon-foreground.png': 'icon-foreground.png',
  'android-icon-background.png': 'icon-background.png', 'android-splash.png': 'splash.png', 'android-splash-dark.png': 'splash-dark.png'};
for (const [from, to] of Object.entries(art)) fs.copyFileSync(from, 'assets/' + to);
console.log('Copied', fs.readdirSync('www').length, 'files into www/ and', Object.keys(art).length, 'images into assets/');
