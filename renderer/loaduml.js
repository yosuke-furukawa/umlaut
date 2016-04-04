window.loaduml = (file) => {
  const umlArea = document.getElementById('uml');
  const fs = require('fs');
  fs.readFile(path.join(__dirname, file), (err, data) => {
    if (err) {
      throw err;
    }
    umlArea.innerText = data.toString();
    window.onUpdate();
  }); 

};

window.loadumlFromStock = (file) => {
  const umlArea = document.getElementById('uml');
  const fs = require('fs');
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    }
    umlArea.innerText = data.toString();
    window.onUpdate();
  }); 

};

window.deleteUmlFromStock = (file) => {
  const fs = require('fs');
  fs.unlink(file, (err, data) => {
    if (err) {
      throw err;
    }
    const stockListGroup = document.getElementById('stock-list-group');
    stockListGroup.removeChild(document.getElementById(file));
  }); 

};
