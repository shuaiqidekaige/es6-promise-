﻿问题1: 
      结果:  1   2    3

问题2: 
      结果:  1   2 


问题3: 
      finally含义:  最终执行, 不管promise是成功还是失败，最终都会执行finally,并且保留之前成功或失败的返回值 最为下一次then中的接收的数据

      实现:  Promise.prototype.finally = function(fn) {
                 return this.then(function(value) {
		          fn()
                     return value;
                 }, function(reason) {
		         fn();
                     throw reason;
                 })
            }



问题4:  async、await 优缺点
优点: async、await基于 generator+co的思想  将异步代码写成同步代码的形式，便于维护，查看， 完美解决回调地狱，相对于promise的then来说，更加同步化代码，而promise.then数量 多起来反而不易查看和维护，另外asnc，await可以在使用try catch捕获错误。
缺点: 需要通过babel编译,编译后的代码数量多，很臃肿。

问题5:  2

问题6:  浏览器事件环中,promise属于微任务. 进入代码时，先执行同步代码，结束后 进入异步代码执行， 异步代码分为宏任务和微任务, 同步代码执行结束后，先清空微任务队列，所以如果promise存在，先执行promise(代码执行顺序,依次将promise放入微任务队列执行)

问题7:  promise理解： promise是一个处理异步的手段，工具。promise本身并不是异步，其本身是一个同步,promise.then才是真正处理异步的地方.