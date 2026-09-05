//Keeps keyboard focus from landing on choices hidden by a collapsed menu/group.
function syncChoiceTabIndex(){
  var menuOpen = $(".basechoices").hasClass("open");
  $(".basechoices .choice, .basechoices .choice-toggle").each(function(){
    var $ownLi = $(this).closest("li.choiceitem");
    var visible = menuOpen && $ownLi.parents("li.choice-group").not(".open").length === 0;
    $(this).attr("tabindex", visible ? 0 : -1);
  });
}

function updateChoiceHeading(name){
  $(".choicename_name").text(name);
  var wiki = planet.getWiki(name);
  $(".choicename_wiki").attr("href", wiki).prop("hidden", !wiki);
}

//The Sun and the Moon are the only bodies commonly spoken of with "the" -- everything
//else (Mercury, Titan, Callisto...) is a proper name and reads oddly with an article.
function printSubject(name){
  if(name === 'Sol'){ return 'the Sun'; }
  if(name === 'Moon'){ return 'the Moon'; }
  return name;
}

function updatePrintSummary(){
  $(".print-summary-body").text(printSubject(planet.targetbody));
  $(".print-summary-size").text($("#sunsize").val());
  $(".print-summary-unit").text(planet.unit);
}

$(document)
.ready(function(){
  planet.init();
  syncChoiceTabIndex();
  updateChoiceHeading(planet.targetbody);
  updatePrintSummary();
})
.on("keyup change", "#sunsize", function(){
  planet.focalsize = $(this).val();
  planet.setMeasurements();
  updatePrintSummary();
})
.on("click", ".action_choosebase", function(){
  var open = $(".basechoices").toggleClass("open").hasClass("open");
  $(this).attr("aria-expanded", open);
  syncChoiceTabIndex();
})
.on("click", ".basechoices .choice-toggle", function(e){
  e.stopPropagation();
  var $li = $(this).closest("li.choice-group");
  var open = $li.toggleClass("open").hasClass("open");
  $(this).attr("aria-expanded", open);
  syncChoiceTabIndex();
})
.on("click", ".basechoices .choice", function(){
  $("#input_step2").show();
  planet.targetbody = $(this).attr("data-body");
  $(".basechoices").removeClass("open");
  $(".action_choosebase").attr("aria-expanded", false).trigger("focus");
  syncChoiceTabIndex();
  $("#sunsize").trigger("keyup");
  updateChoiceHeading(planet.targetbody);
})
.on("click", ".unit-toggle", function(){
  planet.setUnit($(this).attr("data-unit"));
  updatePrintSummary();
})
;
