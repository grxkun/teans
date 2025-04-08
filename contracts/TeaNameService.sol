// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TeaNameService {
    mapping(string => address) public names;

    function registerName(string memory name) public {
        require(names[name] == address(0), "Name already registered");
        names[name] = msg.sender;
    }

    function resolveName(string memory name) public view returns (address) {
        return names[name];
    }
}