<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
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



// 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子piles[i]。
// 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
// 亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
// 假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回true，当李赢得比赛时返回false。
// 输入：[5,3,4,5]
// 输出：true
// 解释：
// 亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。
// 假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
// 如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。
// 如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。
// 这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。
//     var stoneGame = function (piles) {
//       let y = 0
//       let l = 0
//       let flag = true
//
//       for (let i = 0; i < piles.length; i++){
//         if(flag){
//           y += piles.splice(piles.indexOf(Math.max.apply(null, piles)),1)*1
//           console.log(piles)
//           flag = false
//         }
//         if(!flag){
//           l += piles.splice(piles.indexOf(Math.max.apply(null, piles)),1)*1
//           console.log(piles)
//           flag = true
//         }
//       }
//       if (piles.length===2){
//         y+=Math.max.apply(null, piles)
//         l+=Math.min.apply(null, piles)
//       }
//       console.log(y,l)
//       return (y > l)
//     };
//     console.log(stoneGame([6,9,10,5,9,10]));


// 给你一个整数数组 nums 。
// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
// 返回好数对的数目。
// 输入：nums = [1,2,3,1,1,3]
// 输出：4
// 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
//     var numIdenticalPairs = function(nums) {
//       let i = 0
//       let obj = {}
//       let target = 0
//       while (i<nums.length){
//         if(obj[nums[i]]){
//           target+=obj[nums[i]]
//           obj[nums[i]]++
//         }else{
//           obj[nums[i]] = 1
//         }
//         i++
//       }
//       console.log(obj)
//       return target
//     };
//     console.log(numIdenticalPairs([1,2,3,1,1,3]));


// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
// 示例 1：
// 输入：[4,2,1]
// 输出：4
// 解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。
//     var minCount = function(coins) {
//       let target = 0
//       coins.map(item=>{
//         if ((item/2).toString().indexOf('.')!==-1){
//           target += Math.ceil(item/2)
//         }else{
//           target += item/2
//         }
//       })
//       return target
//     };
//     console.log(minCount([2, 3, 10]));


// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
// 示例 1：
// 输入：n = 234
// 输出：15
// 解释：
// 各位数之积 = 2 * 3 * 4 = 24
// 各位数之和 = 2 + 3 + 4 = 9
// 结果 = 24 - 9 = 15

    // var subtractProductAndSum = function(n) {
    //   let sum = 0,pro = 1,i = 0
    //   n = n.toString()
    //   while(i<n.length){
    //     sum += n[i]*1
    //     pro *= n[i]*1
    //     i++
    //   }
    //   return pro - sum
    // };
    // console.log(subtractProductAndSum(234));

//不会
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。
//     var solveNQueens = function(n) {
//
//       let arr1 = [1,1,1,1]
//       let arr2 = [1,1,1,1]
//       let arr3 = [1,1,1,1]
//       let arr4 = [1,1,1,1]
//       arr1.splice(0,1,'Q')
//       if(arr1[0] !== '.' && arr1[0]==='Q'){
//         arr1 = arr1.map((item,index)=>{
//           if(index!==0){
//              return  item = '.'
//           }
//           return item
//         })
//         arr2[0] = '.'
//         arr2[1] = '.'
//         arr3[0] = '.'
//         arr3[2] = '.'
//         arr4[0] = '.'
//         arr4[3] = '.'
//       }else if(arr1[1] !== '.' && arr1[1]==='Q'){
//
//       }
//       console.log(arr1)
//       console.log(arr2)
//       console.log(arr3)
//       console.log(arr4)
//     };
//     solveNQueens(4)

// 给你两个长度相同的整数数组target和arr。
// 每一步中，你可以选择arr的任意 非空子数组并将它翻转。你可以执行此过程任意次。
// 如果你能让 arr变得与 target相同，返回 True；否则，返回 False 。
// 示例 1：
//
// 输入：target = [1,2,3,4], arr = [2,4,1,3]
// 输出：true
// 解释：你可以按照如下步骤使 arr 变成 target：
// 1- 翻转子数组 [2,4,1] ，arr 变成 [1,4,2,3]
// 2- 翻转子数组 [4,2] ，arr 变成 [1,2,4,3]
// 3- 翻转子数组 [4,3] ，arr 变成 [1,2,3,4]
// 上述方法并不是唯一的，还存在多种将 arr 变成 target 的方法。

    // var canBeEqual = function(target, arr) {
    //   let i = 0
    //   let flag = true
    //   target = target.sort((a,b)=>{
    //     return a-b
    //   })
    //   arr = arr.sort((a,b)=>{
    //     return a-b
    //   })
    //   if (arr.length !== target.length){
    //     flag = false
    //   }
    //   while(i<arr.length){
    //     if (arr[i]!==target[i]){
    //       flag =  false
    //     }
    //     i++
    //   }
    //   return flag
    // };
    // console.log(canBeEqual([1, 2, 3, 4], [2, 1, 3, 4]));

// 给定一个整数n, 返回从1到n的字典顺序。
// 例如，
// 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
// 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据n小于等于5,000,000。
//     var lexicalOrder = function(n) {
//       let target = []
//       let i = 1
//       while(i<=n){
//         target.push(i)
//         i++
//       }
//       return target.sort()
//     };
//     console.log(lexicalOrder(100));


// 给你一个仅由数字 6 和 9 组成的正整数 num。
// 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
// 请返回你可以得到的最大数字。
// 示例 1：
//
// 输入：num = 9669
// 输出：9969
// 解释：
// 改变第一位数字可以得到 6669 。
// 改变第二位数字可以得到 9969 。
// 改变第三位数字可以得到 9699 。
// 改变第四位数字可以得到 9666 。
// 其中最大的数字是 9969 。
//     var maximum69Number  = function(num) {
//       let i = 0
//       num = num.toString().split('')
//       while(i<num.length){
//         if(num[i]*1 !== 9){
//           num.splice(i,1,'9')
//           break
//         }
//         i++
//       }
//       return num.join('')*1
//     };
//     console.log(maximum69Number(9669));
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  width: 1920px;
  height: 100px;
  background-color: pink;
}

#app .content {
  width: 200px;

  word-break: break-all;

  text-overflow: ellipsis;

  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/

  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/

  -webkit-line-clamp: 2; /** 显示的行数 **/

  overflow: hidden; /** 隐藏超出的内容 **/
}

#app img {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 50px;
  height: 50px;
}
</style>
