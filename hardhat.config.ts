import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sonic: {
      url: "https://rpc.testnet.soniclabs.com",
      accounts: process.env.MAIN_WALLET_PRIVATEKEY ? [process.env.MAIN_WALLET_PRIVATEKEY] : []
    }
  }
};

export default config;
