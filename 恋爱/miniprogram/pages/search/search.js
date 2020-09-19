// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    items: [
      { name: '间接开场' }, { name: "重新开场" }, { name: "搭讪" },
      { name: "聊天" }, { name: "聊天交流" }, { name: "升级" },
      { name: '自夸类别' }, { name: "互动类别" }, { name: "惯例" },


    ]
  },


  onChange(e) {
    console.log(e);
    this.setData({
      value: e.detail,
    });
  },
  onSearch(res) {
    console.log(res);
    Toast('搜索' + this.data.value);
  },
  onClick() {
    wx.cloud.callFunction({
      name: "getgroup",
      data: {
        value: this.data.value
      },
      success(res) {
        console.log(res);


        if (res.result.data[0].id == 1) {
          wx.navigateTo({
            url: '/pages/content1/content1',
            success: (result) => {

            },

          });
        } else if (res.result.data[0].id == 2) {
          wx.navigateTo({
            url: '/pages/content2/content2',
            success: (result) => {

            },

          });
        } else if (res.result.data[0].id == 3) {
          wx.navigateTo({
            url: '/pages/content3/content3',
            success: (result) => {

            },

          });
        } else if (res.result.data[0].id == 4) {
          wx.navigateTo({
            url: '/pages/content4/content4',
            success: (result) => {

            },

          });
        }




      }
    })
  },
  jump(e) {
    console.log(e)
    let a = e.target.dataset.id
    let items = this.data.items
    for (let i = 0; i < items.length; i++) {
      if (a == i) {
        items[a].name
      }

    }
    this.setData({
      value: items[a].name
    });


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})