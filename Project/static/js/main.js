// arrowUp
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  let obj1 = document.getElementById('arrow');
  if (scrolled > 300) {
    obj1.removeAttribute("hidden");
  } else {
    obj1.setAttribute("hidden", "false")
  }
});

window.onscroll = function () {
  scrollFunction()
};


function scrollFunction() {
  if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
    $(".navbar").addClass("fixed-top")
    $(".header .navbar").removeAttr("style");
    $(".header .navbar").attr("style", "background-color:#9f9f9f !important");
    $(".search-nav-fixed").attr("style", "display:flex !important");
    $(".search-bar").removeClass("navbarSupportedContent")
  } else {
    $(".navbar").removeClass("fixed-top")
    $('.search-nav-fixed').hide()
    $(".header .navbar").removeAttr("style");
    $(".header .navbar").attr("style", "background-color:transparent !important");
    $(".search-nav-fixed").attr("style", "display:none !important");
    $(".search-bar").addClass("navbarSupportedContent")
  }
  return false;
}

// events
// $('.home-nav-link').on('click', function () {
//   $('#downloads-nav-link').removeClass("underline-active-bar")
//   $('#votes-nav-link').removeClass("underline-active-bar")
//   $('#home-nav-link').addClass("underline-active-bar")
// })
// $('.votes-nav-link').on('click', function () {
//   $('#downloads-nav-link').removeClass("underline-active-bar")
//   $('#home-nav-link').removeClass("underline-active-bar")
//   $('#votes-nav-link').addClass("underline-active-bar")
// })
// $('.downloads-nav-link').on('click', function () {
//   $('#home-nav-link').removeClass("underline-active-bar")
//   $('#votes-nav-link').removeClass("underline-active-bar")
//   $('#downloads-nav-link').addClass("underline-active-bar")
// })

