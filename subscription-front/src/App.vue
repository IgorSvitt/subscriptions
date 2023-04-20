<template>
  <div class="container">
    <div class="left">
      <sub-title class="title"/>
      <sub-main  class="main"/>
    </div>
    <div class="vl"></div>
    <div class="right">
      <left-block />
    </div>
  </div>
</template>

<script>

import SubTitle from "@/components/subscription/SubTitle";
import SubMain from "@/components/subscription/SubMain";
import LeftBlock from "@/components/account/LeftBlock";
export default {
  name: 'App',
  components: {LeftBlock, SubMain, SubTitle},
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  color: #495464;
  box-sizing: border-box;
}

body{
  display: flex;
  flex-direction: column;
  background: #F4F4F2;
  margin-top: 50px;
}

.container{
  max-width: 1300px;
  flex: 1;
  margin: 0 auto;
  display: flex;
}
.left{
  width: 56%;
}

.right{
  width: 44%;
}

.vl{
  margin: 0 30px 0 120px;
  border-left: 4px solid #DADDD8;
  border-radius: 40px;
}

</style>
