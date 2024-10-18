const xrpl = require("xrpl");
async function main() {
  const client = new xrpl.Client("wss://s2.ripple.com:51234/");
  await client.connect();

  const response = await client.request({
    command: "account_info",
    account: "rQDKjHYX8tytLNJYY1rkVeqDqRFP1Mxaae",
    ledger_index: "validated",
  });
  console.log(response);

  await client.disconnect();
}
main();

