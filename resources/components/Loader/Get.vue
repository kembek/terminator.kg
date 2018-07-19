<template>
<div class="GetLoad">
  <button @click="$emit('update', true)" rel="next" >Загрузить ещё</button>
</div>
</template>

<style lang="less">
@import "~assets/css/themes/default.less";
.GetLoad {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 71.5px auto;
  width: 100%;
  button {
    border: none;
    color: white;
    background-color: transparent;
    border: solid 1px @color-text;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
    margin: 10px 0;
    &:hover {
    border: solid 1px @color-dark;
    // background-color: ;
    }
  }
}
</style>
