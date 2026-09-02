func topKFrequent(nums []int, k int) []int {

    mapi := make(map[int] int)
    bucket := make([][]int,len(nums)+1)
    ans := make([]int,0)

    for _,val := range nums{
        mapi[val]++
    }

    for key,val := range mapi {

        bucket[val] = append(bucket[val],key)

    }

for i := len(nums); i >= 0 && len(ans) < k; i-- {
    for _, num := range bucket[i] {
        ans = append(ans, num)

        if len(ans) == k {
            break
        }
    }
}


    return ans
}