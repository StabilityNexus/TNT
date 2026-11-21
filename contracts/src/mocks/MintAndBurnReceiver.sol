// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../TNT.sol";

contract MintAndBurnReceiver is IERC721Receiver {
    TNT public immutable tnt;

    constructor(TNT _tnt) {
        tnt = _tnt;
    }

    function onERC721Received(address, address, uint256 tokenId, bytes calldata) external override returns (bytes4) {
        tnt.burnToken(tokenId);
        return this.onERC721Received.selector;
    }
}
