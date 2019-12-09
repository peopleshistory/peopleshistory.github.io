let tabs = Array.from(document.querySelectorAll(".tab"));
let panels = Array.from(document.querySelectorAll(".panel"));
let targets = tabs.map(tab => tab.hash);

const show = id => {
  if (!id) {
    id = targets[0];
  }

  // Show tab if selected or remove selection if not
  tabs.forEach(tab => {
    if (tab.hash === id) {
      tab.classList.add("selected");
    } else {
      tab.classList.remove("selected");
    }
  });

  // Show panel if selected or remove selection if not
  panels.forEach(panel => {
    if (id.substr(1) === panel.id) {
      panel.classList.add("show");
    } else {
      panel.classList.remove("show");
    }
  });
};

// Call the function on change of hash
window.addEventListener(
  "hashchange",
  function() {
    if (targets.indexOf(location.hash) !== -1) {
      show(location.hash);
    }
  },
  false
);

// default show the first panel
window.onload = show(
  targets.indexOf(location.hash) !== -1 ? location.hash : ""
);
