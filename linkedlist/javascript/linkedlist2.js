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
  console.log("I am length",length);
  count = 0;
  beforeNodeToDelete = null;
  nodeToDelete = null;
  deletedNode = null;
  if(pos<0 || pos>length)
  {
    throw new Error("sorry your node is not available.....")
  }
  if(pos === 0)
  {
        this.head = currentnode.next;
        deletedNode = currentnode;
        currentNode = null;
        this.length--;
        return "I am deleted"+deletedNode;
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
function addElement()
{

  // console.log(list);
  var inputvalue = document.getElementById('input1').value;
  var data = list.add(inputvalue);
  console.log(list);
  console.log("hi...........");
  var ul = document.getElementById('pos');
  var li = document.createElement('li');
  console.log(data);
  li.innerHTML = data["data"];
  ul.appendChild(li);
}
function removeElement()
{
  var inputvalue = list.length;
  console.log("gfn",inputvalue);
  var data = list.remove(inputvalue);
  console.log(list);
  console.log("hi...........");
  //var ul = document.getElementById('pos');
   //var li = document.createElement('li');
  // console.log(data);
  // li.innerHTML = data["data"];
  // ul.appendChild(li);
}
