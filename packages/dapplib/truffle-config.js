require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad grace sleep broken slender'; 
let testAccounts = [
"0xe63daeb163337c6edc98f5c073d181b7fa9b80e4b0e5d84a1d228adb5313e170",
"0xa0d373cb273f3ffa4b6e2cc70ad765abc7ba0f033b836c2ccb23b790d3edc591",
"0x6df18604dff6a8bfb2a190a66699ad1847a1ad5aef946866561e5e940054e7fd",
"0x4770b4d37b55da60988c15cffe77e90a10c7f49562a3c52d5b95d320cade448e",
"0x30e2d74f5fac37f53b5fcc7afdde28925ed4c5792f16c1abea5f082355311c5c",
"0x53f5ec8d226c274bc0437560d20e9206d36ddc76a1f155908ffd9b697cb0aca9",
"0x577744c727f51f550cea78715f87836859ba3f12783a898827089a3561e20863",
"0xfd9f253716a1190f8e29ae15fad5b71d6e3d322b6c374ec81c539b0853c57ddc",
"0xdfd14401f9ac747d11d98e5db3dd644b511c822367bcc66b8f5722b5f30f4d27",
"0x45b13821c1fedb8e371db908ae162af39057f7b5410681a2ab5dc22c068285a1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


