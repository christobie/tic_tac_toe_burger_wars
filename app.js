/*   Tic-Tac-Toe Project by Chris Tobeck, WDI-BOS-07 at General Assembly.   */

$(document).ready(function(){
  // Create a variable that will determine if
  // we draw an X or 0 on the next click.
  var drawMark = true;

  // Sets default as no-winner until an X or O winner is recognized.
  var winner = false;

  // Create an array to represent the game board in HTML.
  // To start off with all square's context are empty strings
  var board = ['', '', '', '','', '','','', '', ''];

  var resetBoard = function() {
    return 1;
  }

  // When user clicks on a square, make square X or O.
  // Identifying all elements with class "square."
  // Give each of these "square element a click handler"
  $(".square").one("click", function(event){

    if (!winner) {
      // We can get the square that was clicked by using
      // $(this)
      // Now that we have the square that was clicked we can set
      // it's text to be either 'X' or 'O'
      var boardIndex = event.target.id;

      if (drawMark) {
        $(this).html('<img src="images/burger-md.jpg">');
        board[boardIndex] = 'X';
        drawMark = false;
      } else {
        $(this).html('<img src="images/burger-bk.jpg">');
        drawMark = true;
        board[boardIndex] = 'O';
      }

      if( // ... some condition
          // Check for X winner...
          (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
          (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
          (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
          (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
          (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
          (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
          (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
          (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') ||
           // Check for O winner...
          (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
          (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
          (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
          (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
          (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
          (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
          (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
          (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
        ){
        winner = true;
        console.log("GAME OVER");
      }
    }
  });

  $("#reset").on("click",resetBoard())
});
