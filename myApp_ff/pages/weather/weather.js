Page({

  /**
   * 页面的初始数据
   */
  data: {
      inpVal:"请输入城市..",
      cityName: "北京",
      currentTime: "星期天 2018-02-02",
      wendu: "17°",
      futureData: [],
      imgSrc: "http://api.map.baidu.com/images/weather/day/qing.png"
  },

  inpFocus:function(){
    this.setData({
      inpVal: ""
    })
  },
  inpEvent:function(event){
      
      this.setData({
        inpVal:event.detail.value
      })
   
  },
 linkTo:function(){
   
   var cityName = this.data.inpVal;

   if (cityName == undefined || cityName == "请输入城市.." || cityName.length ==0　){
         return false;
   }
   console.log(cityName)
    var that = this ;
   // console.log(that)
    wx.request({
                  //仅为示例，并非真实的接口地址
                  // url: 'http://www.sojson.com/open/api/weather/json.shtml?city=' + that.data.inpVal, 
                  url: "http://api.map.baidu.com/telematics/v3/weather",
                  data: {
                    location: cityName || "",
                    output: "json",
                    ak: "rOxVAiTE768wol49rGdOoelc11EojPvE"
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success: function (res) {
                    console.log(res)
                   // console.log(that.data.futureData)
                    that.setData({
                   
                      imgSrc: res.data.results[0].weather_data[0].nightPictureUrl,
                      cityName: res.data.results[0].currentCity,
                      currentTime: res.data.results[0].weather_data[0].date,
                      wendu: res.data.results[0].weather_data[0].temperature,
                      futureData: res.data.results[0].weather_data
                 
                    })

                    //  console.log(that.data)
                     var dataStr = "?imgSrc=" + that.data.imgSrc + "&cityName=" + that.data.cityName + "&currentTime=" + that.data.currentTime + "&wendu=" + that.data.wendu + "&futureData=" + JSON.stringify(that.data.futureData) 

                      wx.navigateTo({
                        url: '../list/list' + dataStr
                        })
                    
                  }
  })





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