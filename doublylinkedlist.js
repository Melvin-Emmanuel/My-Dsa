class DoublyNode {
      constructor(data) {
          this.data = data;
              this.prev = null;
                  this.next = null;
                    }
                    }

                    class DoublyLinkedList {
                      constructor() {
                          this.head = null;
                              this.tail = null;
                                }

                                  append(data) {
                                      const newNode = new DoublyNode(data);
                                          if (!this.head) {
                                                this.head = this.tail = newNode;
                                                      return;
                                                          }
                                                              this.tail.next = newNode;
                                                                  newNode.prev = this.tail;
                                                                      this.tail = newNode;
                                                                        }

                                                                          printForward() {
                                                                              let current = this.head;
                                                                                  while (current) {
                                                                                        console.log(current.data);
                                                                                              current = current.next;
                                                                                                  }
                                                                                                    }

                                                                                                      printBackward() {
                                                                                                          let current = this.tail;
                                                                                                              while (current) {
                                                                                                                    console.log(current.data);
                                                                                                                          current = current.prev;
                                                                                                                              }
                                                                                                                                }
                                                                                                                                }
