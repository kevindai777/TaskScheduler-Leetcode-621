//Java Solution

class Solution {
    public int leastInterval(char[] tasks, int n) {
        Map<Character, Integer> map = new HashMap<>();
        int maxFreq = 0;
        for (char c : tasks) {
            map.put(c, map.getOrDefault(c, 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(c));
        }
        
        int numOfMax = 0;
        for (int val : map.values()) {
            if (val == maxFreq) {
                numOfMax++;
            }
        }
        
        return Math.max(tasks.length, (n + 1) * (maxFreq - 1) + numOfMax);
    }
}