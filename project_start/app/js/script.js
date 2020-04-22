$(document).ready(function () {
    $('.slider').slick({
        dots:true,
        });

    $('.burger-menu').click(function (event) {
        $('.burger-menu, .menu, .bannerText').toggleClass('active');
    })
});



