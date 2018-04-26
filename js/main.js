function showFact() {
  $("#fact").text(facts[Math.floor(Math.random()*facts.length)]);
}
$(document).ready(() => {
  showFact();
  if ($(window).scrollTop() == 0)
    $("#upbutton").addClass("disabled");
  $(window).scroll(() => {
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
  });
  $(".button, .cadre").mouseenter(function() {
    $(this).addClass("animated pulse");
  });
  $(".button, .cadre").mouseleave(function() {
    $(this).removeClass("animated pulse");
  });
  $("#showfact").click(showFact);
});
