/* global $ */

let currentPlayer = "X";

let previousPlayer = "O";

let turns = 0;

let win = false;

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

function check(a,b,c){
    if(a === previousPlayer && b === previousPlayer && c === previousPlayer){
        return true;    
    }else {
        return false;
    }
}

function winText(){
    $("h1").text( '"' + previousPlayer + '"' + " " + "has won");  
    win = true;   
}

function checkVerticalWins(){
   /* if((a === b && a === c) && a,b,c === previousPlayer){
        $("h1").text(previousPlayer + " " + "has won");
    } */
   
    if(check($("#tile3").text(),$("#tile6").text(),$("#tile9").text()) === true){
        winText();    
    }
    
    if(check($("#tile2").text(),$("#tile5").text(),$("#tile8").text()) === true){
        winText();
    }
    
    if(check($("#tile1").text(),$("#tile4").text(),$("#tile7").text()) === true){
        winText();
    }
}

function checkHorizontalWins(a,b,c){
    /* if(a === b && a === c){
        console.log("test2");
        $("h1").text(previousPlayer + " " + "has won");
    } */
    
    if(check($("#tile1").text(),$("#tile2").text(),$("#tile3").text())){
        winText();
    }
    
    if(check($("#tile4").text(),$("#tile5").text(),$("#tile6").text())){
        winText();
    }
    
    if(check($("#tile7").text(),$("#tile8").text(),$("#tile9").text())){
        winText();
    }
    
}

function checkDiagonalWins(a,b,c){
    /* if(a === b || a=== c){
        console.log("test3")
        $("h1'").text(previousPlayer + " " + "has won");
    }*/
    
    if(check($("#tile1").text(),$("#tile5").text(),$("#tile9").text())){
        winText();
    }
    
    if(check($("#tile3").text(),$("#tile5").text(),$("#tile7").text())){
        winText();
    }
}

function checkDraw(){
    
    if(win == false && turns == 8){
        $("h1").text( '"' + previousPlayer + '"' + " " + "&" + " " + '"'  + currentPlayer + '"' + " " + "have a draw");   
    }
    console.log(turns);    
}

function endGame(){
    if(win == true){
        $("button").hide();
    }
}

function performLogic(buttonId, tileId){
    $(buttonId).hide();
    $(tileId).text(currentPlayer);
    
    playerTurn();

    checkVerticalWins();
    checkHorizontalWins();
    checkDiagonalWins();
    checkDraw();
    endGame();
    
    $(".nOfTurns").text(turns + 1);
}

/* function check(aTile,hTile,hTile2,vTile,vTile2,dTile,dTile2){
    if((aTile === hTile && aTile === hTile2) || (aTile === vTile && aTile === vTile2) || (aTile === dTile && aTile === dTile2)){
        console.log("test1");
        $("h1").text(previousPlayer + " " + "has won");
    }/*else if(aTile === vTile && vTile2){
        console.log("test2");    
        $("h1").text(previousPlayer + " " + "has won");
    }else if(aTile === dTile && dTile2){
        console.log("test3");
        $("h1").text(previousPlayer + " " + "has won");
    }
} */

/*function check2(aTile,hTile,hTile2,vTile,vTile2){
    if(aTile === hTile && hTile2){
        console.log("test1");
    }else if(aTile === vTile && vTile2){
        console.log("test2");        
    }
} */

$("#button1").click( function() {
    performLogic("#button1","#tile1");
    //check("#tile1","#tile2","#tile3","#tile4","#tile7","#tile5","#tile9");
    turns = turns + 1;
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
    //check2("#tile2","#tile1","#tile3","#tile5","#tile8");
    turns = turns + 1;
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
    turns = turns + 1;
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
    turns = turns + 1;
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
    //check("#tile5","#tile4","#tile6","#tile2","#tile8","#tile1","#tile9");
    turns = turns + 1;
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
    turns = turns + 1;
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
    turns = turns + 1;
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
    //check2("#tile8","#tile7","#tile9","#tile2","#tile5");
    turns = turns + 1;
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
    turns = turns + 1;
});