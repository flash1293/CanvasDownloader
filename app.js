function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

function consumeCanvases() {
  $('canvas').each(function() {
    var canvasElement = $(this);
    if(canvasElement.attr("data-downloadified") === "1") return;
    var position = canvasElement.position();
    var button = $('<button style="position:absolute;left:'+position.left+'px;top:'+position.top+'px;z-index:999999;border-radius:4px;border:2px solid white;background-color:rgb(31,152,103)">D</button>');
    canvasElement.attr("data-downloadified", "1");
    
    button.click(function() { 
      var filename = prompt("Please enter the desired filename (without extension)") + '.png';
      downloadURI(canvasElement.get(0).toDataURL(), filename);
    });
    button.insertAfter(canvasElement);
  });
}

$(document).ready(function() {
  consumeCanvases();
  setInterval(consumeCanvases, 1000); //check every second for newly created canvases
});