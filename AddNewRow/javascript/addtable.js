function addrow() {
  var table = document.getElementById("tba");
  var x = document.getElementById("tba").rows.length;
  var column = document.getElementById("tba").rows[0].cells.length;
  var row1 = table.insertRow(x);
  for (var i = 0; i < column; i++) {
    var coll1 = row1.insertCell(i);
  }
}

function addcol() {
  var len = document.getElementById("tba");
  var col = document.getElementById("tba").rows[0].cells.length;
  for (var i = 0; i < len.rows.length; i++) {
    var coll2 = len.rows[i].insertCell(col);
  }
}
