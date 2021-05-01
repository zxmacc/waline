const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    '习近平',
    '毛泽东',
    '快递',
    '空包',
    '代发',
    '单号'
  ],
  disallowIPList: [
    '220.173.125.83',
    '222.83.150.92',
    '222.217.145.185',
    '171.106.203.19',
    '113.14.130.128',
    '117.136.14.181',
    '117.183.0.241'
  ],
  secureDomains: [
    'www.zxmacc.cf',
    'blog.zxmacc.cf',
    'zxmacc.github.io'
  ]
});
