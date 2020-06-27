<template>
  <div class='header'>
    <div class='header-content'>
      TodoList
      <input
        class='header-input'
        data-test='header-input'
        :value='inputValue'
        @input='e => changeInputValue(e.target.value)'
        @keyup.enter='handleAddTodoItem'
        placeholder='Add TodoItem'
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  props: {},
  computed: {
    ...mapState(['inputValue'])
  },
  methods: {
    ...mapMutations(['changeInputValue', 'addTodoItem']),
    handleAddTodoItem () {
      if (this.inputValue) {
        this.addTodoItem(this.inputValue)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .header{
    line-height: 60px;
    background: #333;
  }
  .header-content{
    margin: 0 auto;
    width: 600px;
    color: #fff;
    font-size: 24px;
  }
  .header-input{
    float: right;
    margin-top: 16px;
    width: 360px;
    line-height: 24px;
    outline: none;
    color: #333;
    text-indent: 10px;
  }
</style>
