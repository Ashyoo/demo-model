import './index.less'

export default class Loading {
  constructor({ type, loadlingid }) {
    this.type = 1
    this.loading = null
    this.loadlingId = loadlingid
  }

  /**
   * showLoading
   * @param {*} isMask(是否有遮罩层，默认：false)
   * @param {*} isHideMask(点击遮罩层是否关闭弹窗，默认：false)
   */
  showLoading({ type, isMask, isHideMask }) {
    this.createLoadling(type)
    if (isMask === true) {
      this.loading.className = 'loading-wrap loading-mask'
    }
    if (isHideMask === true) {
      this.loading.onclick = () => {
        this.hideLoadling()
      }
    }
  }

  // hideLoading
  hideLoadling() {
    document.body.removeChild(this.loading)
  }

  /**
   * create loadling
   */
  createLoadling(type, loadingBox) {
    if (!document.getElementById(this.loadlingId)) {
      this.loading = document.createElement('div')
      this.loading.id = this.loadlingId
      this.loading.className = 'loading-wrap'
      this.loading.innerHTML = this.htmlLoading(type, loadingBox)
      document.body.appendChild(this.loading)
    } else {
      this.loading = document.getElementById(this.loadlingId)
    }
  }

  htmlLoading(type, loadingBox) {
    if (type === 1) {
      return (loadingBox = `<div class="ball-clip-rotate"></div>`)
    } else if (type === 2) {
      return (loadingBox = `
      <div class="bounce bounce1"></div>
      <div class="bounce bounce2"></div>
      <div class="bounce bounce3"></div>
      `)
    }
  }
}
