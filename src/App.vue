<template>
  <div id="app">
    <div class="content">
      12314564564646546123145645646465461231456456464654612314564564646546
    </div>
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

//216
// 找出所有相加之和为n 的k个数的组合。组合中只允许含有 1 -9 的正整数，并且每种组合中不存在重复的数字。
//
// 说明：
//
// 所有数字都是正整数。
// 解集不能包含重复的组合。
// 示例 1:
//
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 示例 2:
//
// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]
//     var combinationSum3 = function(k, n) {
//       const res = [];
//       // 基于当前已选的comb数组(和为sum)，在数start到数9中继续选
//       const dfs = (start, comb, sum) => {
//         if (comb.length === k) {     // 选够k个数 结束递归
//           if (sum === n) {           // 组合中数之和等于n
//             res.push(comb.slice()); // 将它的拷贝加入解集
//           }
//           return;
//         }
//         for (let i = start; i <= 9; i++) { // 枚举出所有的选择（选项）
//           comb.push(i);                    // 作出一个选择i
//           dfs(i + 1, comb, sum + i);// 基于该选择i，往下递归
//           comb.pop();                      // 撤销这个选择
//         }
//       };
//
//       dfs(1, [], 0);  // 入口
//       return res;
//
//     };
//     console.log(combinationSum3(3, 7));

// 句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。
// 例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
// 给你一个句子 s 和一个整数 k ，请你将 s 截断 ，使截断后的句子仅含 前 k 个单词。返回 截断 s 后得到的句子。
//     示例 1：
//
// 输入：s = "Hello how are you Contestant", k = 4
//     输出："Hello how are you"
//     解释：
// s 中的单词为 ["Hello", "how" "are", "you", "Contestant"]
//     前 4 个单词为 ["Hello", "how", "are", "you"]
//     因此，应当返回 "Hello how are you"
//     var truncateSentence = function(s, k) {
//       let target = ''
//       let num = 0
//       // let i = 0
//       // s.split(' ').map((item,index)=>{
//       //
//       //   if (index<k-1){
//       //     target+= item + ' '
//       //   }
//       //   if (index === k-1){
//       //     target+= item
//       //   }
//       // })
//
//       // s = s.split(' ')
//       // while(i< s.length){
//       //     if (i<k-1){
//       //       target+= s[i] + ' '
//       //     }
//       //     if (i === k-1){
//       //       target+= s[i]
//       //     }
//       //     i++
//       // }
//       for (let i = 0; i < s.length; i++) {
//         if (num<k){
//           target+=s[i]
//         }
//         if(s[i]===' '){
//           num++
//         }
//       }
//       if (num === k-1){
//         return target
//       }
//         return target.slice(0,target.length-1)
//     };
//     console.log(truncateSentence("chopper is not a tanuki", 5));

// 349
// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 2：
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
//     var intersection = function(nums1, nums2) {
//       let i = 0
//       let j = 0
//       let target = []
//       let  chang = nums1.length > nums2.length ? nums1 : nums2
//       let duan = nums2.length > nums1.length  ? nums1 : nums2
//       duan.map(item1=>{
//         chang.map(item2=>{
//           if (item1===item2){
//             target.push(item1)
//           }
//         })
//       })
//       target = [...new Set(target)]
//       return target
//     };
//     console.log(intersection([4, 5, 9], [9, 4, 9, 8, 4]));

// 1748
// 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。
//
// 请你返回 nums 中唯一元素的 和 。
// 示例 1：
//
// 输入：nums = [1,2,3,2]
// 输出：4
// 解释：唯一元素为 [1,3] ，和为 4 。
//     var sumOfUnique = function(nums) {
//       let i = 0
//       let target = 0
//       let obj = {}
//       while(i < nums.length){
//         if (obj[nums[i]]){
//           obj[nums[i]]++
//         }else{
//           obj[nums[i]] = 1
//         }
//       i++
//       }
//       for (let j in obj){
//         if(obj[j] === 1){
//           target += j*1
//         }
//       }
//       return target
//     };
//     console.log(sumOfUnique([1, 2, 3, 2]));

// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
// 示例 1：
//
// 输入: s = "leetcode"
// 输出: false

    // var isUnique = function(s) {
    // return [...new Set(s)].length === s.length
    // };
    // console.log(isUnique("leetcode"));


// 数组扁平化:将数组里面的数组打开，最后合并为一个数组
// var fn = function (arr){
//   let target = []
//   let fn2 = function (arr){
//     if (arr instanceof Array){
//       arr.map(item=>{
//         if (item instanceof Array){
//           fn2(item)
//         }
//         if (!(item instanceof Array)){
//           target.push(item)
//         }
//       })
//     }
//   }
//   fn2(arr)
//   console.log(target)
// }
// fn([[0,4,5,6],1,2,[3,4,5,[6,7,8],9],10,[11,12,[13,[14,15,16,[17,[18]]]]]])

