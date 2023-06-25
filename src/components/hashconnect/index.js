import { HashConnect } from "hashconnect";
import {
  createGoalAmount,
  createInterestRate,
} from "./../DashboardComponents/CreatePoolModal";
import {
  ContractId,
  ContractExecuteTransaction,
  AccountId,
  ContractCallQuery,
  PrivateKey,
  Client,
  ContractFunctionParameters,
} from "@hashgraph/sdk";
let hashconnect = new HashConnect();

const contractId = ContractId.fromString("0.0.14978939");
const operatorId = "0.0.14176487";
const operatorKey =
  "302e020100300506032b65700422042074b02c87eb32e0bfc9ea4bb0e70461ee07b8c2692fcd79e5e58b001a2ee6e743";
const client = Client.forTestnet().setOperator(
  AccountId.fromString(operatorId),
  PrivateKey.fromString(operatorKey)
);

const keepData = {
  topic: "",
  pairingString: "",
  privateKey: "",
  pairedWalletData: "",
  pairedAccount: [],
  accountId: "",
};

let appMetadata = {
  name: "LoanLink",
  description: "Decentralized Loan application",
  icon: "https://loanlink.vercel.app/static/media/LoanLink.f07dc3a24e1f0166e13a387e2963f0a7.svg",
};

let initData;

export const pairHashpack = async () => {
  initData = await hashconnect.init(appMetadata, "testnet", false);
  keepData.privateKey = initData.privKey;

  keepData.topic = await hashconnect.connect();
  console.log(`Topic: ${keepData.topic}`);

  keepData.pairingString = hashconnect.generatePairingString(
    keepData.topic,
    "testnet",
    false
  );
  const result = hashconnect.findLocalWallets();
  console.log(result + "result");

  hashconnect.connectToLocalWallet(keepData.pairingString);

  hashconnect.pairingEvent.once((pairingData) => {
    pairingData.accountIds.forEach((id) => {
      keepData.accountId = id;
      console.log(`Account ID: ${keepData.accountId}`);
      console.log(`Contract ID: ${contractId}`);

      const accountId = document.getElementById("accountId");
      accountId.innerHTML = pairingData.accountIds[0];
      console.log(pairingData.accountIds[0]);
    });
  });
  console.log(keepData);
  return keepData;
};

export const contractSigning = async () => {
  try {
    const provider = hashconnect.getProvider(
      "testnet",
      keepData.topic,
      keepData.accountId
    );
    console.log(keepData.accountId);
    const signer = hashconnect.getSigner(provider);

    const sendHbarTx = await new ContractExecuteTransaction()
      .setContractId(contractId)
      .setGas(100000)
      .setPayableAmount(10)
      .setFunction("sendMoney")
      .freezeWithSigner(signer);

    await sendHbarTx.executeWithSigner(signer);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const checkContractBalance = async () => {
  try {
    const provider = hashconnect.getProvider(
      "testnet",
      keepData.topic,
      keepData.accountId
    );
    const signer = hashconnect.getSigner(provider);
    const queryTx = new ContractCallQuery()
      .setContractId(contractId)
      .setGas(100000)
      .setFunction("viewBalance");

    const response = await queryTx.execute(client);
    const balance = response.getUint256(0);

    console.log(`Balance: ${balance}`);
  } catch (error) {
    console.log(error);
  }
};

//create pool
export let createPoolStatus;
export const createPool = async (createGoalAmount, createInterestRate) => {
  try {
    const provider = hashconnect.getProvider(
      "testnet",
      keepData.topic,
      keepData.accountId
    );
    console.log(keepData.accountId);
    const signer = hashconnect.getSigner(provider);

    const creatPoolTx = new ContractExecuteTransaction()
      .setContractId(contractId)
      .setGas(100000)
      .setFunction(
        "createPool",
        new ContractFunctionParameters()
          .addUint256(createGoalAmount)
          .addUint256(createInterestRate)
      );
    // .freezeWithSigner(signer);

    const createPoolSubmit = await creatPoolTx.execute(client);
    const createPoolRx = await createPoolSubmit.getReceipt(client);
    createPoolStatus = createPoolRx.status;
    console.log(`- Contract function call status: ${createPoolStatus} \n`);
    return createPoolStatus;
  } catch (error) {
    console.log(createGoalAmount, createInterestRate);
    console.log(error);
    alert(error);
  }
};

export const openHashpack = async () => {
  initData = await hashconnect.init(appMetadata, "testnet", false);
  keepData.privateKey = initData.privKey;

  keepData.topic = await hashconnect.connect();
  console.log(`Topic: ${keepData.topic}`);

  keepData.pairingString = hashconnect.generatePairingString(
    keepData.topic,
    "testnet",
    false
  );
  const result = hashconnect.findLocalWallets();
  console.log(result + "result");

  hashconnect.connectToLocalWallet(keepData.pairingString);

  hashconnect.pairingEvent.once((pairingData) => {
    pairingData.accountIds.forEach((id) => {
      keepData.accountId = id;
      console.log(`Account ID: ${keepData.accountId}`);
      console.log(`Contract ID: ${contractId}`);
    });
  });
  console.log(keepData);
  return keepData;
};
