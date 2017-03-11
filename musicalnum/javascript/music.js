var albums = {
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
}

function update() {
  console.log("hi I am update");
  var id = document.getElementById('albumid').value;
  console.log(id);
  var property = document.getElementById('key').value;
  console.log(property);
  var value = document.getElementById('value').value;
  console.log(value);
  if (value != "") {
    if (property != "tracks") {

      albums[id][property] = value;
    } else {
      if (property == "tracks") // && albums[id].hasOwnProperty("tracks"))
      {
        if (!albums[id].hasOwnProperty("tracks")) {
          albums[id].tracks = [];
          albums[id].tracks.push(value);
        } else {
          albums[id].tracks.push(value);
        }
      }
    }
  } else {
    delete albums[id][property];
  }
  // return albums;
  var x = "";
  for (var i in albums) {
    x += i + " " + JSON.stringify(albums[i]) + "<br><br>";
    console.log(x);
  }
  console.log(albums);
  document.getElementById('output').innerHTML = "ghj" + x;
}
// var updatealbum = update(5439,"tracks","fgnnfdg");
