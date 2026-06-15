class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {

        let i=0;
        let j = 0;
        let k = 0
        let arr = []

        while(i<nums1.length && j<nums2.length){

            if(nums1[i] < nums2[j]){
                arr[k] = nums1[i]
                i++
            }else{
                arr[k] = nums2[j]
                j++
            }
            k++
        }

        for(let a = i ; a < nums1.length; a++){
            arr[k] = nums1[a]
            k++
        }
        for(let a = j ; a < nums2.length; a++){
            arr[k] = nums2[a]
            k++
        }


        let len = arr.length

        let isEven:boolean = len % 2 === 0



        return isEven ? (arr[len/2] + arr[(len/2) - 1]) / 2  : arr[Math.floor(len/2)]
    }
}
