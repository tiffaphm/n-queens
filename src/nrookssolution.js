window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var newBoard = new Board({'n': n})

  var putRooks = function(obj, c) {
    if (c === n) {
      solutionCount++;
      return;
    }
    for (var r = 0; r < n; r++) {
      if (obj[r]) {
        continue;
      }
      newBoard.togglePiece(r, c)

      if (!newBoard.hasAnyRooksConflicts()) {
        obj[r] = true; 
        putRooks(obj, c + 1)
      }
      newBoard.togglePiece(r, c);
      obj[r] = false;

    }
  }

  putRooks({}, 0);
  return solutionCount;
} ;
