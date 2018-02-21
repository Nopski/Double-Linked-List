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
        const temp = this.head;
        while(temp) {
            if(temp.data === toNodeData) {
                const node = new Node(node);
                if(temp === this.tail) {
                    this.push_first(data);
                }
                else {
                    temp.next.prev = node;
                    node.prev = temp;
                    node.next = temp.next;
                    temp.next = node;
                    this.sizer++;
                }
            }
        }
    }
    delete(data) {
        let temp = this.head;
        while(temp) {
            if(temp.data === data) {
                if(temp === this.head && temp === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if(temp === this.head){
                    this.head = this.head.next;
                    this.head.prev = null;
                }
                else if(temp === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                }
                this.sizer--;
            }
            temp = temp.next;
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
