class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right

    }
}

class bst {
    constructor() {
        this.root = null
        this.min = Number.MAX_VALUE
        this.max = Number.MIN_VALUE
    }
    insert(element) {
        if (element <= this.min && element !== null) {
            this.min = element
        }
        if (element > this.max) {
            this.max = element
        }
        const node = this.root
        if (this.root == null) {
            this.root = new Node(element)
        }
        else {
            const tree = function (node) {
                if (node.data >= element) {
                    if (node.left == null) {
                        node.left = new Node(element)
                        return
                    }
                    else if (node.left != null) {
                        return tree(node.left);
                    }
                }
                else if (node.data < element) {
                    if (node.right == null) {
                        node.right = new Node(element)
                    }
                    else if (node.right != null) {
                        return tree(node.right);
                    }
                }
                else {
                    return null;
                }
            }
            return tree(node)
        }
    }
    search(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    max_value() {
        console.log(this.max);
    }
    min_value() {
        console.log(this.min);
    }

}

let a = new bst()
a.insert(20)
a.insert(21)
a.insert(null)
a.insert(null)
a.insert(22)
a.insert(122)
a.insert(44)
a.min_value()
a.max_value()