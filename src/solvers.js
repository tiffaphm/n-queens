/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var newBoard = new Board({'n': n});
  
  for (var i = 0; i < n; i++) {
    newBoard.togglePiece(i, i);
    var row = newBoard.get(i);
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var argRow = n - 1;
  var solutions = 0;

  var newBoard = new Board({'n': n});

  var lastMoveValid = false;

  var countSolutions = function(n, row) {
    var maxRowIndex = n - 1;
    // base case last row
    // if(row === maxRowIndex) {
    //   solutions++;
    // }
    lastMoveValid = false;

    for(var i = 0; i < n; i++) {
      // try toggling piece at row
      newBoard.togglePiece(row, i);
      lastMoveValid = true;
      
      // undo if conflicts
      if(newBoard.hasAnyRooksConflicts()) {
        newBoard.togglePiece(row, i);
        lastMoveValid = false;
      }

      // only do recursion if you have more rooks to place
      // AND if you made a valid move (don't want to branch from a bad move)
      else if(row < maxRowIndex) {
        countSolutions(n, row + 1);
      }

      // this will execute only if you are done with recursion
      if(lastMoveValid && !(row < maxRowIndex)) {
        solutions++;
      }

      // should be the last row, last col
      if(row === maxRowIndex && i === n - 1) {
        newBoard = new Board({'n': n});
      }

    }
    // this is not reset after you find the first solution!!!
    // newBoard = new Board({'n': n});
    
  }

  countSolutions(n, 0);

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution)); 

    

  console.log('Number of solutions for ' + n + ' rooks:', solutions);
  return solutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutions;
};
