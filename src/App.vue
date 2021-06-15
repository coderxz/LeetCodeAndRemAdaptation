<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
// 符合下列属性的数组 arr 称为 山脉数组 ：
// arr.length >= 3
// 存在 i（0 <i< arr.length - 1）使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// 给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。
// 输入：arr = [0,1,0]
// 输出：1
// 输入：arr = [0,10,5,2]
// 输出：1
// var peakIndexInMountainArray = function(arr) {
//   return arr.indexOf(Math.max.apply(null,arr))
// };
// console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));


// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
// 请返回 nums 的动态和。
// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
// var runningSum = function(nums) {
//   let newArr = []
//   let startNum = 0
//   for (let i = 0; i < nums.length; i++) {
//     startNum += nums[i]
//     newArr[i] = startNum  
//   }
//   return newArr
// };
// console.log(runningSum([1,2,3,4]));


// 给定字符串J代表石头中宝石的类型，和字符串S代表你拥有的石头S中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// J中的字母不重复，J和S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
// 示例 1:
// 输入: J = "aA", S = "aAAbbbb"
// 输出: 3
// var numJewelsInStones = function(jewels, stones) {
//  let count = 0
//  for (let i = 0; i < stones.length; i++) {
//    if (jewels.indexOf(stones[i]) !== -1) {
//      count ++
//    }  
//  }
//  return count
// };
// console.log(numJewelsInStones('aA','aAAbbbb'));

// 编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。
// 输入: numbers = [1,2]
// 输出: [2,1]
// var swapNumbers = function(numbers) {
// return numbers.reverse()
// };
// console.log(swapNumbers([1,2]));

// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
// 输入: n = 3
// 输出: 6
// var sumNums = function(n){
//   let l = 0
//   console.log(n);
//   var sumNums1 = function(k) {
    
//     l += k
//     k--
//     console.log(k,l);

//     return k && sumNums1(k)



    
//   };
//   sumNums1(n)
//   return l
// }
//   console.log(sumNums(6));

// 给你一个数组candies和一个整数extraCandies，其中candies[i]代表第 i 个孩子拥有的糖果数目。
// 对每一个孩子，检查是否存在一种方案，将额外的extraCandies个糖果分配给孩子们之后，此孩子有 最多的糖果。注意，允许有多个孩子同时拥有 最多的糖果数目。
// 输入：candies = [2,3,5,1,3], extraCandies = 3
// 输出：[true,true,true,false,true]
// 解释：
// 孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
// 孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
// 孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
// 孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
// 孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
//     var kidsWithCandies = function(candies, extraCandies) {
//       let maxNum = Math.max(...candies)
//       let target = []
//       let i = 0
//       while (i<candies.length){
//         candies[i]+extraCandies>=maxNum ? target[i] = true : target[i] = false
//         i++
//       }
//       return target
//     };
//     console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？
// 输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。
// 输入：guess = [1,2,3], answer = [1,2,3]
// 输出：3
// 解释：小A 每次都猜对了。
//     var game = function(guess, answer) {
//       let i = 0
//       let targrt = 0
//       while(i<guess.length){
//         if(guess[i]===answer[i]){
//           targrt++
//         }
//         i++
//       }
//       return targrt
//     };
//     console.log(game([1, 2, 3], [1, 2, 3]));

// 夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。
// 商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。
// 给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。
// 注意：Tony 可以按任意顺序购买雪糕。
// 输入：costs = [1,3,2,4,1], coins = 7
// 输出：4
// 解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7
//     var maxIceCream = function(costs, coins) {
//       // eslint-disable-next-line no-debugger
//       // debugger
//       let target = 0
//       let count = 0
//       costs.sort((a,b)=>{return a - b})
//       for (let i = 0; i < costs.length; i++){
//         count+=costs[i]
//         if(count>coins){
//           break
//         }
//         target++
//       }
//       return target
//     };
//     console.log(maxIceCream([1, 3, 2, 4, 1], 7));


// 给你一个数组 items ，其中items[i] = [typei, colori, namei] ，描述第 i 件物品的类型、颜色以及名称。
// 另给你一条由两个字符串ruleKey 和 ruleValue 表示的检索规则。
// 如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：
// ruleKey == "type" 且 ruleValue == typei 。
// ruleKey == "color" 且 ruleValue == colori 。
// ruleKey == "name" 且 ruleValue == namei 。
// 统计并返回 匹配检索规则的物品数量 。
// 输入：items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// 输出：1
// 解释：只有一件物品匹配检索规则，这件物品是 ["computer","silver","lenovo"] 。

  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
}
#app{
  position: relative;
  width: 1920px;
  height: 100px;
  background-color: pink;
}
#app .content{
    width: 200px;

    word-break: break-all;

    text-overflow: ellipsis;

    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/

    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/

    -webkit-line-clamp: 2; /** 显示的行数 **/

    overflow: hidden;  /** 隐藏超出的内容 **/
}
#app img {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 50px;
  height: 50px;
}
</style>
