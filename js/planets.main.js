var planet = {
	loaded:false,
  	focalsize:1,
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
		console.log("Setting Measurements.");
		var psize = [];
		var i = 0;
		var returndata = [];
		psize.focusval = 1;
		
		//Grab diameter of focus planet.
		for(i=0; this.data.length > i; i++){
			if(this.data[i].name === this.targetbody){
				psize.focusval = this.data[i].dia;
				break;
			}
		}

		for(i=0; this.data.length > i; i++){
			console.log(this.data[i].dia / psize.focusval);
			var finaldia = (this.focalsize * (this.data[i].dia / psize.focusval)).toFixed(2);
			//console.log(this.data[i].name+' - '+this.data[i].dia+' - '+finaldia);
			returndata.push('<li class="planetdata" rel="'+this.data[i].name+'">'+this.data[i].name+': <span>'+finaldia+'</span> cm</li>');
		}
		$("#return_dia").html(returndata.join("\n"));
	},
	init:function(){
		var i = 0;
		var returndata = [];
		for(i=0; this.data.length > i; i++){
			returndata.push('<a href="#" class="choice" rel="'+this.data[i].name+'">'+this.data[i].name+'</a>');
		}
		$(".basechoices").html(returndata.join("\n"));               
	}
};
