module.exports = function(source){
  const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2019')
  return `export default ${json}`
}