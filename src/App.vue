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
