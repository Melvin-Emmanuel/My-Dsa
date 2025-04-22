class CircularNode {
      constructor(data) {
          this.data = data;
              this.next = null;
                }
                }

                class CircularLinkedList {
                  constructor() {
                      this.head = null;
                        }

                          append(data) {
                              const newNode = new CircularNode(data);
                                  if (!this.head) {
                                        this.head = newNode;
                                              newNode.next = this.head;
                                                    return;
                                                        }

                                                            let current = this.head;
                                                                while (current.next !== this.head) {
                                                                      current = current.next;
                                                                          }
                                                                              current.next = newNode;
                                                                                  newNode.next = this.head;
                                                                                    }

                                                                                      printList() {
                                                                                          if (!this.head) return;

                                                                                              let current = this.head;
                                                                                                  do {
                                                                                                        console.log(current.data);
                                                                                                              current = current.next;
                                                                                                                  } while (current !== this.head);
                                                                                                                    }
                                                                                                                    }
