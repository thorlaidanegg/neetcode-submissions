class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const stack:string[] = []

        for(let i of s){

            if(i==="(" || i==='{' || i==="["){
                stack.push(i)
            }else{

                if(stack.length === 0) return false

                if(stack[stack.length - 1] === '(' && i!==")") return false
                if(stack[stack.length - 1] === '[' && i!=="]") return false
                if(stack[stack.length - 1] === '{' && i!=="}") return false

                stack.pop()
            }

        }
        
        return stack.length === 0 ? true : false

    }
}
