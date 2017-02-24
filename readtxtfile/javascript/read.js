function readfile(){
  jQuery.get('input.txt',function(txt) {
    $('#output').text(txt);



  })

}
