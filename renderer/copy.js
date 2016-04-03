const copyMain = () => {
  const copy = document.getElementById('copy');
  const umlArea = document.getElementById('uml');
  copy.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(umlArea);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('copied');
  });
};

document.addEventListener('DOMContentLoaded', copyMain);
