const Node = require('./node');

class LinkedList {
    constructor() {
        var list=new Array();
        list.append =this.append;
        list.tail=this.tail;
        list.head=this.head;
        list.at=this.at;
        list.isEmpty=this.isEmpty;
        list.at=this.at;
        list.indexOf=this.indexOf;
        list.clear=this.clear;
        list.insertAt=this.insertAt;
        list.deleteAt=this.deleteAt;
        list._head= new Node();
        list._tail=new Node();


       return list;
    }

    append(data) {
     
        if(data !=undefined)        
        {

         this.push(data);
         if(this.length == 1)
            {
                this._head=new Node(this.head());
                this._tail=new Node(this.tail());
            }
         }
        return this;
    }

    head() {
        if(this.length == 0)
        {
            return null;
        }

        return this.at(0);
     
    }


    tail() {
        if(this.length == 0)
        {
            return null;
        }
        return this[this.length-1];
       
    }

    at(index) {

     if(this != null && this != undefined && this.length >= index)
        {
            return this[index];
        }
        return null;

    }

    insertAt(index, data) {
        if(this != null && this != undefined && data !=undefined)
        {
            this.splice(index,0,data);
        }

    }

    isEmpty() {
        if(this != null && this != undefined && this.length == 0)
        {
            return true;
        }

        return false;
    }

    clear() { 
       this.length=0;
       return this;
    }



    deleteAt(index) {

      if(this != null && this != undefined && this.length > 0)        
        {
           this.splice(index,1);
        }
        return this;
    }

    reverse() {
        
    }

    indexOf(data) {

        
        if(this != null && this != undefined)        
            {
                for (var i=0; i<  this.length ; i++) {
                    if( this[i] == data )
                        {
                            return i;
                            break;
                         }
                }
            }
        return -1;

    }
}

module.exports = LinkedList;
