<template>
<div class="ErrorLoad">
  <h2>Произошла ошибка при подгрузке</h2>
  <button @click="$emit('update', true)" >Повторить</button>
</div>
</template>

<style lang="less">
@import "~assets/css/themes/default.less";
.ErrorLoad {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 71.5px auto;
  width: 100%;
  h2 {
    font-size: 14px;
    color: #D50000;
  }
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
