// class Solution {
//     /**
//      * @param {string} s
//      * @return {number}
//      */
//     lengthOfLongestSubstring(s: string): number {
//         const set = new Set<string>();
//         let ans: number = 0;
//         let p1: number = 0;
//         let p2: number = 0;

//         while (p2 < s.length) {
//             if (!set.has(s[p2])) {
//                 set.add(s[p2]);
//                 ans = Math.max((p2 - p1 ) + 1, ans);
//                 p2++
//             } else {
//                 set.clear();
//                 p1++;
//                 p2 = p1+1
//                 set.add(s[p1])
//             }
//         }
//         return ans;
//     }
// }

class Solution {

    lengthOfLongestSubstring(s: string): number {

        const set = new Set<string>()

        let left = 0
        let ans = 0

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {
                set.delete(s[left])
                left++
            }

            set.add(s[right])

            ans = Math.max(
                ans,
                right - left + 1
            )
        }

        return ans
    }
}
