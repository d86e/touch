;(function($){
  $.fn.touch = function(v,fn){
    if(typeof fn == 'function'){
      var t = $(this), i = 0, x, x1, x2, y1, y2;
      t[0].addEventListener('touchstart',s,false);
      t[0].addEventListener('touchmove',m,false);
      function s(e){
        var e = e || window.event;
        x1 = e.changedTouches[0].clientX;
        y1 = e.changedTouches[0].clientY;
      }
      function m(e){
        var e = e || window.event;
        x2 = e.changedTouches[0].clientX;
        y2 = e.changedTouches[0].clientY;
        e.preventDefault();
        clearTimeout(x);
        x = setTimeout(function(){
          if( 
             ( 
                Math.abs(y2-y1) < Math.abs(x2-x1)/2 && 
                (((x2-x1) > 140 && v == "right") || ((x1-x2) > 140 && v == "left")) 
             ) ||
             ( 
                Math.abs(x2-x1) < Math.abs(y2-y1)/2 &&  
                (((y2-y1) > 140 && v == "bottom") || ((y1-y2) > 140 && v == "top"))
             )
            )
            fn();
        },200);
      } 
    }
  }
  })(jQuery);

