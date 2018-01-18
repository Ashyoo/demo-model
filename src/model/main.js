// 先引入样式
import './css/style.less'

// 引入依赖

import Model from '../utils/model/index'

import './images/s.jpg'
import './images/f.jpg'

// 弹出框
const model = new Model({
  maskid: 'maskBox',
  msgid: 'msgBox',
  loadlingid: 'loadingBox'
})

// 初始化页面 loading
model.showLoading()
setTimeout(() => {
  model.hideLoadling()
}, 1000)

// showloading
document.getElementById('btnShowLoading').onclick = function() {
  model.showLoading()
}

// 成功状态
document.getElementById('btnShowSuccess').onclick = function() {
  model.showLoading()
  setTimeout(() => {
    model.hideLoadling()
    const htmlSuccess = '<img src="./images/s.jpg" alt="fail" /><p>success</p>'
    model.showSuccess(htmlSuccess)
  }, 1000)
}

// 失败状态
document.getElementById('btnShowFail').onclick = function() {
  model.showLoading()
  setTimeout(() => {
    model.hideLoadling()
    const htmlFail = '<img src="./images/f.jpg" alt="fail" /><p>fail</p>'
    model.showFail(htmlFail)
  }, 1000)
}
