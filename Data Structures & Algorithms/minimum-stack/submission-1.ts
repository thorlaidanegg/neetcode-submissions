class MinStack {

    stack: number[]
    minStack: number[]

    constructor() {

        this.stack = []
        this.minStack = []
    }

    push(val: number): void {

        this.stack.push(val)

        if (
            this.minStack.length === 0
            || val <= this.getMin()
        ) {
            this.minStack.push(val)
        }
    }

    pop(): void {

        const popped = this.stack.pop()

        if (popped === this.getMin()) {
            this.minStack.pop()
        }
    }

    top(): number {

        return this.stack[this.stack.length - 1]
    }

    getMin(): number {

        return this.minStack[
            this.minStack.length - 1
        ]
    }
}