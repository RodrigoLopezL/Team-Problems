class Solution {
    maxProfit(prices: number[]): number {
        let buy1: number = Number.MAX_VALUE;
        let buy2: number = Number.MAX_VALUE;
        let sell1: number = 0;
        let sell2: number = 0;

        for (const price of prices) {
            buy1 = Math.min(buy1, price);
            sell1 = Math.max(sell1, price - buy1);
            buy2 = Math.min(buy2, price - sell1);
            sell2 = Math.max(sell2, price - buy2);
        }

        return sell2;
    }
}
