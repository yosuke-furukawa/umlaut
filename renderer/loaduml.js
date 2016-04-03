window.loaduml = (file) => {
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
