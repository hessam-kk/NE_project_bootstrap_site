// autohide navbar on scroll
document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");
  var aboveHeight = $("header").outerHeight();

  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if ($(window).scrollTop() < aboveHeight) {
        // if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});

// smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container");
  function checkScroll() {
    images.forEach((image) => {
      const position = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight - 400) {
        image.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
});

$(document).ready(function () {
  $("#image-slider").carousel({
    interval: 4000,
  });
});

/* Creating function in HTML for backspace operation */
function backspace(calc) {
  size = calc.display.value.length;
  calc.display.value = calc.display.value.substring(0, size - 1);
}

/* Creating function to calculate factorial of element */
function calculate(calc) {
  /* Check if function include ! character then
          calculate factorial of number */
  if (calc.display.value.includes("!")) {
    size = calc.display.value.length;
    n = Number(calc.display.value.substring(0, size - 1));
    f = 1;

    for (i = 2; i <= n; i++) f = f * i;
    calc.display.value = f;
  } else if (calc.display.value.includes("%")) {
    /* If function include % character then calculate
          the % of number */
    size = calc.display.value.length;
    n = Number(calc.display.value.substring(0, size - 1));
    calc.display.value = n / 100;
  } else
  /* Otherwise evaluate and execute output */
    calc.display.value = eval(calc.display.value);
}

// date picker
$(document).ready(function () {
  kamaDatepicker("test-date-id", { buttonsColor: "red" });
});

// Initialize and add the map
function initMap() {
  // The location of Tehran
  const Tehran = { lat: 35.7219, lng: 51.3347 };
  // The map, centered at Tehran
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Tehran,
  });
  const marker = new google.maps.Marker({
    position: Tehran,
    map: map,
  });
}
window.initMap = initMap;

// The map, centered at Tehran
const map = new google.maps.Map(document.getElementById("map"), {
  // zoom: 4,
  center: Tehran,
});


$(document).ready(function () {
  // Get the button:
  var scrollButton = document.getElementById("scroll-to-top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  scrollButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});

