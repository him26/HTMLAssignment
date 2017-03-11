$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Sachin_Tendulkar&callback=?",
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var div_tag_content = $('<div></div>').html(markup);
      var paragraph1 = $(div_tag_content).find('p')[0];
      var paragraph2 = $(div_tag_content).find('p')[1];
      var paragraph3 = $(div_tag_content).find('p')[2];
      var paragraph4 = $(div_tag_content).find('p')[3];
      var table_tag_content = $('<table></table>').html(markup);
      var a = (table_tag_content).find('tr').find('table');
      // remove links as they will not work
      div_tag_content.find('a').each(function() {
        $(this).replaceWith($(this).html());
      });
      table_tag_content.find('a').each(function() {
        $(this).replaceWith($(this).html());
      })
      table_tag_content.find('tr').find('table').remove();
      div_tag_content.find('sup').remove();
      // remove cite error
      div_tag_content.find('.mw-ext-cite-error').remove();
      $('#pdetail').html($(table_tag_content).find('tr'));
      $("#internationalinfo").html(a);
      $("#paragraph1").html(paragraph1);
      $("#paragraph2").html(paragraph2);
      $("#paragraph3").html(paragraph3);
      $("#paragraph4").html(paragraph4);
    },
    error: function(errorMessage) {
    }
  });
});
