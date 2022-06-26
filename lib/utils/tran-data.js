const qs = require('qs');
const { ydDictInstance, bdSentenceInstance } = require('./request');
const { translationBase } = require('../core/config');
const { md5String } = require('../utils/md5');

const getDictData = params => {
  return ydDictInstance.get('suggest', {
    params: {
      ver: 3.0,
      doctype: 'json',
      cache: false,
      le: 'en',
      num: 3,
      ...params
    }
  });
};
// sentence: 'https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'

const getSentenceData = data => {
  const { baidu } = translationBase;
  const md5 = md5String(baidu.appid + data.q + baidu.salt + baidu.key);

  return bdSentenceInstance.post(
    'api/trans/vip/translate',
    qs.stringify({
      from: 'auto',
      to: 'auto',
      appid: translationBase.baidu.appid,
      salt: translationBase.baidu.salt,
      sign: md5,
      ...data
    })
  );
};
module.exports = {
  getDictData,
  getSentenceData
};
