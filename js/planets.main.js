//Targetbody diameters of items and orbits in KM.
var planet = {
	loaded:false,
	focalsize:1,
	focusvalue:1,
	accuracy:2,
	targetbody:'Sol',
	unit:'cm',
	cmPerInch:2.54,
	data:[
		{name:'Sol',            v:1392000,     wiki:'https://en.wikipedia.org/wiki/Sun'},
		{name:'Mercury',        v:4879,        wiki:'https://en.wikipedia.org/wiki/Mercury_(planet)'},
		{name:'Mercury Orbit',  v:115800000,  parent:'Mercury',  wiki:'https://en.wikipedia.org/wiki/Mercury_(planet)'},
		{name:'Venus',          v:12104,       wiki:'https://en.wikipedia.org/wiki/Venus'},
		{name:'Venus Orbit',    v:216400000,  parent:'Venus',    wiki:'https://en.wikipedia.org/wiki/Venus'},
		{name:'Earth',          v:12756,       wiki:'https://en.wikipedia.org/wiki/Earth'},
		{name:'Earth Orbit',    v:299200000,  parent:'Earth',    wiki:'https://en.wikipedia.org/wiki/Earth'},
		{name:'Moon',           v:3475,       parent:'Earth',    wiki:'https://en.wikipedia.org/wiki/Moon'},
		{name:'Moon Orbit',     v:768800,     parent:'Moon',     wiki:'https://en.wikipedia.org/wiki/Moon'},
		{name:'Mars',           v:6792,        wiki:'https://en.wikipedia.org/wiki/Mars'},
		{name:'Mars Orbit',     v:455800000,  parent:'Mars',     wiki:'https://en.wikipedia.org/wiki/Mars'},
		{name:'Phobos',         v:22.2,       parent:'Mars',     wiki:'https://en.wikipedia.org/wiki/Phobos_(moon)'},
		{name:'Deimos',         v:12.4,       parent:'Mars',     wiki:'https://en.wikipedia.org/wiki/Deimos_(moon)'},
		{name:'Jupiter',        v:142984,      wiki:'https://en.wikipedia.org/wiki/Jupiter'},
		{name:'Jupiter Orbit',  v:1557200000, parent:'Jupiter',  wiki:'https://en.wikipedia.org/wiki/Jupiter'},
		{name:'Amalthea',       v:167,        parent:'Jupiter',  wiki:'https://en.wikipedia.org/wiki/Amalthea_(moon)'},
		{name:'Io',             v:3643.2,     parent:'Jupiter',  wiki:'https://en.wikipedia.org/wiki/Io_(moon)'},
		{name:'Europa',         v:3121.6,     parent:'Jupiter',  wiki:'https://en.wikipedia.org/wiki/Europa_(moon)'},
		{name:'Ganymede',       v:5262.4,     parent:'Jupiter',  wiki:'https://en.wikipedia.org/wiki/Ganymede_(moon)'},
		{name:'Callisto',       v:4820.6,     parent:'Jupiter',  wiki:'https://en.wikipedia.org/wiki/Callisto_(moon)'},
		{name:'Saturn',         v:120536,      wiki:'https://en.wikipedia.org/wiki/Saturn'},
		{name:'Saturn Orbit',   v:2867000000, parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Saturn'},
		{name:'Mimas',          v:396.4,      parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Mimas'},
		{name:'Enceladus',      v:504.2,      parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Enceladus'},
		{name:'Tethys',         v:1066,       parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Tethys_(moon)'},
		{name:'Dione',          v:1123,       parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Dione_(moon)'},
		{name:'Rhea',           v:1527,       parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Rhea_(moon)'},
		{name:'Titan',          v:5149.5,     parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Titan_(moon)'},
		{name:'Iapetus',        v:1469,       parent:'Saturn',   wiki:'https://en.wikipedia.org/wiki/Iapetus_(moon)'},
		{name:'Uranus',         v:51118,       wiki:'https://en.wikipedia.org/wiki/Uranus'},
		{name:'Uranus Orbit',   v:5745000000, parent:'Uranus',   wiki:'https://en.wikipedia.org/wiki/Uranus'},
		{name:'Miranda',        v:471.6,      parent:'Uranus',   wiki:'https://en.wikipedia.org/wiki/Miranda_(moon)'},
		{name:'Ariel',          v:1157.8,     parent:'Uranus',   wiki:'https://en.wikipedia.org/wiki/Ariel_(moon)'},
		{name:'Umbriel',        v:1169.4,     parent:'Uranus',   wiki:'https://en.wikipedia.org/wiki/Umbriel'},
		{name:'Titania',        v:1577.8,     parent:'Uranus',   wiki:'https://en.wikipedia.org/wiki/Titania_(moon)'},
		{name:'Oberon',         v:1522.8,     parent:'Uranus',   wiki:'https://en.wikipedia.org/wiki/Oberon_(moon)'},
		{name:'Neptune',        v:49528,       wiki:'https://en.wikipedia.org/wiki/Neptune'},
		{name:'Neptune Orbit',  v:9008900000, parent:'Neptune',  wiki:'https://en.wikipedia.org/wiki/Neptune'},
		{name:'Proteus',        v:420,        parent:'Neptune',  wiki:'https://en.wikipedia.org/wiki/Proteus_(moon)'},
		{name:'Triton',         v:2706.8,     parent:'Neptune',  wiki:'https://en.wikipedia.org/wiki/Triton_(moon)'},
		{name:'Nereid',         v:340,        parent:'Neptune',  wiki:'https://en.wikipedia.org/wiki/Nereid_(moon)'},
		{name:'Pluto',          v:2376.6,      wiki:'https://en.wikipedia.org/wiki/Pluto'},
		{name:'Pluto Orbit',    v:11812800000, parent:'Pluto',   wiki:'https://en.wikipedia.org/wiki/Pluto'},
		{name:'Charon',         v:1207.2,     parent:'Pluto',    wiki:'https://en.wikipedia.org/wiki/Charon_(moon)'},
		{name:'Charon Orbit',   v:39192,      parent:'Charon',   wiki:'https://en.wikipedia.org/wiki/Charon_(moon)'},
		{name:'Styx',           v:10.5,       parent:'Pluto',    wiki:'https://en.wikipedia.org/wiki/Styx_(moon)'},
		{name:'Nix',            v:42,         parent:'Pluto',    wiki:'https://en.wikipedia.org/wiki/Nix_(moon)'},
		{name:'Kerberos',       v:12,         parent:'Pluto',    wiki:'https://en.wikipedia.org/wiki/Kerberos_(moon)'},
		{name:'Hydra',          v:51,         parent:'Pluto',    wiki:'https://en.wikipedia.org/wiki/Hydra_(moon)'}
	],
	getWiki:function(name){
		for(var i=0; this.data.length > i; i++){
			if(this.data[i].name === name){
				return this.data[i].wiki || '';
			}
		}
		return '';
	},
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

    		//Create HTML for output. The unit is purely a label: this is a ratio of the
    		//focus body's real diameter, so whatever unit the user's input represents is
    		//the same unit every result comes out in.
    		for(i=0; this.data.length > i; i++){
      			var finaldia = (this.focalsize * (this.data[i].v / this.focusvalue)).toFixed(this.accuracy);
      			var tier = this.data[i].parent ? ' planetdata-child' : ' planetdata-major';
     			returndata.push('<li class="planetdata'+tier+'" rel="'+this.data[i].name+'">'+this.data[i].name+': <span>'+finaldia+'</span> '+this.unit+'</li>');
    		}
    		$("#return_dia").html(returndata.join("\n"));
	},
	//Switching units converts the currently entered size so the physical reference
	//size stays the same, just re-expressed in the new unit.
	setUnit:function(newUnit){
		if(newUnit === this.unit){ return; }
		var $input = $("#sunsize");
		var val = parseFloat($input.val());
		if(!isNaN(val)){
			val = (newUnit === 'in') ? (val / this.cmPerInch) : (val * this.cmPerInch);
			val = Math.round(val * 100) / 100;
			$input.val(val);
		}
		this.unit = newUnit;
		this.focalsize = $input.val();
		$(".unit-toggle").attr("aria-pressed", "false").filter('[data-unit="'+newUnit+'"]').attr("aria-pressed", "true");
		this.setMeasurements();
	},
	init:function(){
		//Initialize. Build a nested list, grouping each moon/orbit under its parent body.
		var self = this;
		function buildLevel(parentName){
			var items = self.data.filter(function(d){ return (d.parent || null) === parentName; });
			if(!items.length){ return ''; }
			var html = '<ul class="choicelist">';
			items.forEach(function(d){
				var children = buildLevel(d.name);
				var hasChildren = children !== '';
				html += '<li class="choiceitem'+(hasChildren ? ' choice-group' : '')+'">';
				if(hasChildren){
					html += '<button type="button" class="choice-toggle" aria-expanded="false" aria-label="Toggle '+d.name+' moons/orbit">&#9656;</button>';
				}
				html += '<button type="button" class="choice" data-body="'+d.name+'">'+d.name+'</button>';
				html += children;
				html += '</li>';
			});
			html += '</ul>';
			return html;
		}
		$(".basechoices").html(buildLevel(null));
	}
};
