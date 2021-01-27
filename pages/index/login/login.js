// pages/index/login/login.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    passworld:''
  },
  handleVerificationCode(e){
    console.log(e.detail.value)
    let that=this
    that.setData({
      name:e.detail.value,
      // passworld:e.detail.value
    }
    )
  },
  handleNewChanges(e){
    console.log(e.detail.value)
    let that=this
    that.setData({
      // name:e.detail.value,
      passworld:e.detail.value
    }
    )
  },
  toRegist(){
    wx.navigateTo({
      url: '/pages/index/regist/regist',
    })
  },
  submit(){
    // console.log(e)
    db.collection('todos').where({
      name:this.data.name
    }).get(
    //   {
    //   success: function(res) {
    //     // res.data 是包含以上定义的两条记录的数组
    //     console.log(res.data[0].passworld)
    //     let pass=res.data[0].passworld
    //     let passworld=this.data.passworld
    //     console.log('passworld',passworld)
    //     if(pass !==passworl){
    //       wx.showToast({
    //         title: '密码不正确',
    //       })
    //     }
    //   }
    // }
    ).then(res=>{
      console.log(res.data[0])
      wx.setStorageSync('name',res.data[0].name)
      let pass=res.data[0].passworld
      let passworld=this.data.passworld
        console.log('passworld',passworld)
        if(pass !==passworld){
          wx.showToast({
            title: '密码不正确',
            icon:'none'
          })
        }else{
          wx.showToast({
            title: '登录成功',
            success:()=>{
              wx.switchTab({
                url: '/pages/index/my/my',
              })
            }
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