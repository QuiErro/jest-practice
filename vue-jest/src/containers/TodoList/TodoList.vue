<template>
  <div>
    <Header @add="handleAddUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handleDeleteItem"
      @status="handleChangeStatus"
      @reset="handleResetStatus"
      @change="handleChangeItemValue"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import UndoList from './components/UndoList'

export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  mounted () {
    axios.get('/getUndoList.json').then(res => {
      this.undoList = res.data
    }).catch(e => {})
  },
  methods: {
    handleAddUndoItem (inputValue) {
      this.undoList.push({
        status: 'div',
        value: inputValue
      })
    },
    handleDeleteItem (index) {
      this.undoList.splice(index, 1)
    },
    handleChangeStatus (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) newList.push({ status: 'input', value: item.value })
        else newList.push({ status: 'div', value: item.value })
      })
      this.undoList = newList
    },
    handleResetStatus () {
      const newList = []
      this.undoList.forEach(item => {
        newList.push({ status: 'div', value: item.value })
      })
      this.undoList = newList
    },
    handleChangeItemValue (obj) {
      this.undoList[obj.index].value = obj.value
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
