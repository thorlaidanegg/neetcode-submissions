class Solution {

    minWindow(s: string, t: string): string {

        // frequency needed
        const need = new Map<string, number>()

        for (const ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1)
        }

        // current window frequencies
        const window = new Map<string, number>()

        let have = 0
        const needCount = need.size

        let left = 0

        let minLen = Infinity
        let ans = ""

        for (let right = 0; right < s.length; right++) {

            const ch = s[right]

            window.set(ch, (window.get(ch) || 0) + 1)

            // this character requirement satisfied
            if (
                need.has(ch) &&
                window.get(ch) === need.get(ch)
            ) {
                have++
            }

            // valid window
            while (have === needCount) {

                // update answer
                if (right - left + 1 < minLen) {

                    minLen = right - left + 1

                    ans = s.slice(left, right + 1)
                }

                // shrink from left
                const leftChar = s[left]

                window.set(
                    leftChar,
                    window.get(leftChar)! - 1
                )

                // requirement broken
                if (
                    need.has(leftChar) &&
                    window.get(leftChar)! <
                    need.get(leftChar)!
                ) {
                    have--
                }

                left++
            }
        }

        return ans
    }
}