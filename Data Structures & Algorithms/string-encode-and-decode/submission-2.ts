class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let ans:string = ""

        for(let i of strs){
            ans = ans + i.length + "$" + i
        }

        return ans

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        
        const ans:string[] = []

        let i=0

        while(i < str.length){

            let j = i

            while(str[j] !== "$"){
                j++
            }

            let num = Number(str.slice(i,j))

            let temp = str.slice(j+1,j + 1+ num)

            ans.push(temp)

            i = j + num + 1
        }

        
        return ans

    }
}
