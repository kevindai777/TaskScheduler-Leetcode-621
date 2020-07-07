//Objective is to find how many slots is needed given a cooldown timer
//for a repeated task.

let tasks = ["A","A","A","B","B","B"]
let n = 2


//O(n) solution that uses a hashmap and math to figure out 
//the number of slots needed.

let map = {}
    
for (let letter of tasks) {
    if (map[letter] == undefined) {
        map[letter] = 1
    } else {
        map[letter]++
    }
}
    
let maxFrequency = 0
for (let key in map) {
    maxFrequency = Math.max(maxFrequency, map[key])
}
    
let numberOfMaxFrequency = 0
for (let key in map) {
    if (map[key] == maxFrequency) {
        numberOfMaxFrequency++
    }
}
    
//The number of slots to use is defined by the most frequent task
//(maxFrequency - 1) represents how many groups of "task + cooling period" we need
//(n + 1) is from n slots for the cooling and +1 is from the actual execution of the task
//numberOfMaxFrequency at the end is to add on the extra of the most frequent tasks
//at the end of the list
return Math.max(tasks.length, (maxFrequency - 1) * (n + 1) + numberOfMaxFrequency)