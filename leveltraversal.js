function levelOrderTraversal(root) {
      if (!root) return;
        let queue = [root];
          while (queue.length > 0) {
              let node = queue.shift();
                  console.log(node.val);
                      if (node.left) queue.push(node.left);
                          if (node.right) queue.push(node.right);
                            }
                            }
