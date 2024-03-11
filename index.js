const getCryptoPrice = require('crypto-price-checker-oooooyoung');

export default function () {
    return getCryptoPrice('BTC');
}