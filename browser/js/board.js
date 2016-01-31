$(function() {
  $board = $('#board');

  // Create board config for solidity
  var boardConfig = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'E', 'E', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'o', 'o', 'o', 'X', 'X', 'o', 'o', 'o', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['o', 'o', 'o', 'X', 'X', 'o', 'o', 'o', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'o', 'o', 'o', 'X', 'X', 'o', 'o', 'o'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['o', 'o', 'o', 'X', 'X', 'o', 'o', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'o', 'o', 'X', 'X', 'o', 'o', 'o'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'o', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  ];

  function buildSquare($elem, x, y) {
    $elem.attr('data-x', x);
    $elem.attr('data-y', y);
    $elem.css({
      top: 32 * x,
      left: 32 * y
    });
    $board.append($elem);
  }

  // Create clickable boxes
  for (var w = 0; w < 32; w++) {
    for (var h = 0; h < 20; h++) {
      var $tileSquare = $('<div>').addClass('board-square');
      var tileType = boardConfig[h][w];

      // Set tile background image
      switch (tileType) {
        case 'o': $tileSquare.addClass('bricks solid'); break;
        default: break;
      }

      buildSquare($tileSquare, h, w);
    }
  }

  // Add Character to board
  $emmett = $('<div>').addClass('player');
  $board.append($emmett);

  // Handle movement
  $board.on('click', '.board-square', function(e) {
    var $sq = $(e.currentTarget);
    var x = $sq.attr('data-x');
    var y = $sq.attr('data-y');
    var targetTileType = boardConfig[y][x];
    console.log(targetTileType);
  });
});