class Solution {
    minPatches(nums: number[], n: number): number {
        let miss: number = 1;
        let patch: number = 0;
        let i: number = 0;

        while (miss <= n) {
            if (i < nums.length && nums[i] <= miss) {
                miss += nums[i];
                i++;
            } else {
                miss += miss;
                patch++;
            }
        }

        return patch;
    }
}
