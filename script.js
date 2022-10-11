

// $("h1").fadeOut(1000);
// $("h1").fadeIn(1000);

// for (var i = 0; i < 5;i++) {
//     $("h1").slideUp(1000);
//     $("h1").slideDown(1000);
// }
// $("h1").append("<p> Заголовок</p>");

// for(var i = 0; i < 5; i++) {
//     $("h1").hide(1000);
//     $("h1").show(1000);
// }
// $("h1").append("<p>Заголовок</p>");

// for(var i =0; i<5; i++) {
//     var friend = prompt("введите имя ваших друзей");
//     $("body").append("<p>" + friend + "</p>").fadeIn(1000).hide(1000);
//     $("h1").text("Мои друзья");
// }
// $("p").append("  лучший!");

// var step = 0;
// for(var i = 0; i<5; i++) {
//     $("h1").fadeOut(1000+step);
//     $("h1").fadeIn(1000+step);
//     step+=1000;
// }

// $("h1").fadeOut(1000).delay(5000).fadeIn(1000);

// $("h1").fadeTo(1000, 0.5);

// var leftOffset = 0;
// var moveHeading = function () {
//     $("#heading").offset({ left: leftOffset });
//     leftOffset++;
//     if (leftOffset > 200) {
//         leftOffset = 0;
//     }
// };
// setInterval(moveHeading, 30);

// var clickHandler = function (event) {
//     console.log("Клик! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);

// $("html").mousemove(function(event){
//     $("#heading").offset({
//         left: event.pageX,
//         top: event.pageY
//     });
// });

// $("html").click(function(event){
//     $("#heading").offset({
//         left: event.pageX,
//         top: event.pageY
//     });
// });

// var leftOffset = 0;
// var topOffset = 0;
// var set = "вправо";

// var moveHeading = function(){
//     $("#heading").offset({
//         left:leftOffset,
//         top:topOffset
//     });
//     if(set === "вправо"){
//         leftOffset++;
//         if(leftOffset>200){
//             leftOffset=200;
//             set="вниз";
//         }
//     }
//     else if(set === "вниз"){
//         topOffset++;
//         if(topOffset>200){
//             topOffset=200;
//             set="влево";
//         }
//     }
//     else if(set === "влево"){
//         leftOffset--;
//         if(leftOffset<0){
//             leftOffset=0;
//             set="вверх";
//         }
//     }
//     else if(set === "вверх"){
//         topOffset--;
//         if(topOffset<0){
//             topOffset=0;
//             set="вправо";
//         }
//     }
// };
// var a = setInterval(moveHeading,10);

// var clickHandler = function(){
//     clearInterval(a);
// };
// $("h1").click(clickHandler);


var leftOffset = 0;
var topOffset = 0;
var set = "вправо";

var moveHeading = function(){
    $("#heading").offset({
        left:leftOffset,
        top:topOffset
    });
    if(set === "вправо"){
        leftOffset++;
        if(leftOffset>200){
            leftOffset=200;
            set="вниз";
        }
    }
    else if(set === "вниз"){
        topOffset++;
        if(topOffset>200){
            topOffset=200;
            set="влево";
        }
    }
    else if(set === "влево"){
        leftOffset--;
        if(leftOffset<0){
            leftOffset=0;
            set="вверх";
        }
    }
    else if(set === "вверх"){
        topOffset--;
        if(topOffset<0){
            topOffset=0;
            set="вправо";
        }
    }
};
var a = setInterval(moveHeading,10);
var speed = 50;
var clicks = 0;
var clickHandler = function() {
    setInterval(moveHeading, speed);
    speed--;
    $("h1").text("Количество кликов " + clicks);
    clicks++;
    if(clicks>=10){
        clearInterval(a);
        $("h1").text("Вы победили!");
    }
};
$("h1").click(clickHandler);