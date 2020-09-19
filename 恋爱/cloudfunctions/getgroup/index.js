// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "wechat-qx0fb" //环境id

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event);
  // 连通数据库
  const userInfo = event.userInfo
  const value = event.value
  return await db.collection("group").where({
    name: value
  }).get()

}