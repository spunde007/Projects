$(".expander").click(function() {
  $(this).next().toggleClass("open");
  $(this).toggleClass("active");
});