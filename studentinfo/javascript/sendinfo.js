function testJS() {
  var b = document.getElementById('name').value;
  var c = document.getElementById('roll').value;
  var d = document.getElementById('age').value;
  url = 'file:///home/bridgelabz6/Desktop/Assignment/studentinfooutput.html?name=' + encodeURIComponent(b) + '&roll=' + encodeURIComponent(c) + '&age=' + encodeURIComponent(d)
  document.location.href = url;
}
