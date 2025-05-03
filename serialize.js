function serialize(root) {
      if (!root) return '#';
        return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
        }

        function deserialize(data) {
          const values = data.split(',');
            let index = 0;

              function build() {
                  if (values[index] === '#') {
                        index++;
                              return null;
                                  }
                                      const node = new TreeNode(parseInt(values[index++]));
                                          node.left = build();
                                              node.right = build();
                                                  return node;
                                                    }

                                                      return build();
                                                      }
