var scenes = require('./scenes');

$(function() {
  var $startButton = $('#title button');

  $startButton.on('click', function(e) {
    scenes.switchTo('board');
  });
});