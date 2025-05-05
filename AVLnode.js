class AVLNode {
      constructor(value) {
          this.value = value;
              this.left = null;
                  this.right = null;
                      this.height = 1;
                        }
                        }

                        class AVLTree {
                          constructor() {
                              this.root = null;
                                }

                                  getHeight(node) {
                                      return node ? node.height : 0;
                                        }

                                          getBalanceFactor(node) {
                                              return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
                                                }

                                                  updateHeight(node) {
                                                      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
                                                        }

                                                          rightRotate(y) {
                                                              const x = y.left;
                                                                  const T2 = x.right;

                                                                      // Perform rotation
                                                                          x.right = y;
                                                                              y.left = T2;

                                                                                  // Update heights
                                                                                      this.updateHeight(y);
                                                                                          this.updateHeight(x);

                                                                                              return x;
                                                                                                }

                                                                                                  leftRotate(x) {
                                                                                                      const y = x.right;
                                                                                                          const T2 = y.left;

                                                                                                              // Perform rotation
                                                                                                                  y.left = x;
                                                                                                                      x.right = T2;

                                                                                                                          // Update heights
                                                                                                                              this.updateHeight(x);
                                                                                                                                  this.updateHeight(y);

                                                                                                                                      return y;
                                                                                                                                        }

                                                                                                                                          insert(node, value) {
                                                                                                                                              if (!node) return new AVLNode(value);

                                                                                                                                                  if (value < node.value) {
                                                                                                                                                        node.left = this.insert(node.left, value);
                                                                                                                                                            } else if (value > node.value) {
                                                                                                                                                                  node.right = this.insert(node.right, value);
                                                                                                                                                                      } else {
                                                                                                                                                                            return node; // Duplicate values not allowed
                                                                                                                                                                                }

                                                                                                                                                                                    this.updateHeight(node);

                                                                                                                                                                                        const balance = this.getBalanceFactor(node);

                                                                                                                                                                                            // Left Left Case
                                                                                                                                                                                                if (balance > 1 && value < node.left.value) {
                                                                                                                                                                                                      return this.rightRotate(node);
                                                                                                                                                                                                          }

                                                                                                                                                                                                              // Right Right Case
                                                                                                                                                                                                                  if (balance < -1 && value > node.right.value) {
                                                                                                                                                                                                                        return this.leftRotate(node);
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                // Left Right Case
                                                                                                                                                                                                                                    if (balance > 1 && value > node.left.value) {
                                                                                                                                                                                                                                          node.left = this.leftRotate(node.left);
                                                                                                                                                                                                                                                return this.rightRotate(node);
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                        // Right Left Case
                                                                                                                                                                                                                                                            if (balance < -1 && value < node.right.value) {
                                                                                                                                                                                                                                                                  node.right = this.rightRotate(node.right);
                                                                                                                                                                                                                                                                        return this.leftRotate(node);
                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                return node;
                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                    insertValue(value) {
                                                                                                                                                                                                                                                                                        this.root = this.insert(this.root, value);
                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                            inOrderTraversal(node = this.root) {
                                                                                                                                                                                                                                                                                                if (!node) return;
                                                                                                                                                                                                                                                                                                    this.inOrderTraversal(node.left);
                                                                                                                                                                                                                                                                                                        console.log(node.value);
                                                                                                                                                                                                                                                                                                            this.inOrderTraversal(node.right);
                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                              // Example usage:
                                                                                                                                                                                                                                                                                                              const avl = new AVLTree();
                                                                                                                                                                                                                                                                                                              avl.insertValue(10);
                                                                                                                                                                                                                                                                                                              avl.insertValue(20);
                                                                                                                                                                                                                                                                                                              avl.insertValue(30);
                                                                                                                                                                                                                                                                                                              avl.insertValue(40);
                                                                                                                                                                                                                                                                                                              avl.insertValue(50);
                                                                                                                                                                                                                                                                                                              avl.insertValue(25);

                                                                                                                                                                                                                                                                                                              avl.inOrderTraversal(); // Should print values in sorted order
