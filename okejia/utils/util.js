const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('/') 
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//判断是否为纯粹对象
function isPlainObject(obj){
    if(!obj || obj.toString() !== "[object Object]" || obj.nodeType || obj.setInterval){
        return false;
    }
    if(obj.constructor && !obj.hasOwnProperty("constructor") && !obj.constructor.prototype.hasOwnProperty("isPrototypeOf")){
        return false;
    }
    for(var key in obj){}
    return key === undefined || obj.hasOwnProperty(key);
}
function cloneObj(obj){
    if(!isPlainObject(obj)){ return false; }
    return JSON.parse(JSON.stringify(obj));
}

//md5&base64
var md5 = require('md5.min.js'),
    base64 = require('base64.min.js'),
    sign = function(data) {
        var _data = cloneObj(data);
        _data['\x74\x6f\x6b\x65\x6e'] = base64.decode(getApp()['\x5f\x74']);
        return md5(JSON.stringify(_data));
    },
    key = function(data) {
        if(!isPlainObject(data)){ return false; }
        data.timestamp = parseInt(new Date().getTime().toString().substr(0,10));
        data.sign = sign(data);
        return {
            key: base64.encode(JSON.stringify(data))
        };
    }
    
//正则判断
function Regular(str, reg) {
  if (reg.test(str))
    return true;
  return false;
}

//是否为中文
function IsChinese(str) {
  var reg = /^[\u0391-\uFFE5]+$/;
  return Regular(str, reg);
}
//去左右空格;
function trim(s) {
  return s.replace(/(^\s*)|(\s*$)/g, "");
}

module.exports = {
    formatTime: formatTime,
    md5: md5,
    base64: base64,
    key: key,
}