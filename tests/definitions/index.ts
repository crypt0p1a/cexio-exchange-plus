import RestClient from "@/rest"

const client = new RestClient("","")


async function testTradingFeeAnswerDefinition() {
  const result = await client.callPrivate("get_my_fee");
  const { tradingFee } = result.data;
}

async function test() {
  const result = await client.callPrivate("get_my_volume")
  const { period, volume, currency } = result.data;
}

async function testDoMy() {
  const result = await client.callPrivate("do_my_internal_transfer", {
    fromAccountId: "",
    toAccountId: "",
    amount: 0,
    currency: "USD",
    clientTxId: ""
  })
  const { transactionId } = result.data;
}
