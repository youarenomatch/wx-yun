// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env: 'question-2gxriwruaf4595e3'
    })
    
  },
  globalData: {
    userInfo: null
  }
})
