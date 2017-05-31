$(document).foundation();
(function () {
    console.log('doc ready');
    //current position
    var pos = 0;
    //number of slides
    var totalSlides = $('.slider-body li').length;
    //get the slide width
    var sliderWidth = $('.slider').width();

    /*******************
      BIULD THE SLIDER
     *******************/
    //set slider body's width to be single slide width times the number of slides
    $('.slider-body').width(sliderWidth*totalSlides);

    //next slide
    $('.next').click(function () {
        slideRight();
    });

    //previous slide
    $('.prev').click(function () {
        slideLeft();
    });

    /*******************
     SLIDE LEFT
     *******************/
    function slideLeft() {
        pos--;
        if(pos==-1) {
            pos = totalSlides - 1;
        }
        $('.slider-body').css('left', -(sliderWidth*pos));

        pagination();
    }

    /*******************
     SLIDE RIGHT
     *******************/
    function slideRight() {
        pos++;
        if(pos==totalSlides){ pos = 0;}
        $('.slider-body').css('left', -(sliderWidth*pos));

        pagination();
    }

    /*******************
     AUTOMATIC SLIDER SETTINGS
     *******************/
    //automatic slider
    var autoSlider = setInterval(slideRight, 4000);

    //
    $.each($('.slider-body li'), function () {
        var li = document.createElement('li');
        $('.pagination-wrap ul').append(li);
    });

    function pagination() {
        $('.pagination-wrap ul li').removeClass('active');
        $('.pagination-wrap ul li:eq('+pos+')').addClass('active');
    }

})();
