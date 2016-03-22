$(document).ready(function() {
  $("h1").click(function() {
    alert("This is header 1");
  });
  $("h2").dblclick(function() {
    alert("This is header 2");
  });
  $("h3").hover(function() {
    alert("This is header 3");
  });
});
