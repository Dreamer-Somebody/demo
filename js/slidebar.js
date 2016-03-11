$(document).ready(function() {
    easing = {
        linear: function(t, b, c, d) {
            return c * t / d + b;
        },
        swing: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            return ((t /= d / 2) < 1) ? (c / 2 * t * t * t * t + b) : (-c / 2 * ((t -= 2) * t * t * t - 2) + b);
        }
 };
    $config = {
        ease: easing.easeInOut,
        direction: -1,
        index: 0,
        auto:true
    };
    $(".button1").click(function(event) {
        if(auto){
            clearInterval(auto);
        }
        $config.index--;
        moveTo(-1);
        autoMove();
    });
    $(".button2").click(function(event) {
        if(auto){
            clearInterval(auto);
        }
        $config.index++;
        moveTo(-1); 
        autoMove(); 
    });

    function moveTo(direction) {
        if($config.index>=4){
            $config.index = 0;
        }
        if($config.index<0){
            $config.index = 3;
        }
        $("ul").animate({
            left: direction*$config.index*500+'px',
            },$config.ease);
    }
    function autoMove(){
        auto = setInterval(function(){
            $config.index++;
            moveTo(-1);
        },3000);
    }
    autoMove();  
});