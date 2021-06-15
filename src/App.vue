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
  var xorOperation = function(n, start) {
    let arr = []
    let result = 1;
    if(start%2===0){
      for (let i = 0; i < n; i++) {
        arr.push(start)
        start+=2
      }
    }else{
      for (let i = 0; i < n; i++) {
        arr.push(start)
        start+=2
      }
    }
    arr.map(item=>{
      result^= item
    })
    console.log(result);
    console.log(arr);
  };
  xorOperation(5,0)
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
  width: 375px;
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
