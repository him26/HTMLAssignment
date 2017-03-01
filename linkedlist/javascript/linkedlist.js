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
  count = 1;
  beforeNodeToDelete = null;
  nodeToDelete = null;
  deletedNode = null;
  if(pos<1 || pos>length)
  {
    throw new Error("sorry your node is not available.....")
  }
  if(pos === 1)
  {
        this.head = currentnode.next;
        deletedNode = currentnode;
        currentNode = null;
        this.length--;
        return deletedNode;
  }
  while (count < pos)
   {
        beforeNodeToDelete = currentnode;
        nodeToDelete = currentnode.next;
        count++;
    }
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
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


var a = new SinglyList();
// a.add(1);
// a.add(2);
// a.add(3);
// a.add(4);

console.log(a.add('one'));
console.log(a.add('two'));
console.log(a.add('three'));
console.log(a.add('four'));
console.log('search at ',a.searchAt(3));
console.log(a.remove(1));

console.log(a);
