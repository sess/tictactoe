let player = "X";
let turns = 0;
let end = false;

$("#button1").click( function() {
    performLogic("#button1","#tile1");
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
});

function performLogic(buttonId,tileId) {
    if (!end) {
        placePiece(buttonId,tileId);
        checkVerticalWin();
        checkHorizontalWin();
        checkDiagonalWin();
        changePlayers();
    }
}

function placePiece(buttonId,tileId) {
    $(buttonId).hide();
    $(tileId).text(player);    
}

function changePlayers() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
    turns++;
    if (turns === 9) {
        end = true;
        $("h1").text("Draw!");
        
    }
}

function checkVerticalWin() {
    if (isMatching("#tile1","#tile4","#tile7") ||
        isMatching("#tile2","#tile5","#tile8") ||
        isMatching("#tile3","#tile6","#tile9")) {
            end = true;
            $("h1").text(player + " Wins!");            
        }
}

function checkHorizontalWin() {
    if (isMatching("#tile1","#tile2","#tile3") ||
        isMatching("#tile4","#tile5","#tile6") ||
        isMatching("#tile7","#tile8","#tile9")) {
            end = true;
            $("h1").text(player + " Wins!");
        }
}

function checkDiagonalWin() {
    if (isMatching("#tile1","#tile5","#tile9") ||
        isMatching("#tile3","#tile5","#tile7")) {
            end = true;
            $("h1").text(player + " Wins!");
        }
}

function isMatching(id1, id2, id3) {
    if ($(id1).text() === player &&
        $(id2).text() === player &&
        $(id3).text() === player)
        {
            return true;
        }
}