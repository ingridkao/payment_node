var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const ecpay_payment = require('ecpay_aio_nodejs');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/checkout-outdoor', function(req, res) {
  res.render('checkout-outdoor', { OUTDOORKA_BACK: process.env.OUTDOORKA_BACK })
})

router.get('/checkout', function(req, res, next) {
  const html = generatePayment();
  res.render('checkout', { title: 'checkout', html});
}
)
.post('/return', function(req, res, next) {
  console.log('req.body', req.body);
  res.send('1|OK');
});

function generateShortUuid() {
  const uuid = uuidv4();
  const shortUuid = uuid.replace(/-/g, '').substring(0, 20);
  return shortUuid;
}

// 成立訂單
function generatePayment() {
  const { MERCHANTID, HASHKEY, HASHIV, HOST } = process.env;
  let date = new Date();

  let formattedDate = date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  let formattedTime = date.toLocaleTimeString('zh-TW', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const MerchantTradeNo = generateShortUuid();
  let base_param = {
    MerchantTradeNo: MerchantTradeNo, //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
    MerchantTradeDate: `${formattedDate} ${formattedTime}`, //ex: 2017/02/13 15:45:30
    TotalAmount: '100',
    TradeDesc: '測試交易描述',
    ItemName: '測試商品等',
    ReturnURL: `${HOST}/return`,
    ClientBackURL: `${HOST}/index.html`
  }

  const options = {
    "OperationMode": "Test", //Test or Production
    "MercProfile": {
      "MerchantID": MERCHANTID,
      "HashKey": HASHKEY,
      "HashIV": HASHIV
    },
    "IgnorePayment": [
      //    "Credit",
      //    "WebATM",
      //    "ATM",
      //    "CVS",
      //    "BARCODE",
      //    "AndroidPay"
      ],
    "IsProjectContractor": false
  }
  const create = new ecpay_payment(options);
  const HTML = create.payment_client.aio_check_out_all(base_param);
  // 丟一個表單
  return HTML;
}

module.exports = router;
