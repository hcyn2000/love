Page({
  data: {
    content: '',
    text1: '',
    text2: '',
    text3:'',
    activeNames: ['1'],
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onLoad: function () {
    let that = this
    wx.cloud.callFunction({
      name: "getlist",
      data: {
        value: this.data.value
      },
      success(res) {
        console.log(res);
        that.setData({
          content: res.result.data[0].content,
          text1: res.result.data[2].content,
          text2: res.result.data[1].content,
          text3: res.result.data[3].content,
        })
      }
    })
  },

});