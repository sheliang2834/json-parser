function Json() {}

Json.prototype.stringify = function (obj) {
  return toString(obj);
};

Json.prototype.parse = function (str) {
  return toParse(str);
};
// to JSON stringify
function toString(obj) {
  let str = "";
  switch (getType(obj)) {
    case "array":
      str += arr2String(obj);
      break;
    case "string":
      str += String2String(obj);
      break;
    case "number":
      str += num2String(obj);
      break;
    case "boolean":
      str += bool2String(obj);
      break;
    case "object":
      str += obj2String(obj);
      break;
    case "function":
      //   str += function2String(obj);
      break;
    case "undefined":
      //   str += "undefined";
      break;
    case "null":
      str += "null";
      break;
    case "set":
      str += obj2String(obj);
      break;
  }
  return str;
}
// to JSON parse
function toParse(str) {
  let res;
  try {
    return (res = eval(`(${str})`));
  } catch (error) {
    new Error(error);
  }
}
// string to string
function String2String(str) {
  return `"${str.toString()}"`;
}
// number to string
function num2String(num) {
  return Number(num);
}
// boolean to string
function bool2String(bool) {
  return !!bool;
}
// object to string
function obj2String(obj) {
  let str = "{";
  const ketsArr = Object.keys(obj);
  for (let i = 0, len = ketsArr.length; i < len; i++) {
    const key = ketsArr[i];
    const type = getType(obj[key]);
    if (type !== "undefined" && type !== "function") {
      str += `"${key}":${toString(obj[key])}`;
      i !== len - 1 && (str += ",");
    }
  }

  return str + "}";
}
// arr to String
function arr2String(arr) {
  let str = "[";
  for (let i = 0, len = arr.length; i < len; i++) {
    const type = getType(arr[i]);
    if (type !== "function") {
      if (type === "undefined") {
        str += "null";
      } else {
        str += toString(arr[i]);
      }
      i !== len - 1 && (str += ",");
    }
  }
  return str + "]";
}
// function toString
// function function2String(func) {
//   return `"${func.toString()}"`;
// }
// 获取字段类型
function getType(data) {
  const type = Object.prototype.toString.call(data);
  return type.substring(8, type.length - 1).toLowerCase();
}

module.exports = new Json();
