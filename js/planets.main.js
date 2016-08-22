var planet = {
	loaded:false,
  focalsize:1,
  targetbody:'sol',
  dia:{
    sol:1392000,
    mercury:4879,
    venus:12,104,
    earth:12756,
    moon:3475,
    mars:6792,
    jupiter:142984,
    saturn:120536,
    uranus:51118,
    nepture:49528,
    pluto:2370
  },
  setMeasurements:function(focalsize){
    var psize = [];
    $("#qa").text('wut');
    $("#qa").text(this.dia[this.targetbody]);
    psize ['focus'] = this.dia[this.targetbody];
    psize[1] = this.focalsize * (this.dia.mecury / psize ['focus']);
    psize[2] = this.focalsize * (this.dia.venus / psize ['focus']);
    psize[3] = this.focalsize * (this.dia.earth / psize ['focus']);
    psize[31] = this.focalsize * (this.dia.moon / psize ['focus']);
    psize[4] = this.focalsize * (this.dia.mars / psize ['focus']);
    psize[5] = this.focalsize * (this.dia.jupiter / psize ['focus']);
    psize[6] = this.focalsize * (this.dia.saturn / psize ['focus']);
    psize[7] = this.focalsize * (this.dia.uranus / psize ['focus']);
    psize[8] = this.focalsize * (this.dia.neptune / psize ['focus']);
    psize[9] = this.focalsize * (this.dia.pluto / psize ['focus']);
    $("#planet_1 span").text(psize[1]);
    $("#planet_2 span").text(psize[2]);
    $("#planet_3 span").text(psize[3]);
    $("#planet_4 span").text(psize[4]);
    $("#planet_5 span").text(psize[5]);
    $("#planet_6 span").text(psize[6]);
    $("#planet_7 span").text(psize[7]);
    $("#planet_8 span").text(psize[8]);
    $("#planet_9 span").text(psize[9]);
  }
};

function logme(data){
	if(window.console){ console.log(data); }
}
