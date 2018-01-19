// 引入样式
import './index.less'
// 引入 loading 样式
import '../loading/index.less'

export default class Model {
  constructor({ maskid, msgid, loadlingid }) {
    this.maskBox = null
    this.msgBox = null
    this.loading = null
    this.maskId = maskid
    this.msgId = msgid
    this.loadlingId = loadlingid
  }

  // showLoading
  showLoading() {
    this.createMaskBox()
    this.createLoadling()
  }

  // hideLoading
  hideLoadling() {
    document.body.removeChild(this.maskBox)
  }

  /**
   * showModel
   * isHideMask(点击遮罩层是否关闭弹窗，默认：false)
   */
  showModel(div, isHideMask) {
    this.createMaskBox()
    this.createMsgBox()
    this.msgBox.innerHTML = `${div}`
    if (isHideMask === true) {
      this.maskBox.onclick = () => {
        this.hideMask()
      }
    }
  }

  /**
   * hideMask
   */
  hideMask() {
    document.body.removeChild(this.maskBox)
  }

  /**
   * create maskBox
   */
  createMaskBox() {
    if (!document.getElementById(this.maskId)) {
      this.maskBox = document.createElement('div')
      this.maskBox.id = this.maskId
      document.body.appendChild(this.maskBox)
    } else {
      this.maskBox = document.getElementById(this.maskId)
    }
    this.maskBox.className = 'mask-box'
  }

  /**
   * create msgBox
   */
  createMsgBox() {
    if (!document.getElementById(this.msgId)) {
      this.msgBox = document.createElement('div')
      this.msgBox.className = 'msg-box'
      this.msgBox.id = this.msgId
      this.maskBox.appendChild(this.msgBox)
    } else {
      this.msgBox = document.getElementById(this.msgId)
    }
  }

  /**
   * create loadling
   */
  createLoadling() {
    if (!document.getElementById(this.loadlingId)) {
      this.loading = document.createElement('div')
      this.loading.id = this.loadlingId
      const loadingBox = `
      <div class="loading">
        <div class="bounce bounce1"></div>
        <div class="bounce bounce2"></div>
        <div class="bounce bounce3"></div>
      </div>`
      this.loading.innerHTML = loadingBox
      this.maskBox.appendChild(this.loading)
    } else {
      this.loading = document.getElementById(this.loadlingId)
    }
  }
}
