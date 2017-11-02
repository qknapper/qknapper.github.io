$(window).ready(updateHeight);
$(window).resize(updateHeight);

updateHeight() 
{
    var div = $('A3');
    var width = div.width();
    
    div.css('height', (1.40964*width));
}