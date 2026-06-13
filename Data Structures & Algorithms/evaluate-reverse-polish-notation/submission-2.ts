class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (let i of tokens) {
            if (!isNaN(Number(i))) {
                stack.push(Number(i));
            } else {
                let elem1 = stack.pop();
                let elem2 = stack.pop();
                switch (i) {
                    case "+": {
                        let ans = elem1 + elem2;
                        stack.push(ans);
                        break
                    }
                    case "-": {
                        let ans = elem2 - elem1;
                        stack.push(ans);
                        break
                    }
                    case "*": {
                        let ans = elem1 * elem2;
                        stack.push(ans);
                        break
                    }
                    case "/": {
                        let ans = elem2 / elem1;
                        stack.push(Math.trunc(ans));
                        break
                    }
                }
            }
        }

        return stack[0];
    }
}
