func isValidSudoku(board [][]byte) bool {

	mapi:= make(map[byte]bool)
	japi:= make([]map[byte]bool,9)
	for i := 0; i < 9; i++ {
    	japi[i] = make(map[byte]bool)
	}

	for i:=0;i<9;i++{
		for j:=0;j<9;j++{
			if board[i][j] == '.'{
				continue
			}
			_ , exists:= mapi[board[i][j]]
			if exists{
				return false
			}
			mapi[board[i][j]] = true
		}
		clear(mapi)
	}

	for i:=0;i<9;i++{
		for j:=0;j<9;j++{
			if board[j][i] == '.'{
				continue
			}
			_ , exists:= mapi[board[j][i]]
			if exists{
				return false
			}
			mapi[board[j][i]] = true
		}
		clear(mapi)
	}

	// (i *j) / 3
	// j / 3
	for i:=0;i<9;i++{
		for j:=0;j<9;j++{
			if board[i][j] == '.'{
				continue
			}
			square:= (i/3) * 3 + (j/3)
			_ , exists:= japi[square][board[i][j]]
			if exists{
				return false
			}
			japi[square][board[i][j]] = true
		}
	}


	return true

}
