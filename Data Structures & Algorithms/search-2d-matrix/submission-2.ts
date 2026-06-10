class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        let size = matrix[0].length
        let len = matrix.length
        let index = 0

        for(let i =0 ;i<len;i++){
            if(matrix[i][size - 1] >= target){
                index = i
                break
            }
        }
        let start = 0
        let end = size -1
        
        while(start<=end){

            let mid = Math.floor(start + (end - start)/2)

            if(matrix[index][mid] === target){
                return true
            }
            if(matrix[index][mid] > target){
                end = mid -1
            }

            if(matrix[index][mid] < target){   
                start = mid+1

            }         

        }
        return false
    }
}
