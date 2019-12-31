function animateText(query) {
  const text = document.querySelector(query);
  const strtext = text.textContent;
  const splitText = strtext.split("");
  text.textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  const time = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

function allLoad(){
animateText(".title");
animateText(".new");
animateText(".year");
animateText(".t");
animateText(".from");
animateText(".author");
}

window.onload = allLoad();
