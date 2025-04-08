/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        sepolia: {
            url: "https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY",
            accounts: [process.env.PRIVATE_KEY]
        }
    }
};

