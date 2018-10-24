let path = require('path');
let fs = require('fs');

function Module(id) {
    this.id = id;
    this.exports = {};
}
// 扩展名
Module._extensions = {
    '.js'() {

    },
    '.json'(module) {
        module.exports =  fs.readFileSync(module.id, 'utf8');
    }
}

// 解析文件绝对路径
Module._resolveFileName = function(filename) {
    let r = path.resolve(__dirname, filename);
    if(!path.extname(r)) {
        let extnames = Object.keys(Module._extensions);
        for (let i = 0; i < extnames.length; i++) {
            let p = r + extnames[i];
            try {
              fs.accessSync(p); 
              return p;
            } catch (e) {
              
            }
          }
    } else {

    }

}

// 加载模块
Module._loadModule = function(filename) {
    let r = Module._resolveFileName(filename);
    let module = new Module(r);
    // 加载模块
    let ext = path.extname(module.id);
    Module._extensions[ext](module);

    return module.exports;
}


function req(id) {
   return Module._loadModule(id);
}

let sj = req('./user');  // 会先找js, 再找json

console.log(sj)


