// ---- Linked List Stuff


class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  
  add(value) {
  }
}

const node = new Node(1)
node.nextNode = new Node(15)
const list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)

console.log(node, 'node')
console.log(list, 'list')
