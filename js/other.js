// JavaScript Document

$(function () {
    $('.gibetimage img').hover(function () {
    if ($(this).attr('src') == 'IMAGE/legibet.png')
        $(this).attr('src', 'IMAGE/legibet2.png');
        
    }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    if ($(this).attr('src') == 'IMAGE/legibet2.png')
        $(this).attr('src', 'IMAGE/legibet.png');
 
  });
    
    
    $('.gibetimage img').click(function () {
        $(this).attr('src', 'IMAGE/legibetend.png');
        
    });
                              
    
});
