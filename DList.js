'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyList {
    constructor() {
        this.sizer = 0;
        this.head = null;
        this.tail = null;
    }
    push_first(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.sizer++;
    }
    push_after(data, toNodeData) {
        const current = this.head;
        while(current) {
            if(current.data == toNodeData) {
                const node = new Node(node);
                if(current == this.tail) {
                    this.push_first(data);
                }
                else {
                    current.next.prev = node;
                    node.prev = current;
                    node.next = current.next;
                    current.next = node;
                    this.sizer++;
                }
            }
        }
    }
    delete(data) {
        let current = this.head;
        while(current) {
            if(current.data == data) {
                if(current == this.head && current==this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if(current == this.head){
                    this.head = this.head.next;
                    this.head.prev = null;
                }
                else if(current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.sizer--;
            }
            current = current.next;
        }
    }
    print() {
        let str = '';
        let current = this.head;
        while(current) {
            str += current.data + ' ';
            current = current.next;
        }
        console.log(str.trim());
    }
}

const obj1 = { name: 1 };
const obj2 = { name: 2 };
const obj3 = { name: 3 };
const obj4 = { name: 'fourth' };
const obj5 = { name: 'fifth' };

const list = new DoublyList();
list.push_first(1);
list.push_first(2);
list.push_first(3);

list.print();

list.delete(2);
list.print();
