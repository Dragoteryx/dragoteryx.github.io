function showFact() {
  $("#fact").text(facts[Math.floor(Math.random()*facts.length)]);
}
$(document).ready(() => {
  showFact();
  $(window).scroll(() => {
    if ($(window).scrollTop() != 0)
      $("#leftmenu").css("border-top", "5px solid var(--vibrant)");
    else
      $("#leftmenu").css("border-top", "5px solid #333");
  });
  $(".button, .cadre").mouseenter(function() {
    $(this).addClass("animated pulse");
  });
  $(".button, .cadre").mouseleave(function() {
    $(this).removeClass("animated pulse");
  });
});
