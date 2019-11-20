const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
let mnemonic;
try {
  mnemonic = fs.readFileSync(".secret").toString().trim();
} catch (e) {
  mnemonic = 'INVALID';
}

module.exports = {
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co/1.1.0'),
      network_id: 31,
      gasPrice: 6000000000,
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co'),
      network_id: 30,
      gasPrice: 60000000,
    },
  },
};
