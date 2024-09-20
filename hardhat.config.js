require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x8a68ff29ed0e48582f187770cd20d7896aed4a82f60f3b65385b5e0e685aa573`],
    },
  },
};
