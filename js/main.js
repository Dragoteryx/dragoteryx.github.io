function showFact() {
  $("#fact").text(facts[Math.floor(Math.random()*facts.length)]);
}
function adjust() {
  $("#content").css("margin-left", $("#leftmenu").css("width"));
}
function setScrolling() {
  let scrollTop = $(window).scrollTop();
  let scrollBottom = scrollTop + $(window).height();
  if (scrollTop == 0)
    $("#upbutton").addClass("disabled");
  else
    $("#upbutton").removeClass("disabled");
  if (scrollTop > ($("#menu").offset().top + 50)) {
    $("#leftmenu").css("position", "fixed");
    $("#leftmenu").css("top", "0");
  } else {
    $("#leftmenu").css("position", "absolute");
    $("#leftmenu").css("top", "");
  }
}
$(document).ready(function() {
  adjust();
  showFact();
  setScrolling();
  $(window).resize(adjust);
  $("#showfact").click(showFact);
  $(window).scroll(setScrolling);
  $(".button, .cadre").mouseenter(function() {
    $(this).addClass("animated pulse");
  });
  $(".button, .cadre").mouseleave(function() {
    $(this).removeClass("animated pulse");
  });
});
