//console.log('ready next');
$(document).ready(function() {
	//console.log('ready');
	var randomNumber = Math.floor(Math.random() * 24) + 1;
	//console.log('randomNumber', randomNumber);
	$("#randomNumber").html(randomNumber);
});

var crystalNumber1= Math.floor(Math.random() * 12) + 1;

var crystalNumber2= Math.floor(Math.random() * 12) + 1;

var crystalNumber3= Math.floor(Math.random() * 12) + 1;

var crystalNumber4= Math.floor(Math.random() * 12) + 1;

var wins = 0;
var losses = 0;
//var score= [crystalNumber1,crystalNumber2,crystalNumber3,crystalNumber4];
var result = 

int score = 0;
    function score() {
document.getElementById("score").innerHTML = score;


var score = crystalNumber1 + crystalNumber2 + crystalNumber3 + crystalNumber4;

if (randomNumber = score) {
	document.write("You Win!");
	return 1;
}

function updateScores(score, points) {
    if(score === 1) {
      wins += points;
    }

}


//creates random number result for crystals. 
$(".crystal1").on("click", function() {
	console.log(crystalNumber1);
	//puts crystals in score box
	$(".score").html(crystalNumber1);
});


$(".crystal2").on("click", function() {
	console.log(crystalNumber2);
	$(".score").html(crystalNumber2);
});

$(".crystal3").on("click", function() {
	console.log(crystalNumber3);
	$(".score").html(crystalNumber3);
});

$(".crystal4").on("click", function() {
	console.log(crystalNumber4);
	$(".score").html(crystalNumber4);

//if score = $("#randomNumber", function() {
//	wins++;
//

  	



//grab 