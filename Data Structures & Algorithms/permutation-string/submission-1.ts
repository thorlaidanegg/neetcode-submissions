class Solution {

    checkInclusion(s1: string, s2: string): boolean {

        const map = new Map<string, number>()
        const window = new Map<string, number>()

        let p1 = 0
        let p2 = 0

        for (const ch of s1) {
            map.set(ch, (map.get(ch) || 0) + 1)
        }

        while (p2 < s2.length) {

            // add right char
            window.set(
                s2[p2],
                (window.get(s2[p2]) || 0) + 1
            )

            // shrink if too big
            if (p2 - p1 + 1 > s1.length) {

                window.set(
                    s2[p1],
                    window.get(s2[p1])! - 1
                )

                if (window.get(s2[p1]) === 0) {
                    window.delete(s2[p1])
                }

                p1++
            }

            // compare maps
            if (p2 - p1 + 1 === s1.length) {

                let valid = true

                for (const [key, val] of map) {

                    if (window.get(key) !== val) {
                        valid = false
                        break
                    }
                }

                if (valid) {
                    return true
                }
            }

            p2++
        }

        return false
    }
}