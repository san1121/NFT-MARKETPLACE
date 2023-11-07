require("@nomicfoundation/hardhat-toolbox");
//require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url:"https://polygon-mumbai.g.alchemy.com/v2/TXWY_aYwlebHRgtK9Av_dFbDoMwcwLMk" ,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  
};
