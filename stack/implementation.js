//LIFO
//using linked list and array

class stack{
  constructor(){ 
    this.stack=[]; //empty stack
  }
  push(element){
    this.stack.push(element)
  }
  pop(){
    if( this.isEmpty){
      return "stack is empty"
      
    }
    return this.stack.pop()
  }
    peek(){
      if (this.isEmpty()){
        return "stack is empty";
      
    }
      return this.stack[this.stack.length-1];
  }
  isEmpty(){
    return this.stack.length===0
  }
  
}
