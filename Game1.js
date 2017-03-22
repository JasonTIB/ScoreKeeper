// var p1= document.querySelector("p");
// p1.addEventListener("mouseover",translate);

// function translate(){
// 	p1.textContent="Hola";
// }
// p1.addEventListener("mouseout",translate1);
// function translate1(){
// 	p1.textContent="Hello"
// }

// var lis = document.getElementsByTagName("li");
// for(var i = 0; i< lis.length; i++){
// 	lis[i].addEventListener("click", function(){
// 		console.log("you clicked an li");
// 	});
// }
// var body=document.querySelector("body")
// body.addEventListener("click", function({
	
// })


var player1Score=0
var player2Score=0;

var inc=document.getElementById("inc");
var ply=document.getElementById("ply");

var btn= document.querySelector("#p1");
var btn2= document.querySelector("#p2");

var pl1=document.querySelector("#pl1");
var pl2=document.querySelector("#pl2");

var resetButton=document.querySelector("#re");

resetButton.addEventListener("click",function(){
	player1Score=Player2Score=0;
	pl1.textContent=pl2.textContent=0;

});

btn.addEventListener("click", function(){
	if(player1Score < inc.value){
		player1Score++;
	}
	if(player2Score===inc.value){
		player1Score;
	}
	
	pl1.textContent=player1Score;
});

btn2.addEventListener("click", function(){
	if(player2Score < inc.value){
		player2Score++;
	}
	if(player1Score===inc.value){
		player2Score;
	}
	pl2.textContent=player2Score;
});

inc.addEventListener("change",function(){
	ply.textContent=inc.value
});









//var player1=document.getElementById("p1");
// player1.addeventListener("click",score();
// function score(){
// 	pl1.textContent

function volume(l,w,h){
	return l+w-h;
}
var length=12;
var width=8;
var height=3;