function digiclock()
{
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      // var temp ='';
      var temp = '' + ((hours > 12) ? hours - 12 : hours);
      if (hours == 0)
      temp = '12';
      temp += ((minutes < 10) ? ':0' : ':') + minutes;
      temp += ((seconds < 10) ? ':0' : ':') + seconds;
      temp += (hours >= 12) ? ' P.M.' : ' A.M.';
      document.getElementById('head').innerHTML = temp ;
}
function getRandom(min ,max)
{
        var num ;
        num = parseInt(Math.random()* (max - min) + min);
        return num ;
}
function disp()
{
    var art =[{
    "id":1,
    "Tittle" :"About Science",
    "Article": "Science is the methodical study of nature including testable explanations and predictions. From classical antiquity through the 19th century, science as a type of knowledge was more closely linked to philosophy than it is now and, in fact, in the Western world, the term natural philosophy encompassed fields of study that are today associated with science, such as astronomy, medicine, and physics. However, during the Islamic Golden Age foundations for the scientific method were laid by Ibn al-Haytham in his Book of Optics. While the classification of the material world by the ancient Indians and Greeks into air, earth, fire and water was more philosophical, medieval Middle Easterns used practical, experimental observation to classify materials.",
    "Author": "Himanshu",
    "Date": "25/2/1991",
    "published": "Timesof India",
    "publication": "Tata MacrawHill"
    },
    {
    "id":2,
    "Tittle" :"About biology",
    "Article": "Currently, there are both hard (e.g. biological psychology) and soft science (e.g. social psychology) fields within the discipline. As a result, and as is consistent with the unfolding of the study of knowledge and development of methods to establish facts, each area of psychology employs a scientific method. Reflecting the evolution of the development of knowledge and established facts and the use of the scientific method, Psychology Departments in universities are found within: Faculty of Arts and Science, Faculty of Arts, and a Faculty of Science. Similarly, several other major areas of disciplined study and knowledge exist today under the general rubric of science, such as formal science and applied science.",
    "Author": "Jhon Write",
    "Date": "26/3/1996",
    "published": "Hindustan Times ",
    "publication": "Arihant Publication"
  },
  {
    "id":3,
    "Tittle" :"About Sonoluminescence",
    "Article": "Sonoluminescence is the emission of short bursts of light from imploding bubbles in a liquid when excited by sound. The effect was first discovered at the University of Cologne in 1934 as a result of work on sonar. H. Frenzel and H. Schultes put an ultrasound transducer in a tank of photographic developer fluid. They hoped to speed up the development process. Instead, they noticed tiny dots on the film after developing, and realized that the bubbles in the fluid were emitting light with the ultrasound turned on. It was too difficult to analyze the effect in early experiments because of the complex environment of a large number of short-lived bubbles. (This experiment is also ascribed to N. Marinesco and J.J. Trillat in 1933).",
    "Author": "Ana Malik",
    "Date": "25/12/2016",
    "published": "NavBharat Times",
    "publication": "ACM Publication"
  },
  {
    "id":4,
    "Tittle" :"About sound wave",
    "Article": "Sonoluminescence may or may not occur whenever a sound wave of sufficient intensity induces a gaseous cavity within a liquid to quickly collapse. This cavity may take the form of a pre-existing bubble, or may be generated through a process known as cavitation. Sonoluminescence in the laboratory can be made to be stable, so that a single bubble will expand and collapse over and over again in a periodic fashion, emitting a burst of light each time it collapses.",
    "Author": "gautam gulati",
    "Date": "2/2/2017",
    "published": "Timesof India",
    "publication": "Tata MacrawHill"
  },
  {
    "id":5,
    "Tittle" :"About sound wave",
    "Article": "He seldom published papers, preferring lengthy correspondences with colleagues (such as Bohr and Heisenberg, with whom he had close friendships.) Many of his ideas and results were never published and appeared only in his letters, which were often copied and circulated by their recipients. Pauli was apparently unconcerned that much of his work thus went uncredited.",
    "Author": "Rehan Malik",
    "Date": "2/6/2002",
    "published": "Timesof India",
    "publication": "Springer"
    }
    ]
  var randno=getRandom(1 ,6);
  var x = '';
  for (var i = 0; i < art.length; i++)
  {
      if(i == randno)
      {
          var id = art[i].id ;
          var tittle = art[i].Tittle ;
          var Article = art[i].Article ;
          var Author = art[i].Author;
          var Date = art[i].Date;
          var publishe = art[i].published ;
          var publication = art[i].publication;

          document.getElementById("Articleno").innerHTML = "Article No : " + id ;
          document.getElementById("Tittle").innerHTML = tittle ;
          document.getElementById("Article").innerHTML = Article ;
          document.getElementById("Author").innerHTML ="author name : " + Author ;
          document.getElementById("Date").innerHTML = "published date : " + Date ;
          document.getElementById("published").innerHTML = "published by : " + publishe ;
          document.getElementById("publication").innerHTML = "publication house : " + publication ;
        }
    }
}
setInterval(function(){digiclock(),disp()},1000);
