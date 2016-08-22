var planet = {
	loaded:false,
  	focalsize:1,
  	focusvalue:1,
	targetbody:'Sol',
  	data:[
		{name:'Sol', dia:1392000},
		{name:'Mercury', dia:4879},
		{name:'Venus', dia:12104},
		{name:'Earth', dia:12756},
		{name:'Moon', dia:3475},
		{name:'Mars', dia:6792},
		{name:'Jupiter', dia:142984},
		{name:'Saturn', dia:120536},
		{name:'Uranus', dia:51118},
		{name:'Neptune', dia:49528},
		{name:'Pluto', dia:2370}
  	],
  	setMeasurements:function(){
		var i = 0;
		var returndata = [];
		
		//Grab diameter of focus planet.
		for(i=0; this.data.length > i; i++){
			if(this.data[i].name === this.targetbody){
				this.focusvalue = this.data[i].dia;
				break;
			}
		}
		//Create HTML for output.
		for(i=0; this.data.length > i; i++){
			var finaldia = (this.focalsize * (this.data[i].dia / this.focusvalue)).toFixed(2);
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