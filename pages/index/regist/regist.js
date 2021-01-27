// pages/index/regist/regist.js
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
  submit(){
    wx.navigateTo({
      url: '/pages/index/login/login',
    })
  },
  toRegist(){
    if(this.data.name==''){
      wx.showToast({
        title: '请先输入用户名',
        icon:none
      })
    }else if(this.data.passworld==''){
      wx.showToast({
        title: '请输入密码',
        icon:none
      })
    }else{
      db.collection('todos').add({
        data:{
          name:this.data.name,
          passworld:this.data.passworld
        }
      }).then(res=>{
        wx.showToast({
          title: '注册成功'
        })
        console.log('成功',res)
      })
    }
    
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