import { log } from './log'

// promise
function add10(a, callback){
  setTimeout(()=> callback(), 1000)
}

add10(5, res => {
  log(res);
})

log(add10);