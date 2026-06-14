class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {

        const stack:number[] = []
        const ans:number[] = []


        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
                ans[stack[stack.length - 1]] = i - stack[stack.length - 1]
                stack.pop()
            }
            stack.push(i)
        }

        for(let i of stack){
            ans[i] = 0
        }

        return ans
    }
}
