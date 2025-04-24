function levelOrder(root) {
  if (!root) return [];

    const queue = [root];
      const result = [];

        while (queue.length) {
            const level = [];
                const len = queue.length;

                    for (let i = 0; i < len; i++) {
                          const node = queue.shift();
                                level.push(node.val);
                                      if (node.left) queue.push(node.left);
                                            if (node.right) queue.push(node.right);
                                                }

                                                    result.push(level);
                                                      }

                                                        return result;
                                                        }