/* global $ */

let currentPlayer = "X";

let previousPlayer = "O";

function playerTurn(){
       if(currentPlayer === "X"){
        currentPlayer = "O";
    }else if(currentPlayer === "O"){
        currentPlayer = "X";
    }
    
    if(previousPlayer === "O"){
        previousPlayer = "X";
    }else if (previousPlayer === "X"){
        previousPlayer = "O";
    }
}

function performLogic(buttonId, tileId){
    $(buttonId).hide();
    $(tileId).text(currentPlayer);
    
    playerTurn();
}

function check(aTile,hTile,hTile2,vTile,vTile2,dTile,dTile2){
    if((aTile === hTile && aTile === hTile2) || (aTile === vTile && aTile === vTile2) || (aTile === dTile && aTile === dTile2)){
        console.log("test1");
        $("h1").text(previousPlayer + " " + "has won");
    }/*else if(aTile === vTile && vTile2){
        console.log("test2");    
        $("h1").text(previousPlayer + " " + "has won");
    }else if(aTile === dTile && dTile2){
        console.log("test3");
        $("h1").text(previousPlayer + " " + "has won");
    }*/
}

function check2(aTile,hTile,hTile2,vTile,vTile2){
    if(aTile === hTile && hTile2){
        console.log("test1");
    }else if(aTile === vTile && vTile2){
        console.log("test2");        
    }
}

$("#button1").click( function() {
    performLogic("#button1","#tile1");
    check("#tile1","#tile2","#tile3","#tile4","#tile7","#tile5","#tile9");
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
    check2("#tile2","#tile1","#tile3","#tile5","#tile8");
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
    check("#tile5","#tile4","#tile6","#tile2","#tile8","#tile1","#tile9");
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
    check2("#tile8","#tile7","#tile9","#tile2","#tile5");
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
});

