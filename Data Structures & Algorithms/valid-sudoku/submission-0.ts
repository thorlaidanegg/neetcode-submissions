class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        //row
        for (let i = 0; i < 9; i++) {
            const map = new Map<number, number>();
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") {
                    const num = Number(board[i][j]);
                    if (map.has(num)) {
                        return false;
                    } else {
                        map.set(num, 1);
                    }
                }
            }
        }

        //col
        for (let i = 0; i < 9; i++) {
            const map = new Map<number, number>();
            for (let j = 0; j < 9; j++) {
                if (board[j][i] !== ".") {
                    const num = Number(board[j][i]);
                    if (map.has(num)) {
                        return false;
                    } else {
                        map.set(num, 1);
                    }
                }
            }
        }

        //3x3 box

        const box = new Map<number, Set<number>>();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") {
                    const num = Number(board[i][j]);
                    const boxNum = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);

                    if (!box.has(boxNum)) {
                        box.set(boxNum, new Set<number>());
                    }

                    const setOfbox = box.get(boxNum);

                    if (setOfbox.has(num)) {
                        return false;
                    } else {
                        setOfbox.add(num);
                    }
                }
            }
        }

        return true;
    }
}
