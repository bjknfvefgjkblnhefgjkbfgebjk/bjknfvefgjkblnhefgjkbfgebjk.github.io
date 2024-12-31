(function () {
  function preventDevTools() {
    if (window.devtools.open) {
      window.location.reload();
    }
  }

  window.devtools = { open: false };
  window.addEventListener("devtoolschange", preventDevTools);

  (function () {
    var devtools = window.devtools;
    var element = new Image();
    Object.defineProperty(element, "id", {
      get: function () {
        devtools.open = true;
        window.dispatchEvent(new Event("devtoolschange"));
      },
    });
    return;
  })();
})();

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.key == "F12") {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == "I".charCodeAt(0)
  ) {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == "J".charCodeAt(0)
  ) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.keyCode == "U".charCodeAt(0)) {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == 67
  ) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
    event.preventDefault();
  }
}); 


  function createStars() {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "stars";
      star.style.left = Math.random() * 100 + "%";
      star.style.animationDuration = Math.random() * 2 + 1 + "s";
      document.body.appendChild(star);
    }
  }

  createStars();

  const rocket = document.querySelector(".rocket");

  const text = document.querySelector(".text");

  setTimeout(() => {
    rocket.style.bottom = "50%";
    setTimeout(() => {
      rocket.classList.add("hover");
    }, 2000);
  }, 100);

  setTimeout(() => {
    text.classList.add("txt-anim");
  }, 3900);

  
  setTimeout(() => {
    rocket.classList.remove("hover");
    rocket.classList.add("launch");
  }, 4100);

  setTimeout(() => {
    window.location.href = "https://dash.astro-hosting.net";
  }, 5000);