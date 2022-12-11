// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("NikhilToken", "NIK") {
        _mint(msg.sender, initialSupply);
    }
}

//0xEc679440f32de9aC769dDe69E33A1ba160a46dB5
