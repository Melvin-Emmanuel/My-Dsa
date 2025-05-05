class FenwickTree {
      constructor(size) {
          this.tree = new Array(size + 1).fill(0);
            }

      update(index, val) {
          while (index < this.tree.length) {
          this.tree[index] += val;
          index += index & -index;
                         }
                         }

       query(index) {
          let sum = 0;
          while (index > 0) {
          sum += this.tree[index];
          index -= index & -index;
                       }
            return sum;
                  }
                  }
