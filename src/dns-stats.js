const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The stats should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  if(domains.length===0){
    return {}
  }
 let TLD = domains.map(item => item.split('.').splice(-1).join("."));
 let dns = domains.map(item => item.split('.').splice(-2).join("."));
 let countDns = dns.length;
 let stats = new Object
 stats[`.${[...new Set(TLD)]}`]=countDns;
 stats[`.${[...new Set(dns)].map(item => item.split(".").reverse().join("."))}`]=countDns;
 let count = {};
 domains.forEach(function(i) { count[i] = (count[i]||0) + 1;});
 console.log(count)
 for(dom of domains){
  if(dns[0] != dom){
     stats[`.${dom.split('.').reverse().join('.')}`]=count[dom]
  }
 }
 
 return stats
}

getDNSStats([
   'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ] ) 
 

module.exports = {
  getDNSStats
};
