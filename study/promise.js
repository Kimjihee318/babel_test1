import { log } from './log'

// promise
function add10(a, callback){
  setTimeout(() => callback(a + 10), 1000)
}

add10(5, res => {
  log(res);
})
