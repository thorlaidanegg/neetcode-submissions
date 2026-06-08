class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let s = 0;
        let e = heights.length - 1;
        let ans = 0;

        while (s <= e) {
            const area = Math.min(heights[s], heights[e]) * (e - s);
            ans = Math.max(ans, area);
            console.log(area)
            if (heights[s] > heights[e]) {
                e--;
                continue
            }
            if (heights[s] < heights[e]) {
                s++;
                continue
            }
            if(heights[s] === heights[e])
            {
                s++
                e--
                continue
            }
        }
        return ans;
    }
}
