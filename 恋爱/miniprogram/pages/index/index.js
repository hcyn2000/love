// miniprogram/pages/index/index.js
var app = getApp();
//声明全局变量
let proListToTop = [], menuToTop = [], MENU = 0, windowHeight, timeoutId;
Page({

  /**
   * 页面的初始数据
   */
  data: {

    scrolltop: 0,
    top: [0, 1, 2, 3],
    toview: "",
    name: "旅梦教育",
    menname: '男',
    value: '',
    activeKey: 0,
    items: [
      { listname: '搭讪', id: "love", color: "" },
      { listname: '聊天', id: "bulid", color: "" },
      { listname: '升级', id: "run", color: "" },
      { listname: '惯例', id: "place", color: "" }

    ],
    img: [
      { img: "" },
      { img: "" },
      { img: "" }
    ],
    info: [
      {
        id: "love",
        list: [
          { imageurl: "", texttitle: "趣味搭讪" },
          { imageurl: "", texttitle: "好奇开场" },
          { imageurl: "", texttitle: "间接开场" },
          { imageurl: "", texttitle: "重新开场" }
        ]
      },
      {
        id: "bulid",
        list: [
          { imageurl: "", texttitle: "聊天交流" },
          { imageurl: "", texttitle: "互动游戏" },

        ]
      },
      {
        id: "run",
        list: [
          { imageurl: "", texttitle: "自夸类别" },
          { imageurl: "", texttitle: "互动类型" },
        ]
      },
      {
        id: "place",
        list: [
          { imageurl: "", texttitle: "化解尴尬" }
        ]
      }

    ]
    // 组件fz
  },
  jumpPage(a) {
    // console.log(a);
    wx.navigateTo({
      url: "/pages/search/search",
      success: (result) => {

      },

    });
  },

  onclike(e) {
    // console.log(e);
    wx.navigateTo({
      url: '/pages/Cloud-submission/Cloud-submission',
      success: (result) => {

      },

    });
  },
  //点击内容跳转jump
  jump(res) {
    // console.log(res);
    let index = res.target.dataset.id
    if (index == 0) {
      wx.navigateTo({
        url: '/pages/content1/content1',
        success: (result) => {

        },

      });
    } else if (index == 1) {
      wx.navigateTo({
        url: '/pages/content2/content2',
        success: (result) => {

        },

      });
    } else if (index == 2) {
      wx.navigateTo({
        url: '/pages/content3/content3',
        success: (result) => {

        },

      });
    } else {
      wx.navigateTo({
        url: '/pages/content4/content4',
        success: (result) => {

        },

      });
    }


  },


  // 左侧导航栏点中右侧相应的到达所在位子
  select(e) {
    console.log(e);
    let toview = e.target.dataset.id;
    let aa = e.target.dataset.index
    let items = this.data.items
    for (let i = 0; i < items.length; i++) {
      if (aa == i) {
        items[i].color = "red"
      } else {
        items[i].color = ""
      }

    }
    this.setData({
      toview: toview,
      items: items
    })
  },
  // 右侧内容滑动实现左侧高亮
  bdscroll(res) {
    // console.log(res);
    let scrolltop = res.detail.scrollTop
    let scrollHeight = res.detail.scrollHeight
    let precent = (scrolltop / scrollHeight).toFixed(2)
    let items = this.data.items
    if (precent < 0.25) {
      items[0].color = "red"
      items[1].color = ""
      items[2].color = ""
      items[3].color = ""
    } else if (precent < 0.5 && precent > 0.25) {
      items[0].color = ""
      items[1].color = "red"
      items[2].color = ""
      items[3].color = ""
    } else if (precent < 0.75 && precent > 0.5) {
      items[0].color = ""
      items[1].color = ""
      items[2].color = "red"
      items[3].color = ""
    } else if (precent < 1 && precent > 0.75) {
      items[0].color = ""
      items[1].color = ""
      items[2].color = ""
      items[3].color = "red"
    }


    this.setData({
      items: items
    })

  },


  selectimage(e) {
    // console.log(e);
  },
  onChange(e) {

    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
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
        let a = that.data.info
        let b = that.data.img
        a[0].list[0].imageurl = res.result.data[4].FileID
        a[0].list[1].imageurl = res.result.data[5].FileID
        a[0].list[2].imageurl = res.result.data[6].FileID
        a[0].list[3].imageurl = res.result.data[3].FileID
        a[1].list[0].imageurl = res.result.data[4].FileID
        a[1].list[1].imageurl = res.result.data[5].FileID
        a[2].list[0].imageurl = res.result.data[6].FileID
        a[2].list[1].imageurl = res.result.data[8].FileID
        a[3].list[0].imageurl = res.result.data[8].FileID
        b[0].img = res.result.data[0].FileID
        b[1].img = res.result.data[1].FileID
        b[2].img = res.result.data[2].FileID

        that.setData({
          info: a,
          img: b



        })
      }
    })
  },
})