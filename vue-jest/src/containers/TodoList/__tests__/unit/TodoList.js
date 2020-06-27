import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'
import axios from '../../__mocks__/axios'

beforeEach(() => {
  axios.success = true
})

describe('TodoList 组件', () => {
  it('样式发生改变时作提示', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper).toMatchSnapshot()
  })

  it(`
    1. 用户进入页面，请求远程数据成功
    2. 列表应该展示远程返回的数据
  `, (done) => {
    const wrapper = shallowMount(TodoList)
    wrapper.vm.$nextTick(() => {
      const undoList = wrapper.vm.undoList
      expect(undoList.length).toBe(2)
      done()
    })
  })

  it(`
    1. 用户进入页面，请求远程数据失败
    2. 列表应该展示空数据，不应该挂掉
  `, (done) => {
    axios.success = false
    const wrapper = shallowMount(TodoList)
    wrapper.vm.$nextTick(() => {
      const undoList = wrapper.vm.undoList
      expect(undoList.length).toBe(0)
      done()
    })
  })

  it('handleAddUndoItem 被执行后，undoList 内容增加', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleAddUndoItem(4)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 },
      { status: 'div', value: 4 }
    ])
  })

  it('调用 UndoList，应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('handleDeleteItem 方法被调用时，UndoList 列表内容减少', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleDeleteItem(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 3 }
    ])
  })

  it('handleChangeStatus 方法被调用时，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleChangeStatus(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it('handleChangeItemValue 方法被调用时，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleChangeItemValue({
      index: 1,
      value: '444'
    })
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: '444' },
      { status: 'div', value: 3 }
    ])
  })

  it('handleResetStatus 方法被调用时，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleResetStatus()
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ])
  })
})
