const db = wx.cloud.database()
let name="王五"
let age=20
const app = getApp()
Page({
  data: {
    
  },
  formzhang(e){
    console.log(e.detail.value)
  },
  formpasswrod(e){
    console.log(e.detail.value)
  },
  // 往数据库插入
  toregint(){
    db.collection('todos').add({
      data:{
        name:name,
        age:age
      }
    }).then(res=>{
      console.log('成功',res)
    })
  },
  chaxun(){
  //  db.collection('todos').get({
  //    success(res){
  //      console.log('获取成功',res)
  //    }
  //  })
  db.collection('todos').where({
    age:20
  }).get({
    success: function(res) {
      // res.data 是包含以上定义的两条记录的数组
      console.log(res.data)
    }
  })
  },
  gengxin(){
    db.collection('todos').update({
      data:{
        count:1
      },
      success(res){
        console.log('更新成功',res)
      }
    })
  },
  onLoad() {
  
  }
})
