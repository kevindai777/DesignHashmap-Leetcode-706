//Objective is to design a hashmap.


//Design using two arrays - one to hold the value and one to hold the index of the key.

class Hashmap {
    constructor() {
        this.valueArray = []
        this.indexArray = []
    }

    put(key, value) {
        //If the key is not in the hashmap, then we
        //put it at index '0' and push the value into 
        //the value array
        if (this.indexArray[key] == undefined) {
            this.indexArray[key] = this.valueArray.length 
            this.valueArray.push(value)
        //Otherwise, we update the key value pair
        } else {
            this.valueArray[this.indexArray[key]] = value
        }
    }

    get(key) {
        //If the key is not in the map
        if (this.indexArray[key] == undefined) {
            return -1
        //Otherwise, return the key value pair
        } else {
            return this.valueArray[this.indexArray[key]]
        }
    }

    remove(key) {
        //If the key is in the map, make the key and value undefined
        if (this.indexArray[key] !== undefined) {
            this.valueArray[this.indexArray[key]] == undefined 
            this.indexArray[key] = undefined
        }
    }
}

let hashmap = new Hashmap()
hashmap.put(1,1)
hashmap.put(2,2)
hashmap.get(2)