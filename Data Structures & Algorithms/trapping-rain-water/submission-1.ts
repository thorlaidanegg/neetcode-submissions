class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        const n = height.length
        const left:number[] = Array(n)
        const right:number[] = Array(n)
        let area:number = 0

        left[0] = height[0]
        for(let i = 1; i<n ; i++){
            left[i] = Math.max(left[i-1],height[i])
        }

        right[n-1] = height[n-1]
        for(let i=n-2 ; i >= 0; i--){
            right[i] = Math.max(right[i+1],height[i])
        }

        for(let i=0; i<n; i++){
            area += Math.min(left[i],right[i]) - height[i]
        }

        return area
    }
}
