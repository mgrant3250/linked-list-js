class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    /**
     * 
     * @returns {Object} An iterator that yields each node's value in the list sequentially.
     */

    [Symbol.iterator](){
        let current = this.head;
        return{
            next() {
                if(current) {
                    const value = current.val;
                    current = current.next;
                    return{value, done: false};
                }else{
                    return{done: true}
                }
            }
        }
    }

    /**
     * 
     * @param {*} val The value to append to the linked list
     * @returns {void}
     */
    append(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
                }
            currentNode.next = newNode
            }

            this.length++;
        
    }

    /**
     * 
     * @param {*} val The value to prepend to the linked list
     * @returns {void}
     */
    prepend(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    /**
     * 
     * @returns {*} returns the node that was popped from the linked list
     */

    pop(){

        if(!this.head){
            throw new Error("There are no elements in the linked list.")
        }

        if(!this.head.next){
        let oldHead = this.head;
        this.head = null;
        this.length--;
        return oldHead.val;
        }
        let currentNode = this.head;


        while(currentNode.next && currentNode.next.next){
        currentNode = currentNode.next;
        }
        let oldNode = currentNode.next;
        currentNode.next = null;
        this.length--
        return oldNode.val;
        }
    
        /**
         * @returns {void}
         */
    removeFirst(){
        if(!this.head){
            throw new Error("There are no elements in the linked list.")
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--
    }

    /**
     * 
     * @param {*} val the value to be placed in the linked list
     * @param {number} index the index to place the element at
     * @returns {void}
     */
    insertAt(val, index){

        if (index < 0 || index > this.length) {
        throw new Error("Index is not in linked list")
        }

        let newNode = new Node(val);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++
            return;
        }

        let currentNode = this.head;
        let count = 0;

        
        while (count < index - 1 && currentNode !== null) {
            currentNode = currentNode.next;
            count++;
        }

        if (currentNode === null) return; 

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        }

        /**
         * 
         * @param {number} index the index of the element to remove
         * @returns 
         */

    removeAt(index) {
        if (!this.head || index < 0 || index >= this.length){
            throw new Error("The index does not exist within the linked list")
        }
        if(this.length === 1){
            this.head = null
            this.length--
            return
        }

        if(index === 0){
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--
            return;

        }
        let count = 0;
        let current = this.head;
        let previous = null;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
    
        previous.next = current.next;
        current.next = null;
        this.length--


    }

    /**
     * 
     * @param {*} val The value to be searched for within the array 
     * @returns {number} the index of the element or -1 if not found
     */

    indexOf(val){
        if(!this.head) return -1
        let currentNode = this.head;
        let count = 0;

        while(currentNode && currentNode.val !== val){
            count++
            currentNode = currentNode.next
        }
        if(currentNode && currentNode.val === val) return count
        return -1
    }

    /**
     * 
     * @param {number} index the index to search
     * @returns {*} returns the element at the given index
     */

    get(index){
        if(!this.head || index >= this.length || index < 0){
            throw new Error("The given index is not within the linked list")
        }

        let count = 0;
        let currentNode = this.head;

        while(index != count){
            count++
            currentNode = currentNode.next;
        }

        return currentNode
    }


    /**
     * 
     * @returns {void}
     */
    clear(){
        this.head = null;
        this.length = 0;
        return
    }

    /**
     * reverses the linked list
     */

    reverse() {
        let prev = null;
        let current = this.head;

        while(current){
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }

        this.head = prev
    }

    /**
     * 
     * @returns {boolean} Returns true if linked list is empty else false
     */

    isEmpty() {
        return this.length === 0;
    }

    /**
     * Logs nodes val and next properties to the console
     */

    print(){
        let current = this.head;

        while(current){
            console.log(`${current.val}, next: ${current.next}`);
            current = current.next;
        }
    }

    /**
     * 
     * @returns {string} returns string of linked list
     */

    toString(){
        let arr = this.toArray()
        return arr.join(" -> ")
    }

    /**
     * 
     * @returns {Array}
     */

    toArray() {
        let arr = [];
        let currentNode = this.head;

        while(currentNode){
            arr.push(currentNode.val)
            currentNode = currentNode.next;
        }
        return arr
    }

    /**
     * 
     * @param {*} arr 
     * @returns {LinkedList}
     */

    static fromArray(arr) {
        const list = new LinkedList();

        for(let val of arr){
            list.append(val)
        }
        return list
    }
}

export { LinkedList, Node };