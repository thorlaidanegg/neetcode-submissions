class TimeMap {
    
    keyStore
    
    constructor() {
        this.keyStore = new Map<string,Map<number,string>>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(!this.keyStore.get(key)){
            this.keyStore.set(key, new Map<number,string>())
        }
        this.keyStore.set(key, this.keyStore.get(key).set(timestamp,value))
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {

        if(!this.keyStore.get(key)) return ""

        const timestamps = [...this.keyStore.get(key).keys()]

        let start = 0
        let end = timestamps.length - 1

        while(start <= end){

            let mid = Math.floor(start + (end - start) / 2)

            if(timestamps[mid] === timestamp) return this.keyStore.get(key).get(timestamp)
            if(timestamps[mid] > timestamp) end = mid - 1
            if(timestamps[mid] < timestamp) start = mid + 1

        }
        return timestamps[start - 1 < 0 ? 0: start - 1 ] > timestamp ? "" : this.keyStore.get(key).get(timestamps[start - 1 < 0 ? 0: start - 1])
    }
}
