$(".mobile-menu") .on ("click", function (e) {
    e.preventDefault();
    $(".menu__btn") .toggleClass ("menu__active")
    $(".top .menu ") .toggleClass ("menu__active")
})

