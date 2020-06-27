const undoListRes = {
  success: true,
  data: [
    {
      status: "div",
      value: "123",
    },
    {
      status: "div",
      value: "456",
    },
  ],
};

export default {
  get(url) {
    if (url === "/getUndoList.json") {
      return new Promise((resolve, reject) => {
        if (this.success) {
          resolve(undoListRes);
        } else {
          reject(new Error());
        }
      });
    }
  },
};
