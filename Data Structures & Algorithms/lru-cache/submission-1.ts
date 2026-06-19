class ListNode {
    key: number;
    value: number;
    prev: ListNode | null;
    next: ListNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {

    private map: Map<number, ListNode>;
    private head: ListNode;
    private tail: ListNode;
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy nodes
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove a node from the DLL
    private remove(node: ListNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    // Insert node just before tail (MRU position)
    private insert(node: ListNode): void {
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev!.next = node;
        this.tail.prev = node;
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key)!;

        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key: number, value: number): void {

        // Key already exists
        if (this.map.has(key)) {
            const node = this.map.get(key)!;
            node.value = value;

            this.remove(node);
            this.insert(node);
            return;
        }

        // Create new node
        const node = new ListNode(key, value);

        this.map.set(key, node);
        this.insert(node);

        // Evict LRU
        if (this.map.size > this.capacity) {
            const lru = this.head.next!;

            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}