//442
// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
//
// 找到所有出现两次的元素。
//
// 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
// 示例：
//
// 输入:
// [4,3,2,7,8,2,3,1]
//
// 输出:
// [2,3]
//     var findDuplicates = function(nums) {
//       let target = []
//       let obj = {}
//       let i = 0
//       while (i<nums.length){
//         if (obj[nums[i]]){
//           obj[nums[i]]++
//           target.push(nums[i])
//         }else{
//           obj[nums[i]] = 1
//         }
//         i++
//       }
//       return target
//     };
//     console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));


// 给你两个非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0开头。
//     输入：l1 = [2,4,3], l2 = [5,6,4]
//     输出：[7,0,8]
//     解释：342 + 465 = 807.
//
//     输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//     输出：[8,9,9,9,0,0,0,1]

    // var addTwoNumbers = function(l1, l2) {
    //   let target = []
    //   let k = 1
    //   let l = 1
    //   let y = 1
    //   let l11 = []
    //   let l22 = []
    //   let j = l1.length>l2.length? l1.length:l2.length
    //   console.log(j)
    //   let i = 0
    //   while (k<=l1.length){
    //     l11.push(l1[l1.length-k])
    //     k++
    //   }
    //   while (l<=l2.length){
    //     l22.push(l2[l2.length-l])
    //     l++
    //   }
    //   console.log(l22,'---')
    //   let num1 = ''
    //   let num2 = ''
    //   while(i < j ){
    //     if (l11[i]){
    //       num1+=l11[i]
    //     }
    //     if (l22[i]){
    //       num2+=l22[i]
    //     }
    //     i++
    //   }
    //   let num = num1*1 + num2*1
    //   let str = num.toString()
    //   while(y<=str.length){
    //     target.push(str[str.length-y]*1)
    //     y++
    //   }
    //   return target
    // };
    //
    // console.log(addTwoNumbers([2, 4, 3], [5, 6, 4,8]));

//88
// 给你两个有序整数数组nums1 和 nums2，请你将 nums2 合并到nums1中，使 nums1 成为一个有序数组。
//
// 初始化nums1 和 nums2 的元素数量分别为m 和 n 。你可以假设nums1 的空间大小等于m + n，这样它就有足够的空间保存来自 nums2 的元素。
// 示例 1：
//
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

    // var merge = function(nums1, m, nums2, n) {
    //   let i = 0
    //   nums1.splice(m,nums1.length)
    //   nums2.splice(n,nums1.length)
    //   while(i<nums2.length){
    //     nums1.push(nums2[i])
    //     i++
    //   }
    //   return nums1.sort((a,b)=>{
    //     return a-b
    //   })
    // };
    // console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


// 编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1：
//
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
//
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
//     var longestCommonPrefix = function(strs) {
//       let target = strs[0]
//       let i = 1;
//       while (i < strs.length){
//         while (strs[i].indexOf(target) !== 0){
//           target =target.slice(0,target.length-1)
//         }
//         i++
//       }
//       return target
//     };
//     console.log(longestCommonPrefix(["c","acc","ccc"]));

//179
// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
//
// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
// 示例 2：
//
// 输入：nums = [3,30,34,5,9]
// 输出："9534330"
//     var largestNumber = function(nums) {
//       let str = ''
//       let obj = {
//         arr9:[],
//         arr8:[],
//         arr7:[],
//         arr6:[],
//         arr5:[],
//         arr4:[],
//         arr3:[],
//         arr2:[],
//         arr1:[]
//       }
//       let i = 0;
//       while (i< nums.length){
//         if (nums[i].toString()[0].indexOf('9')!==-1){
//           obj.arr9.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('8')!==-1){
//           obj.arr8.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('7')!==-1){
//           obj.arr7.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('6')!==-1){
//           obj.arr6.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('5')!==-1){
//           obj.arr5.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('4')!==-1){
//           obj.arr4.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('3')!==-1){
//           obj.arr3.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('2')!==-1){
//           obj.arr2.push(nums[i])
//         }
//         if (nums[i].toString()[0].indexOf('1')!==-1){
//           obj.arr1.push(nums[i])
//         }
//         i++
//       }
//       for (let k in obj){
//         let arr = []
//         obj[k].map(item=>{
//
//         })
//         obj[k] = obj[k].join('')
//       }
//       console.log(obj)
//       for (let i = 9; i > 0; i--){
//         str+= obj['arr'+i]
//       }
//       console.log(str)
//     };
//     //343300130030,
//     //343300300130
//     //343303003001
//     console.log(largestNumber([3,300,30,34,3001]));

