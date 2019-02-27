//Spell #1

$(".hagao").click(function(){
   $("#hagao").fadeOut();
});



//Spell #2

$(".potsticker").click(function(){
    $("#potsticker").slideUp();
});



//Spell #3

$(".sesame").click(function(){
     $("#sesame").fadeOut();
});
$("button").click(function(){
     $(".sesame").fadeIn();
     $(".hagao").fadeIn();
     $(".potsticker").fadeIn();
});



