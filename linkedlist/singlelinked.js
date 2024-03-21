//create a node
class node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

//single linked list  class
class singleLinkedList{
  constructor(){
    this.head=null;
  }
}

//insert at head
/*
1.create a new node'
2.newnode.next=head
3.update head

*/

//method to add new node at head
insertAtHead(data){
  //create a new node with desired data
  const newNode=new Node(data);
  //connect new node with the head
  newNode.next=this.head;
  //update head
  this.head=newNode;
  
}

//insert at node
/*
1. create a new node with desired data
2.traverse the linked list to find last node
3.set 'next' of lastnode to newNode.

*/

insertAtTail(data){
  //create a new node
   const newNode= new Node(data);
  if(!this.head){
    
  }
  
}