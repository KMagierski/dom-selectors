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