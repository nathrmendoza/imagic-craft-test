import $ from 'jquery'

const ImageSlider = () => {
    if ($('.image-carousel').length <= 0) return null;
    
    const $slider = $('.image-carousel');
    const slickOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 1000
    }

    $slider.slick(slickOptions);
}

export default ImageSlider