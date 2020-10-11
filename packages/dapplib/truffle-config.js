require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture street cruise situate clutch hundred light army giggle'; 
let testAccounts = [
"0xf46fb927cff1cb9d46d8403d9ea3e44086c7844b2ea80c7b1bcb4ff5a322bed9",
"0xe37cc2f5988226cff35257884933cd3305383d9b10200f34f579670311c24699",
"0x9ccfffeb1f153fb95439d8cf085075c9b5d04bc096f87fbc52a1bd70daa12c52",
"0xaa95946d4ee03e72e26d9343050a85bbc1ff946918f5e67d23b925a08b724290",
"0x7b59a6a90eb63d4aa884a7bbfe4f170ce7c2409c5202f7273d1fc54038bbc951",
"0xeb9d72edd6273af08a246e8c08c0459d92fe641cb5189d3e65c087b0a82581b6",
"0x340c2e9f0716f6c889672efc2537c3045221e19977efa1b95365d667bc3cefc9",
"0xc527cfd0776fbc19dc5171484290aecd324e629ad4fb69eaf996e2a1b84c5a99",
"0x24b0cfbcd535063e112ce650f1457487201af3226a85ce1cced7ba66235719ca",
"0x7b93476b116bc5b77783c77c5f7fd6ef08b06440e56c3c7d1b759fc3c188c044"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
