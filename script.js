$(".hide-button").click(function() {
  $("img").hide();
});

$(".show-button").click(function() {
  $("img").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").attr("src", "https://illustoon.com/photo/3487.png");
});

$(".message-button").click(function() {
  let message = $(".input").val();
  $(".message").append(` <p> ${message} </p> `);
});

$(".name-button").click(function() {
  let name = $(".input").val();
  $("h1").text(" ");
  $("h1").append(` My name is ${name} `);
});
