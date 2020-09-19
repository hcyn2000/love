Page({
  data: {
    text1: '',
    text2:'',
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
      
          text1: res.result.data[6].content,
          text2: res.result.data[5].content
        
        })
      }
    })
  },

});