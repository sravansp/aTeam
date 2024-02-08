const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
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
