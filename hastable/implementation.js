//defining hashtable
class HashTable{
  constructor(size=5){   //class is defined here
    this.maxSize=size;  //max size specified
    this.hashTable=new Array(this.maxSize);  //initialised as an array
    this.currSize=0; //is set to zero and track the current no. of element in the hashtable
  }
}

#hash(key){
  let hashValue=0;
  // sum(Ascii(key[i]) * 2^i) % tableSize
  
  
}