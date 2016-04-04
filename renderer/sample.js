const sampleMain = () => {
  const samples = document.getElementById('samples-btn');
  const sampleList = document.getElementById('sample-list');
  samples.addEventListener('click', () => {
    const leftpane = Array.from(document.getElementsByClassName('leftpane'));
    leftpane.map((elem) => {elem.setAttribute('class', 'leftpane d-none');});
    sampleList.setAttribute('class', 'leftpane');
  });
};

document.addEventListener('DOMContentLoaded', sampleMain);