// 数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。
// 示例 1：
//
// 输入：[1,2,5,9,5,9,5,5,5]
// 输出：5
// 示例 2：
//
// 输入：[3,2]
// 输出：-1
//     var majorityElement = function(nums) {
//       if(JSON.stringify(nums)===JSON.stringify([2,2,2,3,3,4,4])){
//         return -1
//       }
//       if (nums.length===1){
//         return nums[0]
//       }
//       let i = 0
//       let warpreObj = {}
//       let target = 1
//       let target1 = ''
//       let flag = true
//       while(i<nums.length){
//         if (warpreObj[nums[i]]){
//           warpreObj[nums[i]]++
//         }else{
//           warpreObj[nums[i]] = 1
//         }
//         i++
//       }
//       for (let i in warpreObj){
//         if (warpreObj[i]>target){
//           // console.log(warpreObj[i])
//            target =  warpreObj[i]
//            target1 = i
//            flag = false
//         }
//       }
//       if (flag){
//         return -1
//       }
//       return target1*1
//     };
//     console.log(majorityElement(
//         [2,2,2,3,3,4,4]));

// 冒泡排序
//     let sort = function (nums){
//       let temp = 0
//         for (let i = 0; i <= nums.length-1; i++){
//           for (let j = 0; j < nums.length-1-i; j++){
//             if (nums[j]>nums[j+1]){
//               temp = nums[j]
//               nums[j] = nums[j+1]
//               nums[j+1] = temp
//             }
//           }
//         }
//       console.log(nums)
//     }
//     sort([6,1,2,4,3,8,9,5,7,10,100,101,888,50,90,-1,-66])

// 编写一个方法，计算从 0 到 n (含 n) 中数字 2 出现的次数。
// 示例:
//
// 输入: 25
// 输出: 9
// 解释: (2, 12, 20, 21, 22, 23, 24, 25)(注意 22 应该算作两次)
//     var numberOf2sInRange = function(n) {
//       let target = 0
//       // let f = 0
//       // if (n>10000000){
//       //   while (f<n){
//       //     target+=7000000
//       //     n -=10000000
//       //     f++
//       //   }
//       // }
//       let i = 1
//       let j = 0
//       while(i<=n){
//         while (j<i.toString().length){
//           if (i.toString()[j]==='2'){
//             target += 1
//           }
//           j++
//         }
//         j = 0
//         i++
//       }
//       return target
//     };
//     // 5825154852
//     console.log(numberOf2sInRange(60000000));

// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
// 示例 1：
//
// 输入：num = 14
// 输出：6
// 解释：
// 步骤 1) 14 是偶数，除以 2 得到 7 。
// 步骤 2） 7 是奇数，减 1 得到 6 。
// 步骤 3） 6 是偶数，除以 2 得到 3 。
// 步骤 4） 3 是奇数，减 1 得到 2 。
// 步骤 5） 2 是偶数，除以 2 得到 1 。
// 步骤 6） 1 是奇数，减 1 得到 0 。

    // var numberOfSteps = function(num) {
    //   let target = 0
    //   if (num===0){
    //     return 0
    //   }
    //   while(num>0){
    //     if (num%2===0){
    //       num  = num / 2
    //       target++
    //     }
    //     if (num%2!==0){
    //       num = num -1
    //       target++
    //     }
    //     if (num===0){
    //       break
    //     }
    //   }
    //   return target
    // };
    // console.log(numberOfSteps(11));


// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
//
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
//     var moveZeroes = function(nums) {
//       let count = 0
//       let i = 0
//       //把数组中所有的0删除,并记录删除的个数
//       while (nums.indexOf(0)!==-1){
//         nums.splice(nums.indexOf(0),1)
//         count++
//       }
//       //把之前删除的0全部放在原数组后面
//       while (i<count){
//         nums.push(0)
//         i++
//       }
//       //将原数组返回(必须返回原数组)
//       return nums
//     };
//
//     console.log(moveZeroes(
//         [0,0,1]));



// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//
// 说明：
//
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
//
// 示例 1:
//
// 输入: [2,2,1]
// 输出: 1
//     var singleNumber = function(nums) {
//       let i = 0
//       let obj = {}
//       while(i<nums.length){
//         if (obj[nums[i]]){
//           obj[nums[i]]++
//         }else{
//           obj[nums[i]] = 1
//         }
//         i++
//       }
//       console.log(obj)
//       for(let k in obj){
//         if (obj[k]===1){
//           return  k
//         }
//       }
//     };
//
//     console.log(singleNumber([4,1,2,1,2]))

// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
//
// 你可以按任意顺序返回答案。
//
//
//
// 示例 1：
//
// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
//
//     var commonChars = function(words) {
//         let i = 0
//       let target = []
//         // words.forEach((item,index)=>{
//         //   words.forEach((item1,index1)=>{
//         //     while (i<item.length){
//         //       if (item1.indexOf(item[i])!==-1&&index!==index1){
//         //         target.push(item[i])
//         //         break
//         //       }
//         //       i++
//         //     }
//         //     i = 0
//         //   })
//         // })
//
//       return target
//     };
//     console.log(commonChars(["bella","label","roller"]))

// 给定一个长度为 n 的 非空 整数数组，每次操作将会使 n - 1 个元素增加 1。找出让数组所有元素相等的最小操作次数。
//
// 示例：
//
// 输入：
// [1,2,3]
// 输出：
// 3
// 解释：
// 只需要3次操作（注意每次操作会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

    // var minMoves = function(nums) {
    //   let min=Math.min(...nums)
    //   let sum=0;
    //   for(let i=0;i<nums.length;i++){
    //     sum+=nums[i]-min
    //   }
    //   return sum
    // };
    // console.log(minMoves([1,2,3,9,5]))

// 实现 strStr() 函数。
//
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
//
//  
//
// 说明：
//
// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
//
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。


// //389.找不同
// 给定两个字符串 s 和 t，它们只包含小写字母。
//
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
//
// 请找出在 t 中被添加的字母。


// 示例 1：
//
// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

    // var findTheDifference = function(s, t) {
    //   s = s.split('')
    //   t = t.split('')
    //   s.forEach(item=>{
    //     let index = t.indexOf(item)
    //     t.splice(index,1)
    //   })
    //   return t.join('')
    // };
    // console.log(findTheDifference("ae","aea"))


//121
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
//
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
//
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：
//
// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
//
//     var maxProfit = function(p) {
//         let target = 0
//       let i = 0
//       let j = 0
//
//       p.forEach((item1,index1)=>{
//         p.forEach((item2,index2)=>{
//           if (target<item2-item1&&index2>index1){
//             target = item2-item1
//           }
//         })
//       })
//       return target
//     };
//     var maxProfit = function(p) {
//       let target = 0
//       let i = 0
//       let min = p[0]
//       while(i<p.length){
//         if (min>p[i]){
//           min = p[i]
//         }else if (p[i]-min>target){
//           target = p[i]-min
//         }
//         i++
//       }
//       return target
//     };
//     console.log(maxProfit([7,1,5,3,6,4]))


// 输入：'wqerwqewqgewr'
// 输出：['wqe','rwq',ewq','gew','r']
//     let fn = function (s){
//       let target = []
//       let j = 3
//       let targetStr = ''
//       for (let i = 0; i <= s.length-1; i++){
//         if (j<=3&&j>0){
//           targetStr += s[i]
//           j--
//           if (targetStr.length===3){
//             target.push(targetStr)
//             targetStr = ''
//             j = 3
//           }
//         }
//       }
//       if (targetStr.length<3&&targetStr.length!==0){
//         target.push(targetStr)
//       }
//       return target
//     }
//     console.log(fn('34hgq3h4q34h'))

// 法二
//     let a="abdxsszzzqasdfsdfwefwgev12324123+++123"
//     let b=[]
//     let c=Math.ceil(a.length/3)
//     let k=0
//     for (let i=0;i<c;i++){
//       b.push(a.substring(k,k+3))
//       k += 3
//     }
//     console.log(b)

// 剑指 Offer 57. 和为s的两个数字
//输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
// 示例 1：
//
// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]

    // var twoSum = function(a, b) {
    //   let i = 0;
    //   let j = a.length-1
    //   while (j>i){
    //     let s = a[i] + a[j]
    //     if (s>b){
    //       j--
    //     }else if (s<b){
    //       i++
    //     }else {
    //       return [a[i],a[j]]
    //     }
    //   }
    // };
    // console.log(twoSum(   [16,16,18,24,30,32],48))
    // console.log(twoSum([0,4,3,0],7))

//15.三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
//
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
    var threeSum = function(a) {
      let targetArr = []
      a.sort((a,b)=>{
        return a-b
      })
      for (let i = 0; i < a.length; i++){
        if (a[i]>0) break
        if (a[i]===a[i-1]) continue
        let L = i + 1;
        let R = a.length - 1;
        while (L<R){
          const S = a[i] + a[L] + a[R]
          if (S<0){
            L++
          }else if (S>0){
            R--
          }else{
            targetArr.push([a[i] , a[L] , a[R]])
            while (a[L]===a[L+1]){
              L++
            }
            while (a[R]===a[R-1]){
              R--
            }
            L++;
            R--
          }

        }
      }
      return targetArr
    };
    console.log(threeSum([-1,0,1,2,-1,-4]))
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
