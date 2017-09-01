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
  var solutions = 0;
  var newBoard = new Board({'n': n});

  var countSolutions = function(row) {
    if (n === row) {
      solutions++;
      return;  
    }
    
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      
      if (!newBoard.hasAnyRooksConflicts()) {
        countSolutions(row + 1);
      } 
      newBoard.togglePiece(row, i);
    }
    
  };

  countSolutions(0);

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution)); 
  console.log('Number of solutions for ' + n + ' rooks:', solutions);
  return solutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var newBoard = new Board({'n': n});

  var placeQueens = function(row) {
    for (var c = 0; c < n; c++) {
      newBoard.togglePiece(row, c);
      
      if (!newBoard.hasAnyQueensConflicts()) {
        placeQueens(row + 1);
      } 
      newBoard.togglePiece(c);
    }
  };
  
  solution = newBoard.rows();

  placeQueens(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutions = 0;
  var newBoard = new Board({'n': n});

  var countSolutions = function(row) {
    if (n === row) {
      solutions++;
      // console.log(JSON.stringify(newBoard.rows()));
      return;  
    }
    
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (!newBoard.hasAnyQueenConflictsOn(row, i)) {
        countSolutions(row + 1);
      } 
      newBoard.togglePiece(row, i);
    }
    
  };

  countSolutions(0);
  console.log('Number of solutions for ' + n + ' queens:', solutions);
  return solutions;
};
