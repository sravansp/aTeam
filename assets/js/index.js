const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  nav = body.querySelector(".navbar"),
  sidebarToggle = body.querySelector(".app-sidebar__toggle"),
  toggle = body.querySelector(".hamburger"),
  searchBtn = body.querySelector(".search-box");

$(window).on("load", function () {
  $(".preloader").fadeOut("slow");

//   setTimeout(function () {
    ScrollRevealaAm();
//   }, 100);
});

$(function () {
  $(".sidebar li")
    .find("a")
    .each(function () {
      var text = $(this).attr("href");

      if (window.location.href.includes(text)) {
        $(this).parents("li").addClass("active");
      } else {
        $(this).parents("li").removeClass("active");
      }
    });

  var side_close = localStorage.getItem("side_close");
  if (side_close == "open") {
    $(sidebar).removeClass("close");
    $(sidebar).addClass(side_close);
    $(toggle).addClass("is-active");
  }
});

$(toggle).click(function (e) {
  e.preventDefault();
  $(this).toggleClass("is-active");
  if ($(sidebar).hasClass("close")) {
    $(sidebar).removeClass("close");
    $(sidebar).addClass("open");
    localStorage.setItem("side_close", "open");
    var side_close = localStorage.getItem("side_close");
    // console.log(side_close);
  } else {
    $(sidebar).addClass("close");
    $(sidebar).removeClass("open");
    $(body).removeClass("sidenav-toggled");
    localStorage.setItem("side_close", "close");
    var side_close = localStorage.getItem("side_close");
    // console.log(side_close);
  }
});
$(body).click(function (e) {
  if ($(body).hasClass("sidenav-toggled") && screen.width < 992) {
    $(".overlay_section").addClass("overlay_home");
  } else {
    $(".overlay_section").removeClass("overlay_home");
  }
});
$(sidebarToggle).click(function (e) {
  e.preventDefault();
  if ($(body).hasClass("sidenav-toggled")) {
    $(body).removeClass("sidenav-toggled");
    $(sidebar).addClass("close");
    $(sidebar).removeClass("open");
  } else {
    $(body).addClass("sidenav-toggled");
    $(sidebar).removeClass("close");
    $(sidebar).addClass("open");
  }
});



const navHeight = 70;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 10;
// function to run on scrolling
function scrolled() {
  let sy = window.scrollY;
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    } 
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
      // Remove the "nav_fixed" class when reaching the top of the page
      if (sy === 0) {
        nav.classList.remove("nav_fixed");
      } else {
        nav.classList.add("nav_fixed");
      }
    }
    // update current scroll point
    lastScrollY = sy;
  }
}


// Add event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)






// Function to initialize dropdown functionality
function initializeDropdown(optionMenu) {
  const selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => {
    // Close all other dropdowns before opening the clicked one
    document.querySelectorAll(".select-menu").forEach((menu) => {
      if (menu !== optionMenu) {
        menu.classList.remove("active");
      }
    });

    optionMenu.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;

      // Close the dropdown after selecting an option
      optionMenu.classList.remove("active");
    });
  });
}

// Get all dropdown menus with the class name "select-menu"
const allDropdowns = document.querySelectorAll(".select-menu");

// Initialize each dropdown menu
allDropdowns.forEach((dropdown) => {
  initializeDropdown(dropdown);
});





/*===== SCROLL REVEAL ANIMATION =====*/
function ScrollRevealaAm() {
  const sr = ScrollReveal({
    distance: "60px",
  });

  sr.reveal(".animated-dash", {
    origin: "bottom",
    delay: 200,
    duration: 500,
    interval: 80,
  });
  // ============== Login Page Animation End =========
}
