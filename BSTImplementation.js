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
        const newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(node,newNode){
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
    preorderRecur(node){
        if(node!==null)
        {
            console.log(node.value);
            this.preorderRecur(node.left);
            this.preorderRecur(node.right);
        }
    }
    getRootNode(){
        return this.root;
    }
    preorderIterative(node){
        if(node==null){
            return;
        }
        let stack=[];
        stack.push(node);
        while(stack.length>0){
            let topnode=stack[stack.length-1];
            console.log(topnode.value);
            stack.pop();
            if(topnode.right!=null){
                stack.push(topnode.right);
            }
            if(topnode.left!=null){
                stack.push(topnode.left);
            }
        }
    }
}

const bst =new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.insert(8);
const root=bst.getRootNode();
bst.preorderRecur(root);
console.log('------------------------------');
bst.preorderIterative(root);
