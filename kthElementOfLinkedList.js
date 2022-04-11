//* 1-2-3-4-5-6-|7|-8-9-(null)
//?              p
//?                   c

function kthElementOfLinkedList(k) {
  let previous = 0;
  let current = 0;

  for (let i = 0; i <= k - 1; i++) {
    current = current.next;
    if (current.next == null) throw new Error("Error");
  }

  while (current.next != null) {
    current = current.next;
    previous = previous.next;
  }
  return previous.value;
}

kthElementOfLinkedList(5);
