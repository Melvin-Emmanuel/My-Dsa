class TreeNode {
      constructor(val) {
          this.val = val;
              this.left = null;
                  this.right = null;
                    }
                    }

                    function insertBST(root, val) {
                      if (!root) return new TreeNode(val);
                        if (val < root.val) root.left = insertBST(root.left, val);
                          else root.right = insertBST(root.right, val);
                            return root;
                            }
