import './css/style.less'

import Loading from '../utils/loading'

const loading = new Loading({
  loadlingid: 'loading'
})

const loading1 = document.getElementById('loading1')
const loading2 = document.getElementById('loading2')
const loading3 = document.getElementById('loading3')
const loading4 = document.getElementById('loading4')
const loading5 = document.getElementById('loading5')
const loading6 = document.getElementById('loading6')
const loading7 = document.getElementById('loading7')
const loading8 = document.getElementById('loading8')
const loading9 = document.getElementById('loading9')

console.log(loading1, loading2, loading3, loading4, loading5, loading6, loading7, loading8, loading9)

loading1.onclick = function() {
  loading.showLoading({
    type: 1,
    isMask: true,
    isHideMask: true
  })
}

loading2.onclick = function() {
  loading.showLoading({
    type: 2,
    isMask: true,
    isHideMask: true
  })
}
