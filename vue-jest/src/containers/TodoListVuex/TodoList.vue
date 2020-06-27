<template>
  <div>
    <Header />
    <UndoList />
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'

export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  }
}
</script>

<style scoped lang="stylus">

</style>
