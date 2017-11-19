//console.log('ready next');
$(document).ready(function() {
	//console.log('ready');
	var randomNumber = Math.floor(Math.random() * 24) + 1;
	//console.log('randomNumber', randomNumber);
	$("#randomNumber").html(randomNumber);

var total=0;

var wins=0;

var losses=0;

var crystalNumber1= Math.floor(Math.random() * 12) + 1;

var crystalNumber2= Math.floor(Math.random() * 12) + 1;

var crystalNumber3= Math.floor(Math.random() * 12) + 1;

var crystalNumber4= Math.floor(Math.random() * 12) + 1;


function checkWin (){
if (total === randomNumber) {
	wins++;
	$(".wins").html("wins " + wins);
	console.log("wins");
	reset();
}

if (total > randomNumber) {
	losses++;
	$(".losses").html("Losses " + losses);
	console.log("losses");
	reset();
}
}

//creates random number result for crystals. 
$(".crystal1").on("click", function() {
	console.log(crystalNumber1);
	//puts crystals in score box
	total += crystalNumber1 //update all
	$(".score").html(total);
	checkWin();
});


$(".crystal2").on("click", function() {
	console.log(crystalNumber2);
	total += crystalNumber2
	$(".score").html(total);
	checkWin();
});

$(".crystal3").on("click", function() {
	console.log(crystalNumber3);
	total += crystalNumber3
	$(".score").html(total);
	checkWin();
});

$(".crystal4").on("click", function() {
	console.log(crystalNumber4);
	total += crystalNumber4
	$(".score").html(total);
	checkWin();
});

function reset () {
	
	randomNumber = Math.floor(Math.random() * 24) + 1;
	
	$("#randomNumber").html(randomNumber);

	crystalNumber1= Math.floor(Math.random() * 12) + 1;

	crystalNumber2= Math.floor(Math.random() * 12) + 1;

	 crystalNumber3= Math.floor(Math.random() * 12) + 1;

	 crystalNumber4= Math.floor(Math.random() * 12) + 1;

	 total=0;

	 $(".score").html(total);


}
});


//reset crystals and random values



