class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    //monotonically decreasing stack
    dailyTemperatures(temperatures: number[]): number[] {

        const ans:number[] = []
        const stack:number[] = []

        for(let i = 0; i<temperatures.length; i++){
                while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                    let e = stack.pop()
                    ans[e] = i-e
                }
             stack.push(i)
        }
        for(let i of stack){
            ans[i] = 0
        }

        return ans

    }
}
