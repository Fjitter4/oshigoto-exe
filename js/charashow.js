// JavaScript Document

$(function() {
    
    $('.samune').slick({
        asNavFor:'.charashow',
        focusOnSelect: true,
        slidesToShow:5,
        centerMode: true,
        centerPadding:'20%',
		responsive:[
        {
            breakpoint: 768,
            settings:{
                slidesToShow:3,
            }
        }
    ]
    });  
    
    $('.charashow').slick({
        draggable: false,
        arrows: false,
		fade: true,
        asNavFor:'.samune',
	});

    
});