let chessPiece = "PAWN"

switch(chessPiece.toLowerCase()){

  case "king":
    console.log("one square in any direction.");
    return "one square in any direction.";
  case "queen":
    console.log("diagonally, horizontally, or vertically any number of squares.");
    return "diagonally, horizontally, or vertically any number of squares.";
  case "rook":
    console.log("horizontally or vertically any number of squares.");
    return "horizontally or vertically any number of squares.";
  case "bishop":
    console.log("diagonally any number of squares.");
    return "diagonally any number of squares.";
  case "knight":
    console.log("in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.");
    return "in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.";
  case "pawn":
    console.log("vertically forward one square, with the option to move two squares if they have not yet moved.");
    return "vertically forward one square, with the option to move two squares if they have not yet moved.";
  default:
    console.log("invalid piece!");
    return "invalid piece!";

}