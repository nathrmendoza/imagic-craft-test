import $ from 'jquery'

const ImageSlider = () => {
    if ($('.image-slick').length <= 0) return null;
    
    const $slider = $('.image-slick');
    const slickOptions = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 1000,
        rows: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    $slider.slick(slickOptions);
}

export default ImageSlider