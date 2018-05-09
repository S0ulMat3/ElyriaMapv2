// Anonymous "self-invoking" function
(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });
})();

$(function(){
		boxRollovers();
	});
	
	function boxRollovers()
	{
		$selector = $("li");
		XAngle = 0;
		YAngle = 0;
		Z = 50;
		
		$selector.on("mousemove",function(e){
			var $this = $(this);
			var XRel = e.pageX - $this.offset().left;
			var YRel = e.pageY - $this.offset().top;
			var width = $this.width();
		
			YAngle = -(0.5 - (XRel / width)) * 40; 
			XAngle = (0.5 - (YRel / width)) * 40;
			updateView($this.children(".info"));
		});
		
		$selector.on("mouseleave",function(){
			oLayer = $(this).children(".info");
			oLayer.css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
			oLayer.find("#kingdom").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
		});
	}
	
	function updateView(oLayer)
	{
		oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
		oLayer.find("#kingdom").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.99) + "deg) rotateY(" + (YAngle / 0.99) + "deg)","transition":"none","-webkit-transition":"none"});
	}