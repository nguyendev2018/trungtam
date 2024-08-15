$('.employer-list').slick({
    arrows: true,
    // autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>"
});

$('.video-class').slick({
    arrows: true,
    // autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>"
});
$('.hot-list').slick({
    arrows: true,
    // autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>"
});
$('.hot-list--small').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>",
    responsive: [
{
breakpoint: 992,
settings: {
slidesToShow: 3,
}
},{
breakpoint: 552,
settings: {
slidesToShow: 2,
}
}]
});
$('.qc2-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>",
    responsive: [
{
breakpoint: 767,
settings: {
slidesToShow: 3,
}
},{
breakpoint: 552,
settings: {
slidesToShow: 2,
}
}
]
});
$('.business-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>",
    responsive: [
{
breakpoint: 992,
settings: {
slidesToShow: 4,
}
},{
breakpoint: 767,
settings: {
slidesToShow: 3,
}
},{
breakpoint: 552,
settings: {
slidesToShow: 2,
}
}
]
});
$('.video-main').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // arrows: true,
    // autoplay : true,
    prevArrow:"<button class='button-slick slick-prev'><i class='bi bi-chevron-left icon-prev'></i></button>",
    nextArrow:"<button class='button-slick slick-next'><i class='bi bi-chevron-right icon-next'></i></button>",
    responsive: [
{
breakpoint: 992,
settings: {
slidesToShow: 5,
}
},{
breakpoint: 767,
settings: {
slidesToShow: 3,
}
},{
breakpoint: 552,
settings: {
slidesToShow: 2,
}
},,{
breakpoint: 400,
settings: {
slidesToShow: 1,
}
}
]
});