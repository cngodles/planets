$(window).resize(function(){ responder.resized(); });
window.onorientationchange = function (event){ responder.resized(); }

$(document)
.ready(function(){
	responder.setFrameWidths();
	setTimeout(function(){ responder.setFrameWidths(); }, 1000);
})
.on("click", "#nav-toggle", function(){
	//Toggle Mobile Slide Menu
	responder.openDeviceMenu();
	return false;
})
.on("keypress change keyup", "#sunsize", function(){
planet.focalsize = $(this).val();
planet.setMeasurements();
/*
var psize = [];
psize[1] = sunsize * 0.00350502;
psize[2] = sunsize * 0.00869540;
psize[3] = sunsize * 0.00916379;
psize[31] = sunsize * 0.00249640;
psize[4] = sunsize * 0.00487931;
psize[5] = sunsize * 0.10271839;
psize[6] = sunsize * 0.08659195;
psize[7] = sunsize * 1;
psize[8] = sunsize * 1;
*/
  /*
  $("#planet_1 span").text(psize[1]);
  $("#planet_2 span").text(psize[2]);
  $("#planet_3 span").text(psize[3]);
  $("#planet_4 span").text(psize[4]);
  $("#planet_5 span").text(psize[5]);
  $("#planet_6 span").text(psize[6]);
  $("#planet_7 span").text(psize[7]);
  $("#planet_8 span").text(psize[8]);
  */
})
;

var responder = {
	openwidth:-68,
	isopen:false,
	action:false,
	curZindex:1,
	resizeCallbacks:[function(){ responder.setFrameWidths(); }],
	resized:function(){
		var thisobj = this;
		if(thisobj.resizeCallbacks.length > 0){
			for(var i=0; i < thisobj.resizeCallbacks.length; i++){
				try {
					responder.resizeCallbacks[i]();
				}
				catch(err){
					logme('Function does not exist');
				}
			}
		}
	},
	setFrameWidths:function(){
		$("body").css('width', '100%');
		var curzindex = parseInt($("#responder").css('z-index'));
		this.curZindex = curzindex;
		switch(curzindex){
			case 1:
			this.closeDeviceMenu();
			break;
			case 5:
			this.closeDeviceMenu();
			break;
			case 10:
			this.adjustDeviceMenu();
			break;
		}
	},
	openDeviceMenu:function(){
		var thisobj = this;
		this.action = true;
		$("#wrapper").stop(true, true).animate({'margin-left':thisobj.openwidth+'%'}, 600, function(){
			$("#wrapper").bind("click", function(){
				thisobj.closeDeviceMenu();
				$("#wrapper").css('cursor','pointer');
				return false;
			});
			$("#nav-toggle").addClass("active");
			thisobj.isopen = true;
			thisobj.action = false;
		});
	},
	adjustDeviceMenu:function(){
		//Useful if menu size is different from Desktop to Tablet
		var thisobj = this;
		this.action = true;
		if(this.isopen){
			$("#wrapper").stop(true, true).css({'margin-left':thisobj.openwidth+'%'});
		}
	},
	closeDeviceMenu:function(){
		//Closes menu for tablets and phones.
		var thisobj = this;
		this.action = true;
		$("#wrapper").stop(true, true).animate({'margin-left':'0'}, 600, function(){
			$("#wrapper").unbind("click").css('cursor','default');
			$("#nav-toggle").removeClass("active");
			thisobj.isopen = false;
			thisobj.action = false;
		});
	},
	closeAllMenus:function(){
		if(this.isopen){
			this.closeDeviceMenu();
		}
	}
}
