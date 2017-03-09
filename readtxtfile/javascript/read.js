//method for creating node
function Node(data)
{
  this.data = data;
  this.next = null;
}

//method for creating Node
function SinglyList()
{
  this.length = 0;
  this.head = null;
}
//method for add element into singly singly linked list
SinglyList.prototype.add = function(value)
{
  var newnode = new Node(value);
  var  currentnode = this.head ;
  if(!currentnode)
  {
    this.head = newnode ;
    this.length = length++;
    return newnode;
  }
  while(currentnode.next)
  {
    currentnode = currentnode.next ;
  }
  currentnode.next = newnode ;
  this.length++;
  return newnode ;
}
//method for remove element at position
SinglyList.prototype.remove = function(pos)
{
  var currentnode = this.head ;
  length = this.length ;
  //console.log("I am length",length);
  count = 0;
  beforeNodeToDelete = null;
  nodeToDelete = null;
  deletedNode = null;
  if(pos<0 || pos>length)
  {
    alert("sorry your node is not available.....");
    throw new Error("sorry your node is not available.....");
  }
  if(pos === 0)
  {      console.log("I am in if..");
        this.head = currentnode.next;
        deletedNode = currentnode;
        currentNode = null;
        this.length--;
        return deletedNode;
  }
  while (count < pos)
   {
      console.log("I am in while loop");
        beforeNodeToDelete = currentnode;
        console.log("beforeNodeToDelete",beforeNodeToDelete);
        nodeToDelete = currentnode.next;
        currentnode = nodeToDelete;
        console.log("nodeToDelete",nodeToDelete);
        count++;
      console.log(count);
    }
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;

    this.length--;
    console.log("length",length);
    console.log("I am deleted"+deletedNode);
    return deletedNode;
}
//this method is searching elements at particular position
SinglyList.prototype.searchAt = function(position)
{
      var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list.'};

      // 1st use-case: an invalid position
      if (length === 0 || position < 1 || position > length)
      {
          throw new Error(message.failure);
      }

      // 2nd use-case: a valid position
      while (count < position)
      {
          currentNode = currentNode.next;
          count++;
      }

  return currentNode;
}

var list = new SinglyList();


 function loadDoc()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      var data = this.responseText;
      var dataarray = data.split(',');
      addElement(dataarray);
      console.log(dataarray);
      for (var i = 0; i < dataarray.length; i++)
      {
        var temp = dataarray[i];
        console.log(temp);
        var ul = document.getElementById('pos');
        var li = document.createElement('li');
        li.innerHTML = temp;
        ul.appendChild(li);
      }
    }
  };
  xhttp.open("GET", "input.txt", true);
   xhttp.send();
}
var addElement =function(dataarray)
{
  this.temp = dataarray;
}
addElement.prototype.add = function()
{
          var addlist = temp.shift();
          if(addlist!=undefined)
          {
            var data = list.add(addlist);
            var ul = document.getElementById('adddata');
            var li = document.createElement('li');
            li.innerHTML = data["data"];
            ul.appendChild(li);
            console.log(list);
        }
        else
        {
            alert("your element is over");
        }
  }
  function del()
  {
    var inputvalue = list.length;
    console.log("gfn",inputvalue);
    var data = list.remove(inputvalue);
     if (data["data"]!=undefined||inputvalue<0)
     {
      console.log(list);
    //  console.log("hi...........");
      var ul = document.getElementById('removelist');
      //console.log(ul);
      var li = ul.getElementsByTagName("li");
      //var li1 = l
      for (var i = 0; i < li.length; i++)
      {
          var temp =  li[i].innerHTML;
          if(temp === data["data"])
          {
          //  console.log(data);
            li[i].innerHTML = "";
          }//var li = document.createElement('li');
          //console.log(temp);
      }
    }
    else
     {
         alert("your element is not available");
     }
  }
function but()
{
var a  =  new addElement();
a.add();
}
// console.log(addElement.add());
  // function add()
  //     {
  //         for (var i = 0; i < dataAarray.length; i++)
  //         {
  //           var temp = dataAarray[i];
  //           console.log(temp);
  //           var data = list.add(temp);
  //           var ul = document.getElementById('adddata');
  //           var li = document.createElement('li');
  //           li.innerHTML = temp;
  //           ul.appendChild(li);
  //         }
  //         console.log(list);
  //       }
