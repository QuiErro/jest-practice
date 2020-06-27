const undoListRes = {
  success: true,
  data: [{
    status: 'div',
    value: '今天要学 Vue'
  }, {
    status: 'div',
    value: '明天要学 Jest'
  }]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve, reject) => {
        if (this.success) {
          resolve(undoListRes)
        } else {
          reject(new Error())
        }
      })
    }
  }
}
