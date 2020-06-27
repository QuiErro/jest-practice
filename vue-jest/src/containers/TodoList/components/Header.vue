<template>
  <div class='header'>
    <div class='header-content'>
      TodoList
      <input
        class='header-input'
        data-test='header-input'
        v-model='inputValue'
        @keyup.enter='addTodoItem'
        placeholder='Add TodoItem'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
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
