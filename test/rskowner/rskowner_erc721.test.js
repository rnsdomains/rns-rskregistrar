const RSKOwner = artifacts.require('RSKOwner');

const assert = require('assert');

const ZERO_ADDRESS = require('@openzeppelin/test-helpers').constants.ZERO_ADDRESS;

contract('RSK Owner - ERC-721', async () => {
  let rskOwner;

  beforeEach(async () => {
    rskOwner = await RSKOwner.new(
      ZERO_ADDRESS,
      ZERO_ADDRESS,
      '0x00',
    );
  });

  it('should implement ERC-721 interface', async () => {
    const interfaceId = '0x80ac58cd';

    const supportsInterface = await rskOwner.supportsInterface(interfaceId);

    assert(supportsInterface);
  });
});
