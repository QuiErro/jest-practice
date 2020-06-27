<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span data-test="list-count" class="count">{{list.length}}</span>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="list-item"
        class="item"
        @click="() => changeItemStatus(index)"
      >
        <input
          class="user-input"
          v-if="item.status === 'input'"
          data-test="list-input"
          :value="item.value"
          @blur="() => resetItemStatus(index)"
          @change="e => handleItemChange(e.target.value, index)"
        />
        <span v-else>{{item.value}}</span>
        <span
          data-test="delete-button"
          @click="() => deleteTodoItem(index)"
          class="delete"
        >
          -
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'UndoList',
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapMutations(['deleteTodoItem', 'changeItemStatus', 'resetItemStatus', 'changeItemValue']),
    handleItemChange (value, index) {
      this.changeItemValue({
        value,
        index
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .undolist{
    margin: 0 auto;
    width: 600px;
  }
  .title{
    margin: 10px 0;
    line-height: 30px;
    font-size: 24px;
    font-weight: bold;
  }
  .count{
    display: block;
    float: right;
    margin-top: 5px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 12px;
    color: #000;
  }
  .list{
    list-style-type: none;
  }
  .item{
    margin-bottom: 10px;
    line-height: 32px;
    font-size: 14px;
    background: #fff;
    border-left: 5px solid #629a9a;
    border-radius: 3px;
    text-indent: 10px;
  }
  .delete{
    display: block;
    float: right;
    margin-top: 5px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 12px;
    color: #000;
    text-indent: 0;
    cursor: pointer;
  }
  .user-input{
    width: 460px;
    height: 22px;
    text-indent: 10px;
  }
</style>
