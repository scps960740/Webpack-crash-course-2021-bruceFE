import './index.css'

const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click', function () {
  const a = parseInt(num.innerText, 10)
  num.innerText = a + 1
})

// TODO del
console.log('')

class Test {
  #a = 1
}

const tt = new Test()
// TODO del
console.log('tt.a', tt.a)