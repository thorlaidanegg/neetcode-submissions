class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let start = 0;
        let end = rows * cols - 1;

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);

            let row = Math.floor(mid / cols);
            let col = mid % cols;

            if (matrix[row][col] === target) return true;

            if (matrix[row][col] > target) end = mid - 1;

            if (matrix[row][col] < target) start = mid + 1;
        }
        return false;
    }
}
