var AlipayF2F = require("../..");

module.exports = {};

before(function(){
  module.exports.alipay_f2f = new AlipayF2F({
      appid: 2016073100134952,
      notifyUrl: "http://www.qq.com",
      merchantPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAq6W/oQxPlEIIL/dPNqiRXRpe8oTi8FRqCMlROWg/rxfZDY7ruVk2qn7k/p1VeH2Yr3GxJjuiBMYa+DD9HDrnhoCzmGNoFipBYiAFY9/83dlLmBCod/fXdnv5ibvDNYtW5ReS+WGKF+lslaPuFiNzWbdJGMj+SfY25RS82fZlaYVfftzNEZCyiulf8KDeShlzWVhgph3hUCP3hckO3WPdzZu2iFkuFb88oeVXR8/E9DENcNIgXNjrkxNb3RP7v1x4MbbmJOCKPTMGoRqmmlD/ebMCV5/XCmOH5UumiMwm6mF59Bb+HJ9y7/r2ep9tA7Y1koezzaxlAbxCaR2BrMVJBQIDAQABAoIBAQCPjhkdvSkVKsCkNScX5JVmk3aTSBZwv3jLDmwTIiAY9U3/6+cz5ew1XdlxJO7lzc0T9ncdLcSMT48gwf/+Szl1oVATBBh6aS6zvWokpKFcfa6eaFgttaeLHZaO3e0ebAHpqfSvAye2Ze/9mtO1ykJf502IIBmki/pPTy++7zbTr2uo6euHQsDKd12oCztqeOhNV1bsZBI+TiEIpb/9ZbQXW1mhdYlln5n+l6SrBD6qI/oHUMIsP4tXvGWsrWOrpS0IurOKoYuJE0hGIr+eJx6x5Rq9L5PsADJ1Qdh0DbUfdoobYt6Zgv6VGhhqZslMoB5U01CYyqtTKMTSOuHhNzQBAoGBAOFQiB8LbaEoAO08IUCEcjbRBTaPuYkAchqWAZwea0dvWlFDyqB1Co9vLfmrjlazw6+r/Gw86RI2rT3dm0P1dijrkNeO33LkFoK76h1LyrEbcj+5yZVUJ59agMkyx1URpuQ5N4Wl4dLimq+DmjgKtQRE2AntVTgLCBtxQ8DSUPYFAoGBAMMGJGvO34kY7M9Q/yUOqGe4aQpM98iKDopCQOPbltbAhwLHpBg9rgg2jXIjpH2mGTEonk2rqLomlLHysnpA39s8+hKdeN4q8rUDk43bOkA4iyQjISwrGeGFJ1M2hQNBixKrMtJzThh6el/DclnNlbju4lQGjwt1J6zAsTd7OHcBAoGBAIWzDOMnG+m6XDpqKO0o6sFebPKAfL8wNYVTKCdk4ZHlILoCOTXX3elZNvXleDQ4vdD7hHER/9ff/BMu8hh0iqYjirJuxGdfs3/mVDkIJYHM4JGyBE2JP23O/Ybmi+QN8nORBEJZOdSyxMmLlTLWH64lz/CsFZqI6Umnf2XnJ0WlAoGAdG++Xv9sRpYzDLP3IVDXCtX3IMdDSN/kPne/9kqsjBr2gJphRnfM5+pqGLNfCgWZFNiDaywJ2Nof/P5BwOvquyJ0y5hpCXvq3Ff+SLuS07Tuney7aXtyQEsXZ38tevwu5D6CYVOmVMcLORGfvC4aLgex6SjhTp3ryiBhrhZLaAECgYBPVgNSgPUX06ep2S820FJ6xPo9vCzEtk5XN76kLlAn9AQbT2DSl0Sanb1r0S38Zxu18k21YiAOeiXS1UZBd9/GylkLMC6eEKVatxOgw24X5qsZxX5h3no+ZTAW70CrrY40gOehaVfSkd9cCr5NEvU70iet1ePxN9LJ2PDKCVA5Lw==
-----END RSA PRIVATE KEY-----`,
      alipayPublicKey:"-----BEGIN PUBLIC KEY-----\n" + 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzkurPEiaMNwMxbOQ97sWp0l4JhFZVfolc946N8ZylCjjETau8SjE+T9t21p+SACdUjrmUTmOVfCkAp0qpD+EdY9jb3k0A4ibeUts+ZyK1us4NLp/5WsOqArQu3//iOcoEKf4lgUWf3WCGQZZ5DpTpaLOgXg8wAXbzIb4NKtJMdPqiLupRYBVBXzYmXwFepqgs3bRcHk/iuYPXjccV8CyXjq4PsQPNCLq9ToSnWty7CLUk5J1Ago2ZpZrPk2JeuTZoCGrSgUI62eCZnB0/JA4j3rvI98ONm+lAl6FN/kV4S5anewQnG6TJ6sX7Re8eqFR5uZVg+t86gtzIV2ygZTKvQIDAQAB'+
      "\n-----END PUBLIC KEY-----"
  });
})