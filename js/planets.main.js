var planet = {
	loaded:false,
  	focalsize:1,
  	focusvalue:1,
	accuracy:2,
	targetbody:'Sol',
  	data:[
		{name:'Sol', v:1392000},
		{name:'Mercury', v:4879},
		{name:'Venus', v:12104},
		{name:'Earth', v:12756},
		{name:'Moon', v:3475},
		{name:'Mars', v:6792},
		{name:'Jupiter', v:142984},
		{name:'Saturn', v:120536},
		{name:'Uranus', v:51118},
		{name:'Neptune', v:49528},
		{name:'Pluto', v:2370}
  	],
  	setMeasurements:function(){
		var i = 0;
		var returndata = [];
		
		//Grab diameter of focus planet.
		for(i=0; this.data.length > i; i++){
			if(this.data[i].name === this.targetbody){
				this.focusvalue = this.data[i].v;
				break;
			}
		}
		//Create HTML for output.
		for(i=0; this.data.length > i; i++){
			var finaldia = (this.focalsize * (this.data[i].v / this.focusvalue)).toFixed(this.accuracy);
			returndata.push('<li class="planetdata" rel="'+this.data[i].name+'">'+this.data[i].name+': <span>'+finaldia+'</span> cm</li>');
		}
		$("#return_dia").html(returndata.join("\n"));
	},
	init:function(){
		//Initialize.
		var i = 0;
		var returndata = [];
		for(i=0; this.data.length > i; i++){
			returndata.push('<a href="#" class="choice" rel="'+this.data[i].name+'">'+this.data[i].name+'</a>');
		}
		$(".basechoices").html(returndata.join("\n"));               
	}
};