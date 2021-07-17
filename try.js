const translate = require("@vitalets/google-translate-api");
// console.log(translate);

// async function translatefn(msg, ln){

// }

// translate("helo I amd a boy", { to: "es" })
//   .then((res) => {
//     console.log(res.from.language.didYouMean);

//     console.log(res.from.language.iso);
//     console.log(res.text);
//     console.log(res.from.text.autoCorrected);
//     console.log(res.from.text.didYouMean);
//     console.log(res.from.text.value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const token = require("@vitalets/google-translate-token");

// token.get("Hello people").then(console.log);
// => { name: 'tk', value: '159402.284291' }
const tunnel = require("tunnel");
translate(
  "Ik spreek Engels",
  { to: "en" },
  {
    agent: tunnel.httpsOverHttp({
      proxy: {
        host: "127.0.0.1",
        proxyAuth: "user:pass",
        port: "8080",
        headers: {
          "User-Agent": "Node",
        },
      },
    }),
  }
)
  .then((res) => {
    console.log(res.text);
  })
  .catch((err) => {
    console.error(err);
  });
