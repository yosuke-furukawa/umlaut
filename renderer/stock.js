try {
  fs.mkdirSync(path.join(homeDir, '.umlaut_dir'));
} catch(e){
  // do nothing
}
const stockMain = () => {
  const dialogs = require('dialogs')();
  const fs = require('fs');
  const path = require('path');
  const homeDir = require('os').homedir();
  const stock = document.getElementById('stock');
  const stocks = document.getElementById('stocks-btn');
  const stockList = document.getElementById('stock-list');
  const stockListGroup = document.getElementById('stock-list-group');
  const umlArea = document.getElementById('uml');

  const files = fs.readdirSync(path.join(homeDir, '.umlaut_dir'));

  const createFileList = (createFile) => (name) => {
    if (name) {
      const filePath = path.join(homeDir, '.umlaut_dir', name);
      const listItem = document.createElement('li');
      listItem.setAttribute('class', 'list-group-item');
      listItem.id = filePath;
      const button = document.createElement('input');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'btn btn-negative');
      button.setAttribute('value', 'delete');
      button.setAttribute('onclick', `deleteUmlFromStock(\"${filePath}\")`);
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.innerText = name;
      anchor.setAttribute('onclick', `loadumlFromStock(\"${filePath}\")`);
      listItem.appendChild(anchor);
      listItem.appendChild(button);
      if (createFile) fs.writeFileSync(filePath, umlArea.innerText);
      stockListGroup.insertBefore(listItem, stockListGroup.firstChild.nextSibling.nextSibling);
    }
  };

  files.forEach(createFileList(false));

  stock.addEventListener('click', () => {
    dialogs.prompt('stock name?', createFileList(true));
  });
  stocks.addEventListener('click', () => {
    const leftpane = Array.from(document.getElementsByClassName('leftpane'));
    leftpane.map((elem) => {elem.setAttribute('class', 'leftpane d-none');});
    stockList.setAttribute('class', 'leftpane');
  });
};

document.addEventListener('DOMContentLoaded', stockMain);
