class MinStack {

    public arr = []

    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.arr.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = Number.MAX_VALUE

        for(let i of this.arr){
            min = Math.min(min,i)
        }
        return min
    }
}
