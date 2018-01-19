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

// successModel
const showSuccess = msg => {
  const htmlSuccess = `<img src="./images/s.jpg" alt="fail" /><p>${msg}</p>`
  model.showModel(htmlSuccess, true)
}

// failModel
const showFail = msg => {
  const htmlFail = `<img src="./images/f.jpg" alt="fail" /><p>${msg}</p>`
  model.showModel(htmlFail)
}

// 初始化页面 loading
model.showLoading()
setTimeout(() => {
  model.hideLoadling()
}, 1500)

// showloading
document.getElementById('btnShowLoading').onclick = function() {
  model.showLoading()
  setTimeout(() => {
    model.hideLoadling()
  }, 1500)
}

// btnShowSuccess
document.getElementById('btnShowSuccess').onclick = function() {
  showSuccess('success')
}

// btnShowFail
document.getElementById('btnShowFail').onclick = function() {
  showFail('fail')
}
