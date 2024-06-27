# payment_node

## 參考文件

1. [綠界 全方位(All In One)金流介接Node.js ](https://github.com/ECPay/ECPayAIO_Node.js/)
2. [綠界金流串接](https://medium.com/@94jillian/%E7%B6%A0%E7%95%8C%E9%87%91%E6%B5%81%E4%B8%B2%E6%8E%A5-express-node-js-mongodb-atlas-%E4%B8%8D%E7%94%A8%E7%B6%A0%E7%95%8Csdk-%E5%9C%9F%E6%B3%95%E7%85%89%E9%8B%BC%E6%8E%A5%E8%B5%B7%E4%BE%86-731ac2d475af)



## Customize configuration

### Project Setup

```sh
npm install
```

### Project service start
```sh
npm run dev
```

### 操作流程與網址進入點

1. /checkout-outdoor 確認付款
   1. 透過後端送出金流訂單編號及付款資訊
   2. 金流介接Node.js傳回form
   3. 透過前端將form表單innery在HTML中
   4. 觸發submit將表單傳送給綠界
   5. 轉指到綠界頁面
2. 



##  綠界金流測試介接資訊和注意事項
1. `.env`中的MERCHANTID, HASHKEY, HASHIV需要輸入什麼?
  [測試環境資料](https://developers.ecpay.com.tw/?p=2856)
  特店測試資料： 模擬銀行3D驗證

     - 特店編號(MerchantID)
     - 串接金鑰HashKey
     - 串接金鑰HashIV
2. 回來的網址需要有domain
