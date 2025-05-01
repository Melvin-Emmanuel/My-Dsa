function findLCA(root, p, q) {
      if (!root) return null;
        if (p < root.val && q < root.val) return findLCA(root.left, p, q);
          if (p > root.val && q > root.val) return findLCA(root.right, p, q);
            return root;
            }
