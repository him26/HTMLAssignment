var mylist = [];

function push() {
  console.log("hi.........")
  var list = [];
  list[0] = document.getElementById('productname').value;
  list[1] = document.getElementById('productquantity').value;
  mylist.push(list);
  console.log(mylist);
}

function removeelement() {
  mylist.pop();
  console.log(mylist);
}

function shiftelement() {
  mylist.shift();
  console.log(mylist);
}

function unshift() {
  console.log("hi.........")
  var list = [];
  list[0] = document.getElementById('productname').value;
  list[1] = document.getElementById('productquantity').value;
  mylist.unshift(list);
  console.log(mylist);
}

function makeTable() {
  console.log("hi...........");
  var table = document.getElementById('tba');
  for (var i = 0; i < mylist.length; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < mylist[i].length; j++) {
      var cell = document.createElement('td');
      cell.textContent = mylist[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  var element = document.getElementById("div1");
  console.log(element.appendChild(table));
}
