window.highlight = (element) => {
  element.style.background = 'black';
  element.style.color = 'white';
}

window.h = window.highlight;

window.toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}
// USE CASE
// toggleClass(document.querySelector('div#new-div > ul'), 'list');

window.setPlayersStyle = () => {
  const players = document.querySelectorAll('li[data-type="player"]');
  const playersArr = Array.from(players);
  playersArr.forEach((el) => {
    el.style.background = 'green';
    el.style.color = 'white';
  });
}

window.setAliensStyle = () => {
  const aliens = document.querySelectorAll('li[data-type="alien"]');
  const aliensArr = Array.from(aliens);
  aliensArr.forEach((el) => {
    el.style.background = 'orange';
    el.style.color = 'red';
  });
}

window.setAllStyle = () => {
  window.setPlayersStyle();
  window.setAliensStyle();
}

window.setWantedBgColor = (type, background) => {
  const elements = document.querySelectorAll(`li[data-type='${type}']`);
  // const elements = document.querySelectorAll('li[data-type="' + type +'"]');
  const elementsArr = Array.from(elements);
  elementsArr.forEach((el) => {
    el.style.background = background;
  });
}

window.setAllTypesWantedBg = () => {
  window.setWantedBgColor('player', 'green');
  window.setWantedBgColor('alien', 'brown');
  window.setWantedBgColor('predator', 'orange');
  window.setWantedBgColor('other', 'red');
}

// ZAJECIA #10

removeMessi = () => {
  const ul = document.querySelector('ul');
  const messi = document.querySelector('[data-id="10"]');
  ul.removeChild(messi);
}

addTerminator = () => {
  const ul = document.querySelector('ul');
  const terminator = document.createElement('li');
  // terminator.setAttribute('data-type', 'terminator'); // uzycie setAttribute
  terminator.dataset.type = 'terminator';
  terminator.innerText = 'Terminator';
  ul.appendChild(terminator);
}

addSuffixToHeaders = () => {
  const h1 = document.querySelector('.row h1');
  const h2 = document.querySelector('.row h2');
  const h3 = document.querySelector('.row h3');
  const h4 = document.querySelector('.row h4');

  h1.innerText = h1.innerText + ' SMTH';
  h2.innerText = h2.innerText + ' SMTH';
  h3.innerText = h3.innerText + ' SMTH';
  h4.innerText = h4.innerText + ' SMTH';
}

addSuffixToHeadersAdv = () => {
  const addSuffix = (headNum) => {
    const header = document.querySelector('.row h' + headNum);
    header.innerText = header.innerText + ' SMTH';
  }
  addSuffix('1');
  addSuffix('2');
  addSuffix('3');
  addSuffix('4');
}

addSuffixToHeadersSuperAdv = () => {
  const addSuffix = (headNum) => {
    const header = document.querySelector('.row h' + headNum);
    header.innerText = header.innerText + ' SMTH';
  }
  ['1','2','3','4'].forEach((num) => {
    addSuffix(num);
  });
}

cloneHeader = () => {
  const body = document.querySelector('body'); 
  const h1 = document.querySelector('h1');
  
  body.insertBefore(h1.cloneNode(true), h1);
  body.insertBefore(h1.cloneNode(true), h1);
  body.insertBefore(h1.cloneNode(true), h1);
}

cloneHeaderAdv = () => {
  const body = document.querySelector('body'); 
  const h1 = document.querySelector('h1');
  
  for (let i = 0; i < 3; i++) {
    body.insertBefore(h1.cloneNode(true), h1);
  }
}