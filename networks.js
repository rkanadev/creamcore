var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('22e4c314'),
  addressVersion: 28,
  privKeyVersion: 155,
  P2SHVersion: 28,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c16d8faa653d917479bac44552219bbea256dc86166d3947a70b44f964000000'),
    merkle_root: hex('e23220e1a9ce550bda793a0630bf0e80db6e4d0dfccfded48edad7ab2dacbb48'),
    height: 0,
    nonce: 1454059,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1496692022,
    bits: 504365055,
  },
  dnsSeeds: [
    '94.176.236.41',
	'109.235.65.83',
	'185.69.53.42'
  ],
  defaultClientPort: 56066
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
