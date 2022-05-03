class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode=Node(value);
        if(this.root===null){
            this.root=newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    inserNode(node,newNode){
        if(newNode.value<node.value){
            if(node.left===null){
                node.left=newNode;
            }
            else{
                this.insertNode(node.left,newNode);
            }
        }
        else if(newNode.value>node.value){
            if(node.right===null){
                node.right=newNode;
            }
            else{
                this.insertNode(node.right,newNode);
            }
        }
    }
    search(node,data){
        if(node===null){
            return null;
        }
        else if(data<node.value){
            return this.search(node.left,data);
        }
        else if(data>node.value){
            return this.search(node.right,data);
        }
        else if(node.value===data){
            return node;
        }
    }
}