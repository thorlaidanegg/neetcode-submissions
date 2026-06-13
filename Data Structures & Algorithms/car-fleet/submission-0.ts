class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        
        const cars = position.map((p,i)=>({
            position: p,
            time: (target - p )/ speed[i]
        }))

        cars.sort((a,b) => b.position - a.position)

        let ans = 0
        let leadTime = 0

        for(let car of cars){
            if(car.time > leadTime){
                ans++
                leadTime = car.time
            }
        }   

        return ans
    }
}
