// import { HashConnect } from "hashconnect";

// let hashconnect = new HashConnect();

// let appMetadata = {
//   name: "LoanLink",
//   description: "Decentralized Loan application",
//   icon: "https://absolute.url/to/icon.png",
// };

// let initData;

// export const pairHashpack = async () => {
//   initData = await hashconnect.init(appMetadata, "testnet", false);

//   hashconnect.foundExtensionEvent.once((walletMetadata) => {
//     console.log(walletMetadata);
//     hashconnect.connectToLocalWallet(initData.pairingString, walletMetadata);
//   });

//   hashconnect.pairingEvent.once((pairingData) => {
//     console.log("wallet paired");
//     console.log(pairingData);
//     console.log("___________________");

//     const accountId = document.getElementById("accountId");
//     accountId.innerHTML = pairingData.accountIds[0];
//     console.log(pairingData.accountIds[0]);
//   });

//   return initData;
// };

import { HashConnect } from "hashconnect";
import {
  ContractId,
  ContractExecuteTransaction,
  AccountId,
  TransferTransaction,
} from "@hashgraph/sdk";

let hashconnect = new HashConnect();

const contractId = ContractId.fromString("0.0.14959765");
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

  let state = await hashconnect.connect();
  keepData.topic = state.topic;
  console.log(`Topic: ${keepData.topic}`);

  keepData.pairingString = hashconnect.generatePairingString(
    state,
    "testnet",
    false
  );
  const result = hashconnect.findLocalWallets();
  console.log(result + "result");

  hashconnect.connectToLocalWallet(keepData.pairingString);

  hashconnect.pairingEvent.once((pairingData) => {
    pairingData.accountIds.forEach((id) => {
      keepData.accountId = id;
      console.log(keepData.accountId);

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
    const signer = hashconnect.getSigner(provider);

    const transaction = await new TransferTransaction()
      .addHbarTransfer(AccountId.fromString(keepData.accountId), -1)
      .addHbarTransfer(AccountId.fromString(keepData.accountId), 1)
      .freezeWithSigner(signer);

    const response = await transaction.executeWithSigner(signer);
    console.log(response);

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

//Please don't delete these line i commented below. I'm working on them

// export const authenticateUser = async () => {
//   const payload = {
//     url: window.location.hostname,
//     data: {
//       token: "fufhr9e84hf9w8fehw9e8fhwo9e8fw938fw3o98fhjw3of",
//     },
//   };

//   const hashconnectData = JSON.parse(window.localStorage.hashconnectData);
//   console.log(hashconnectData);

//   const res = await fetch("http://localhost:8443/sendAuth");
//   const { signingData } = await res.json();

//   const serverSigAsArr = Object.values(signingData.serverSignature);
//   const serverSigAsBuffer = Buffer.from(serverSigAsArr);

//   let auth = await hashconnect.authenticate(
//     hashconnectData.topic,
//     hashconnectData.pairingData[0].accountIds[0],
//     signingData.serverSigningAccount,
//     serverSigAsBuffer,
//     payload
//   );

//   const receiveAuthData = {
//     signingAccount: hashconnectData.pairingData[0].accountIds[0],
//     auth,
//   };

//   const res2 = await fetch("http://localhost:8443/getAuth", {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(receiveAuthData),
//   });

//   const { authMessage } = await res2.json();

//   console.log(authMessage);
// };
