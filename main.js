function createMultiplyTable(start, end) {
  if(isValid(start, end)) {
    return createMultiplyStr(start, end)
  }
  return null;
}

function isValid(start, end) {
  if(start > end || start > 1000 || end > 1000 || start < 0 || end < 0) {
    return false
  }
  return true
}

function createMultiplyStr(start, end) {
  let tableStr = "";
  for(let i = start, j = start; j <= end; j++) {
    if(j != end) {
      tableStr = tableStr + createMultiplyLineStr(i, j) + "\n"
    } else {
      tableStr = tableStr + createMultiplyLineStr(i, j)
    }
  }
  return tableStr
}

function createMultiplyLineStr(start, end) {
  let lineStr = "";
  for(let i = start, j = end; i <= j; i++) {
    if(i != j) {
      lineStr = `${lineStr}${i}*${j}=${i*j}\t`
    } else {
      lineStr = `${lineStr}${i}*${j}=${i*j}`
    }
    
  }
  return lineStr;
}

module.exports = {
  createMultiplyTable,
};