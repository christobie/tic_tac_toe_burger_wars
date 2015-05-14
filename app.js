/*   Tic-Tac-Toe Project by Chris Tobeck, WDI-BOS-07 at General Assembly.   */

$(document).ready(function(){
// Create a variable that will determine if we draw
// an X or 0 on the next click.
var makeMark = true;

var winner = false;


// Create an array to represent the game board in HTML.
// To start off with all square's context are empty strings
var board = ['', '', '', '','', '','','', '', ''];

// When user clicks on a square, make square X or O.
// Identifying all elements with class "square."
// Give each of these "square element a click handler"
$(".square").on("click", function(event){
  // We can get the square that was clicked by using
  // $(this)
  // Now that we have the square that was clicked we can set
  // it's text to be either 'X' or 'O'

  var boardIndex = event.target.id;

  if(makeMark){
    $(this).text('X');
    board[boardIndex] = 'X';
    makeMark = false;
   }else{
     $(this).text('O');
     makeMark = true;
     board[boardIndex] = 'O';
   }

   //check for X winner
   if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X'){
    winner = true;
   }
   else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X'){
    winner = true;
   }
   else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X'){
    winner = true;
   }
   else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X'){
    winner = true;
   }
   else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X'){
    winner = true;
   }
   else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X'){
    winner = true;
   }
   else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X'){
    winner = true;
   }
   else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X'){
    winner = true;
   }
   //check for O winner
   else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O'){
    winner = true;
   }
   else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O'){
    winner = true;
   }
   else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O'){
    winner = true;
   }
   else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O'){
    winner = true;
   }
   else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O'){
    winner = true;
   }
   else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O'){
    winner = true;
   }
   else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O'){
    winner = true;
   }
   else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O'){
    winner = true;
   }

});

});
