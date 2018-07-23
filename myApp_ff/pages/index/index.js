Page({

  /**
   * 页面的初始数据
   */
  data: {
      inpVal:"",
      list:[
        {
          title:"昨天下雨了。",
          date:"2017.1.31 12:00:00"
        },
        {
          title: "今天不下雨。",
          date: "2017.2.31 12:00:00"
        },
        {
          title: "明天会下雨吗？",
          date: "2017.3.31 12:00:00"
        }

      ]
  },
  myInp:function(event){
    // event  事件对象 
    // 设置 全局data数据
      this.setData({
        // data 下inpVal 字段
        // event.detail.value 监听输入变化的值
        inpVal: event.detail.value
      })
 
  },
  clickEvent:function(){

      console.log(this.data.inpVal)
      var  that = this;
                    wx.request({
                      //仅为示例，并非真实的接口地址
                      // url: 'http://www.sojson.com/open/api/weather/json.shtml?city=' + that.data.inpVal, 
                      url:"http://api.map.baidu.com/telematics/v3/weather",
                      data: {
                        location: that.data.inpVal || "",
                        output: "json",
                        ak: "rOxVAiTE768wol49rGdOoelc11EojPvE"
                      },
                      header: {
                        'content-type': 'application/json' // 默认值
                      },
                      success: function (res) {
                        console.log(res.data)
                      }
          })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({

    })


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