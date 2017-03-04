$(document).ready(function(){
$.ajax({
    type: "GET",
    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Sachin_Tendulkar&callback=?",
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR)
     {
        // console.log("I am data",data);
        // console.log("I am text status",textStatus);
        // console.log("I am jqXHR",jqXHR);
        var markup = data.parse.text["*"];
        // console.log("I am markup",markup);

        var div_tag_content = $('<div></div>').html(markup);
        // console.log("I am blurb",div_tag_content);
        var paragraph1 = $(div_tag_content).find('p')[0];
        var paragraph2 = $(div_tag_content).find('p')[1];
        var paragraph3 = $(div_tag_content).find('p')[2];
        var paragraph4 = $(div_tag_content).find('p')[3];

        // console.log(paragraph1);
        // console.log(paragraph2);
        // console.log(paragraph3);
        // console.log(paragraph4);

        var table_tag_content = $('<table></table>').html(markup);
          //console.log("i am table",table_tag_content);

        var a=(table_tag_content).find('tr').find('table');
        //console.log("I am a",a);
        // remove links as they will not work
        div_tag_content.find('a').each(function() { $(this).replaceWith($(this).html()); });
        table_tag_content.find('a').each(function(){$(this).replaceWith($(this).html());})
        table_tag_content.find('tr').find('table').remove();
        div_tag_content.find('sup').remove();

        // remove cite error
        div_tag_content.find('.mw-ext-cite-error').remove();
        // $('#article').html($(div_tag_content).find('p'));
        $('#pdetail').html($(table_tag_content).find('tr'));
        $("#internationalinfo").html(a);

        $("#paragraph1").html(paragraph1);
        $("#paragraph2").html(paragraph2);
        $("#paragraph3").html(paragraph3);
        $("#paragraph4").html(paragraph4);
    },
    error: function (errorMessage)
    {

    }
});
});
