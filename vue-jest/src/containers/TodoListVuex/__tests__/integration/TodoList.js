import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../TodoList'
import store from '../../../../store'

it(`
  1. 用户会在 header 输入框输入内容
  2. 用户会点击回车按钮
  3. 列表项应该增加用户输入内容的列表项
  4. 输入框内容清空
  5. 用户点击列表某一项，显示可修改的输入框
  6. 用户修改列表输入框的值，焦点移开后，列表项的值改变
  7. 用户点击删除按钮后，列表减少对应的那项
  `, () => {
  const wrapper = mount(TodoList, { store })
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)

  const content = '123'
  inputElem.setValue(content)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')

  const listItems = findTestWrapper(wrapper, 'list-item')
  const listItem = listItems.at(0)
  expect(listItems.length).toBe(1)
  expect(listItem.text()).toContain(content)
  expect(inputElem.element.value).toBe('')

  listItem.trigger('click')
  const listInputElems = findTestWrapper(wrapper, 'list-input')
  expect(listInputElems.length).toBe(1)

  const listInputElem = listInputElems.at(0)
  const newContent = '456'
  listInputElem.setValue(newContent)
  listInputElem.trigger('change')
  listInputElem.trigger('blur')
  expect(listItem.text()).toContain(newContent)

  const deleteBtn = findTestWrapper(wrapper, 'delete-button').at(0)
  deleteBtn.trigger('click')
  expect(listItems.length).toBe(0)
})
