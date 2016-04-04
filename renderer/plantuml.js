const plantuml = require('node-plantuml');
const fs = require('fs');
const os = require('os');
const path = require('path');
const UMLAUT_DIR = path.join(os.tmpDir(), 'umlaut_dir');
const INTERVAL = 5000;

try {
  fs.accessSync(UMLAUT_DIR);
} catch(e) {
  fs.mkdirSync(UMLAUT_DIR);
}

const FILENAME = path.join(UMLAUT_DIR, 'output.png');
const UMLNAME = path.join(UMLAUT_DIR, 'output.uml');

const main = () => {
  const umlArea = document.getElementById('uml');
  const preview = document.getElementById('preview');
  const img = document.getElementById('output');
  const download = document.getElementById('download');
  img.src = `${FILENAME}`;
  download.href = `${FILENAME}`;
  try {
    umlArea.innerText = umlArea.innerText.trim() || fs.readFileSync(UMLNAME).toString();
  } catch (e) {
    // Do nothing;
  }

  const onUpdate = () => {
    const text = umlArea.innerText.trim();
    const imageWriter = fs.createWriteStream(FILENAME);
    const umlWriter = fs.createWriteStream(UMLNAME);
    plantuml.generate(text, {format: 'png'}).out.pipe(imageWriter);
    umlWriter.end(text);
    imageWriter.on('finish', () => {
      const timestamp = new Date().getTime();
      img.src = `${FILENAME}?t=${timestamp}`;
      download.href = `${FILENAME}?t=${timestamp}`;
    });
  };
  window.onUpdate = onUpdate;
  setInterval(onUpdate, INTERVAL);

  preview.addEventListener('click', onUpdate);
};
document.addEventListener('DOMContentLoaded', main);
