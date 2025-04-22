class Node {
      constructor(data) {
          this.data = data;
              this.next = null;
                }
                }

                class SinglyLinkedList {
                  constructor() {
                      this.head = null;
                        }

                          append(data) {
                              const newNode = new Node(data);
                                  if (!this.head) return this.head = newNode;

                                      let current = this.head;
                                          while (current.next) {
                                                current = current.next;
                                                    }
                                                        current.next = newNode;
                                                          }

                                                            printList() {
                                                                let current = this.head;
                                                                    while (current) {
                                                                          console.log(current.data);
                                                                                current = current.next;
                                                                                    }
                                                                                      }
                                                                                      }
