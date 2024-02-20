let Sudoku = board => {
    const size = 9; // Size of the board (9x9)
    const boxSize = 3; // Size of the sub-boxes
  
    // Function to check if a number can be placed at the given position
    let toSelect = (gameBoard, row, col, thisNum) => {
      for (let a = 0; a < size; a++) {
        // Check row and column
        if (gameBoard[row][a] === thisNum || board[a][col] === thisNum) {
          return false;
        }
  
        // Check 3x3 sub-box
        const startRow = Math.floor(row / boxSize) * boxSize;
        const startCol = Math.floor(col / boxSize) * boxSize;
        for (let i = 0; i < boxSize; i++) {
          for (let j = 0; j < boxSize; j++) {
            if (gameBoard[i + startRow][j + startCol] === thisNum) {
              return false;
            }
          }
        }
      }
      return true;
    }
  
    // Recursive function to solve the Sudoku
    function solve() {
      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          // Skip non-empty cells
          if (gameBoard[row][col] !== 0) {
            continue;
          }
  
          for (let thisNum = 1; thisNum <= size; thisNum++) {
            if (toSelect(gameBoard, row, col, thisNum)) {
              gameBoard[row][col] = thisNum; // Place num
              if (solve()) { // Recurse with the current board
                return true; // Returns true when solved
              }
              gameBoard[row][col] = 0; // Backtrack
            }
          }
  
          return false; // Trigger backtracking
        }
      }
      return true; // Sudoku solved
    }
  
    solve(); // Calling the Solve function to solve the game
    return gameBoard; // Return the solved gameboard
  }
  
  // Testing code
  const gameBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  console.log(Sudoku(gameBoard));
  
