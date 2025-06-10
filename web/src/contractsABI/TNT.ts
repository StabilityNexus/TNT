const TNT = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "admin",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "symbol",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_revokable",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "_factoryContract",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_imageURL",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "MINTER_ROLE",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "REVOKER_ROLE",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "burnToken",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "factoryContract",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getApproved",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getIssuedTokens",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "tokenIds",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "issuers",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "grantMinterRole",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "grantRevokerRole",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "grantRole",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "hasRole",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "imageURL",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "issueToken",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "metadata",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "issuedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ownerOf",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "renounceRole",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "callerConfirmation",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "revokable",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "revokeRole",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "revokeToken",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                {
                    "name": "interfaceId",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenImageURL",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenIssuers",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenURI",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                },
                {
                    "name": "previousAdminRole",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                },
                {
                    "name": "newAdminRole",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RoleGranted",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "sender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RoleRevoked",
            "inputs": [
                {
                    "name": "role",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "sender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TokenIssued",
            "inputs": [
                {
                    "name": "issuer",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "recipient",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TokenRevoked",
            "inputs": [
                {
                    "name": "revoker",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "AccessControlBadConfirmation",
            "inputs": []
        },
        {
            "type": "error",
            "name": "AccessControlUnauthorizedAccount",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "neededRole",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721IncorrectOwner",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InsufficientApproval",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidApprover",
            "inputs": [
                {
                    "name": "approver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOperator",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidReceiver",
            "inputs": [
                {
                    "name": "receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidSender",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721NonexistentToken",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x60a060405234801562000010575f80fd5b5060405162003cb938038062003cb98339818101604052810190620000369190620004c9565b8484815f9081620000489190620007f5565b5080600190816200005a9190620007f5565b505050620000715f801b876200014260201b60201c565b50620000a47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6876200014260201b60201c565b50620000d77fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee30876200014260201b60201c565b5082151560808115158152505081600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b9081620001359190620007f5565b50505050505050620008d9565b5f6200015583836200023e60201b60201c565b6200023457600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550620001d0620002a260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000238565b5f90505b92915050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620002e582620002ba565b9050919050565b620002f781620002d9565b811462000302575f80fd5b50565b5f815190506200031581620002ec565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200036b8262000323565b810181811067ffffffffffffffff821117156200038d576200038c62000333565b5b80604052505050565b5f620003a1620002a9565b9050620003af828262000360565b919050565b5f67ffffffffffffffff821115620003d157620003d062000333565b5b620003dc8262000323565b9050602081019050919050565b5f5b8381101562000408578082015181840152602081019050620003eb565b5f8484015250505050565b5f620004296200042384620003b4565b62000396565b9050828152602081018484840111156200044857620004476200031f565b5b62000455848285620003e9565b509392505050565b5f82601f8301126200047457620004736200031b565b5b81516200048684826020860162000413565b91505092915050565b5f8115159050919050565b620004a5816200048f565b8114620004b0575f80fd5b50565b5f81519050620004c3816200049a565b92915050565b5f805f805f8060c08789031215620004e657620004e5620002b2565b5b5f620004f589828a0162000305565b965050602087015167ffffffffffffffff811115620005195762000518620002b6565b5b6200052789828a016200045d565b955050604087015167ffffffffffffffff8111156200054b576200054a620002b6565b5b6200055989828a016200045d565b94505060606200056c89828a01620004b3565b93505060806200057f89828a0162000305565b92505060a087015167ffffffffffffffff811115620005a357620005a2620002b6565b5b620005b189828a016200045d565b9150509295509295509295565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200060d57607f821691505b602082108103620006235762000622620005c8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620006877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200064a565b6200069386836200064a565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620006dd620006d7620006d184620006ab565b620006b4565b620006ab565b9050919050565b5f819050919050565b620006f883620006bd565b620007106200070782620006e4565b84845462000656565b825550505050565b5f90565b6200072662000718565b62000733818484620006ed565b505050565b5b818110156200075a576200074e5f826200071c565b60018101905062000739565b5050565b601f821115620007a957620007738162000629565b6200077e846200063b565b810160208510156200078e578190505b620007a66200079d856200063b565b83018262000738565b50505b505050565b5f82821c905092915050565b5f620007cb5f1984600802620007ae565b1980831691505092915050565b5f620007e58383620007ba565b9150826002028217905092915050565b6200080082620005be565b67ffffffffffffffff8111156200081c576200081b62000333565b5b620008288254620005f5565b620008358282856200075e565b5f60209050601f8311600181146200086b575f841562000856578287015190505b620008628582620007d8565b865550620008d1565b601f1984166200087b8662000629565b5f5b82811015620008a4578489015182556001820191506020850194506020810190506200087d565b86831015620008c45784890151620008c0601f891682620007ba565b8355505b6001600288020188555050505b505050505050565b6080516133c0620008f95f395f8181610da4015261141401526133c05ff3fe608060405234801561000f575f80fd5b50600436106101f9575f3560e01c80637dc9e79b11610118578063b90497e0116100ab578063d547741f1161007a578063d547741f146105d0578063de11c94a146105ec578063e11360b31461060a578063e3684e3914610628578063e985e9c514610658576101f9565b8063b90497e014610548578063c87b56dd14610566578063cc49d0c314610596578063d5391393146105b2576101f9565b8063a217fddf116100e7578063a217fddf146104c2578063a22cb465146104e0578063b7abc58d146104fc578063b88d4fde1461052c576101f9565b80637dc9e79b1461043c578063890340821461045857806391d148541461047457806395d89b41146104a4576101f9565b806336568abe1161019057806368a1059a1161015f57806368a1059a146103b457806370a08231146103d25780637b47ec1a146104025780637c4acabf1461041e576101f9565b806336568abe146103305780633dd1eb611461034c57806342842e0e146103685780636352211e14610384576101f9565b806314e2d2a0116101cc57806314e2d2a01461029757806323b872dd146102c8578063248a9ca3146102e45780632f2ff15d14610314576101f9565b806301ffc9a7146101fd57806306fdde031461022d578063081812fc1461024b578063095ea7b31461027b575b5f80fd5b6102176004803603810190610212919061275b565b610688565b60405161022491906127a0565b60405180910390f35b610235610699565b6040516102429190612843565b60405180910390f35b61026560048036038101906102609190612896565b610728565b6040516102729190612900565b60405180910390f35b61029560048036038101906102909190612943565b610743565b005b6102b160048036038101906102ac9190612981565b610759565b6040516102bf929190612b1a565b60405180910390f35b6102e260048036038101906102dd9190612b4f565b610969565b005b6102fe60048036038101906102f99190612bd2565b610a68565b60405161030b9190612c0c565b60405180910390f35b61032e60048036038101906103299190612c25565b610a85565b005b61034a60048036038101906103459190612c25565b610aa7565b005b61036660048036038101906103619190612981565b610b22565b005b610382600480360381019061037d9190612b4f565b610b5c565b005b61039e60048036038101906103999190612896565b610b7b565b6040516103ab9190612900565b60405180910390f35b6103bc610b8c565b6040516103c99190612843565b60405180910390f35b6103ec60048036038101906103e79190612981565b610c1c565b6040516103f99190612c72565b60405180910390f35b61041c60048036038101906104179190612896565b610cd2565b005b610426610d54565b6040516104339190612c0c565b60405180910390f35b61045660048036038101906104519190612896565b610d78565b005b610472600480360381019061046d9190612981565b610efb565b005b61048e60048036038101906104899190612c25565b611116565b60405161049b91906127a0565b60405180910390f35b6104ac61117a565b6040516104b99190612843565b60405180910390f35b6104ca61120a565b6040516104d79190612c0c565b60405180910390f35b6104fa60048036038101906104f59190612cb5565b611210565b005b61051660048036038101906105119190612896565b611226565b6040516105239190612900565b60405180910390f35b61054660048036038101906105419190612e1f565b611256565b005b61055061127b565b60405161055d9190612843565b60405180910390f35b610580600480360381019061057b9190612896565b611307565b60405161058d9190612843565b60405180910390f35b6105b060048036038101906105ab9190612981565b61136d565b005b6105ba6113a7565b6040516105c79190612c0c565b60405180910390f35b6105ea60048036038101906105e59190612c25565b6113cb565b005b6105f46113ed565b6040516106019190612900565b60405180910390f35b610612611412565b60405161061f91906127a0565b60405180910390f35b610642600480360381019061063d9190612896565b611436565b60405161064f9190612c72565b60405180910390f35b610672600480360381019061066d9190612e9f565b611450565b60405161067f91906127a0565b60405180910390f35b5f610692826114de565b9050919050565b60605f80546106a790612f0a565b80601f01602080910402602001604051908101604052809291908181526020018280546106d390612f0a565b801561071e5780601f106106f55761010080835404028352916020019161071e565b820191905f5260205f20905b81548152906001019060200180831161070157829003601f168201915b5050505050905090565b5f61073282611557565b5061073c826115dd565b9050919050565b6107558282610750611616565b61161d565b5050565b6060805f60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208054905090508067ffffffffffffffff8111156107ba576107b9612cfb565b5b6040519080825280602002602001820160405280156107e85781602001602082028036833780820191505090505b5092508067ffffffffffffffff81111561080557610804612cfb565b5b6040519080825280602002602001820160405280156108335781602001602082028036833780820191505090505b5091505f5b818110156109625760095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20818154811061088f5761088e612f3a565b5b905f5260205f2001548482815181106108ab576108aa612f3a565b5b60200260200101818152505060085f8583815181106108cd576108cc612f3a565b5b602002602001015181526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811061091557610914612f3a565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808061095a90612f94565b915050610838565b5050915091565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d9575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016109d09190612900565b60405180910390fd5b5f6109ec83836109e7611616565b61162f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a62578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610a5993929190612fdb565b60405180910390fd5b50505050565b5f60065f8381526020019081526020015f20600101549050919050565b610a8e82610a68565b610a97816116f1565b610aa18383611705565b50505050565b610aaf611616565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b13576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1d82826117ef565b505050565b5f801b610b2e816116f1565b610b587f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683610a85565b5050565b610b7683838360405180602001604052805f815250611256565b505050565b5f610b8582611557565b9050919050565b6060600b8054610b9b90612f0a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc790612f0a565b8015610c125780601f10610be957610100808354040283529160200191610c12565b820191905f5260205f20905b815481529060010190602001808311610bf557829003601f168201915b5050505050905090565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c8d575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c849190612900565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16610cf282610b7b565b73ffffffffffffffffffffffffffffffffffffffff1614610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f9061305a565b60405180910390fd5b610d51816118d9565b50565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3081565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee30610da2816116f1565b7f0000000000000000000000000000000000000000000000000000000000000000610e02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df9906130c2565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660085f8481526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ea0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e979061312a565b60405180910390fd5b610ea9826118d9565b3373ffffffffffffffffffffffffffffffffffffffff167f0f3207927b5662fc83604013a0f43ef142e755cba8e03dd8eabdbe53aa94683c83604051610eef9190612c72565b60405180910390a25050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610f25816116f1565b5f60075f815480929190610f3890612f94565b919050559050610f48838261195b565b3360085f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604051806020016040528042815250600c5f8381526020019081526020015f205f820151815f015590505060095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081908060018154018082558091505060019003905f5260205f20015f9091909190915055600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b91845b884306040518363ffffffff1660e01b815260040161107f929190613148565b5f604051808303815f87803b158015611096575f80fd5b505af11580156110a8573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2787de964661923b7d07c297ec434f2cd5daa8a622b2c656cc7bfdc431d14d19836040516111099190612c72565b60405180910390a3505050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461118990612f0a565b80601f01602080910402602001604051908101604052809291908181526020018280546111b590612f0a565b80156112005780601f106111d757610100808354040283529160200191611200565b820191905f5260205f20905b8154815290600101906020018083116111e357829003601f168201915b5050505050905090565b5f801b81565b61122261121b611616565b8383611978565b5050565b6008602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611261848484610969565b61127561126c611616565b85858585611ae1565b50505050565b600b805461128890612f0a565b80601f01602080910402602001604051908101604052809291908181526020018280546112b490612f0a565b80156112ff5780601f106112d6576101008083540402835291602001916112ff565b820191905f5260205f20905b8154815290600101906020018083116112e257829003601f168201915b505050505081565b606061131282611557565b505f61131c611c8d565b90505f81511161133a5760405180602001604052805f815250611365565b8061134484611ca3565b6040516020016113559291906131a9565b6040516020818303038152906040525b915050919050565b5f801b611379816116f1565b6113a37fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3083610a85565b5050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6113d482610a68565b6113dd816116f1565b6113e783836117ef565b50505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600c602052805f5260405f205f91509050805f0154905081565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611550575061154f82611d6d565b5b9050919050565b5f8061156283611e4e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036115d457826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115cb9190612c72565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b61162a8383836001611e87565b505050565b5f8061163c858585612046565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156116a657505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116dd90613216565b60405180910390fd5b809150509392505050565b611702816116fd611616565b612251565b50565b5f6117108383611116565b6117e557600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611782611616565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506117e9565b5f90505b92915050565b5f6117fa8383611116565b156118cf575f60065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061186c611616565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506118d3565b5f90505b92915050565b5f6118e55f835f61162f565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361195757816040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161194e9190612c72565b60405180910390fd5b5050565b611974828260405180602001604052805f8152506122a2565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036119e857816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016119df9190612900565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611ad491906127a0565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611c86578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611b3f9493929190613286565b6020604051808303815f875af1925050508015611b7a57506040513d601f19601f82011682018060405250810190611b7791906132e4565b60015b611bfb573d805f8114611ba8576040519150601f19603f3d011682016040523d82523d5f602084013e611bad565b606091505b505f815103611bf357836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611bea9190612900565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c8457836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611c7b9190612900565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f6001611cb1846122c5565b0190505f8167ffffffffffffffff811115611ccf57611cce612cfb565b5b6040519080825280601f01601f191660200182016040528015611d015781602001600182028036833780820191505090505b5090505f82602001820190505b600115611d62578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611d5757611d5661330f565b5b0494505f8503611d0e575b819350505050919050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611e3757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611e475750611e4682612416565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611ebf57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611ff1575f611ece84611557565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611f3857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611f4b5750611f498184611450565b155b15611f8d57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611f849190612900565b60405180910390fd5b8115611fef57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f8061205184611e4e565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146120925761209181848661247f565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461211d576120d15f855f80611e87565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461219c57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b61225b8282611116565b61229e5780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161229592919061333c565b60405180910390fd5b5050565b6122ac8383612542565b6122c06122b7611616565b5f858585611ae1565b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612321577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816123175761231661330f565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061235e576d04ee2d6d415b85acef810000000083816123545761235361330f565b5b0492506020810190505b662386f26fc10000831061238d57662386f26fc1000083816123835761238261330f565b5b0492506010810190505b6305f5e10083106123b6576305f5e10083816123ac576123ab61330f565b5b0492506008810190505b61271083106123db5761271083816123d1576123d061330f565b5b0492506004810190505b606483106123fe57606483816123f4576123f361330f565b5b0492506002810190505b600a831061240d576001810190505b80915050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61248a838383612635565b61253d575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036124fe57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016124f59190612c72565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612534929190613363565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036125b2575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016125a99190612900565b60405180910390fd5b5f6125be83835f61162f565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612630575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016126279190612900565b60405180910390fd5b505050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156126ec57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806126ad57506126ac8484611450565b5b806126eb57508273ffffffffffffffffffffffffffffffffffffffff166126d3836115dd565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61273a81612706565b8114612744575f80fd5b50565b5f8135905061275581612731565b92915050565b5f602082840312156127705761276f6126fe565b5b5f61277d84828501612747565b91505092915050565b5f8115159050919050565b61279a81612786565b82525050565b5f6020820190506127b35f830184612791565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156127f05780820151818401526020810190506127d5565b5f8484015250505050565b5f601f19601f8301169050919050565b5f612815826127b9565b61281f81856127c3565b935061282f8185602086016127d3565b612838816127fb565b840191505092915050565b5f6020820190508181035f83015261285b818461280b565b905092915050565b5f819050919050565b61287581612863565b811461287f575f80fd5b50565b5f813590506128908161286c565b92915050565b5f602082840312156128ab576128aa6126fe565b5b5f6128b884828501612882565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6128ea826128c1565b9050919050565b6128fa816128e0565b82525050565b5f6020820190506129135f8301846128f1565b92915050565b612922816128e0565b811461292c575f80fd5b50565b5f8135905061293d81612919565b92915050565b5f8060408385031215612959576129586126fe565b5b5f6129668582860161292f565b925050602061297785828601612882565b9150509250929050565b5f60208284031215612996576129956126fe565b5b5f6129a38482850161292f565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6129de81612863565b82525050565b5f6129ef83836129d5565b60208301905092915050565b5f602082019050919050565b5f612a11826129ac565b612a1b81856129b6565b9350612a26836129c6565b805f5b83811015612a56578151612a3d88826129e4565b9750612a48836129fb565b925050600181019050612a29565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b612a95816128e0565b82525050565b5f612aa68383612a8c565b60208301905092915050565b5f602082019050919050565b5f612ac882612a63565b612ad28185612a6d565b9350612add83612a7d565b805f5b83811015612b0d578151612af48882612a9b565b9750612aff83612ab2565b925050600181019050612ae0565b5085935050505092915050565b5f6040820190508181035f830152612b328185612a07565b90508181036020830152612b468184612abe565b90509392505050565b5f805f60608486031215612b6657612b656126fe565b5b5f612b738682870161292f565b9350506020612b848682870161292f565b9250506040612b9586828701612882565b9150509250925092565b5f819050919050565b612bb181612b9f565b8114612bbb575f80fd5b50565b5f81359050612bcc81612ba8565b92915050565b5f60208284031215612be757612be66126fe565b5b5f612bf484828501612bbe565b91505092915050565b612c0681612b9f565b82525050565b5f602082019050612c1f5f830184612bfd565b92915050565b5f8060408385031215612c3b57612c3a6126fe565b5b5f612c4885828601612bbe565b9250506020612c598582860161292f565b9150509250929050565b612c6c81612863565b82525050565b5f602082019050612c855f830184612c63565b92915050565b612c9481612786565b8114612c9e575f80fd5b50565b5f81359050612caf81612c8b565b92915050565b5f8060408385031215612ccb57612cca6126fe565b5b5f612cd88582860161292f565b9250506020612ce985828601612ca1565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612d31826127fb565b810181811067ffffffffffffffff82111715612d5057612d4f612cfb565b5b80604052505050565b5f612d626126f5565b9050612d6e8282612d28565b919050565b5f67ffffffffffffffff821115612d8d57612d8c612cfb565b5b612d96826127fb565b9050602081019050919050565b828183375f83830152505050565b5f612dc3612dbe84612d73565b612d59565b905082815260208101848484011115612ddf57612dde612cf7565b5b612dea848285612da3565b509392505050565b5f82601f830112612e0657612e05612cf3565b5b8135612e16848260208601612db1565b91505092915050565b5f805f8060808587031215612e3757612e366126fe565b5b5f612e448782880161292f565b9450506020612e558782880161292f565b9350506040612e6687828801612882565b925050606085013567ffffffffffffffff811115612e8757612e86612702565b5b612e9387828801612df2565b91505092959194509250565b5f8060408385031215612eb557612eb46126fe565b5b5f612ec28582860161292f565b9250506020612ed38582860161292f565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612f2157607f821691505b602082108103612f3457612f33612edd565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612f9e82612863565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fd057612fcf612f67565b5b600182019050919050565b5f606082019050612fee5f8301866128f1565b612ffb6020830185612c63565b61300860408301846128f1565b949350505050565b7f596f7520646f206e6f74206f776e207468697320746f6b656e000000000000005f82015250565b5f6130446019836127c3565b915061304f82613010565b602082019050919050565b5f6020820190508181035f83015261307181613038565b9050919050565b7f546f6b656e206973206e6f6e2d7265766f6b61626c65000000000000000000005f82015250565b5f6130ac6016836127c3565b91506130b782613078565b602082019050919050565b5f6020820190508181035f8301526130d9816130a0565b9050919050565b7f596f7520617265206e6f742074686520697373756572000000000000000000005f82015250565b5f6131146016836127c3565b915061311f826130e0565b602082019050919050565b5f6020820190508181035f83015261314181613108565b9050919050565b5f60408201905061315b5f8301856128f1565b61316860208301846128f1565b9392505050565b5f81905092915050565b5f613183826127b9565b61318d818561316f565b935061319d8185602086016127d3565b80840191505092915050565b5f6131b48285613179565b91506131c08284613179565b91508190509392505050565b7f544e547320617265206e6f6e2d7472616e7366657261626c65000000000000005f82015250565b5f6132006019836127c3565b915061320b826131cc565b602082019050919050565b5f6020820190508181035f83015261322d816131f4565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f61325882613234565b613262818561323e565b93506132728185602086016127d3565b61327b816127fb565b840191505092915050565b5f6080820190506132995f8301876128f1565b6132a660208301866128f1565b6132b36040830185612c63565b81810360608301526132c5818461324e565b905095945050505050565b5f815190506132de81612731565b92915050565b5f602082840312156132f9576132f86126fe565b5b5f613306848285016132d0565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f60408201905061334f5f8301856128f1565b61335c6020830184612bfd565b9392505050565b5f6040820190506133765f8301856128f1565b6133836020830184612c63565b939250505056fea2646970667358221220a96a5e56ec2863d07ed98cdda0ccd6d6a74fb4c3bdbc29c140cbfe3e4ad9f4af64736f6c63430008140033",
        "sourceMap": "482:5216:18:-:0;;;1831:453;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2029:4;2035:6;1454:5:4;1446;:13;;;;;;:::i;:::-;;1479:7;1469;:17;;;;;;:::i;:::-;;1380:113;;2053:37:18::1;2232:4:0;2064:18:18::0;::::1;2084:5;2053:10;;;:37;;:::i;:::-;;2100:30;564:24;2124:5;2100:10;;;:30;;:::i;:::-;;2140:31;633:25;2165:5;2140:10;;;:31;;:::i;:::-;;2193:10;2181:22;;;;;;;;::::0;::::1;2231:16;2213:15;;:34;;;;;;;;;;;;;;;;;;2268:9;2257:8;:20;;;;;;:::i;:::-;;1831:453:::0;;;;;;482:5216;;6179:316:0;6256:4;6277:22;6285:4;6291:7;6277;;;:22;;:::i;:::-;6272:217;;6347:4;6315:6;:12;6322:4;6315:12;;;;;;;;;;;:20;;:29;6336:7;6315:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;6397:12;:10;;;:12;;:::i;:::-;6370:40;;6388:7;6370:40;;6382:4;6370:40;;;;;;;;;;6431:4;6424:11;;;;6272:217;6473:5;6466:12;;6179:316;;;;;:::o;2854:136::-;2931:4;2954:6;:12;2961:4;2954:12;;;;;;;;;;;:20;;:29;2975:7;2954:29;;;;;;;;;;;;;;;;;;;;;;;;;2947:36;;2854:136;;;;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;7:75:19:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:117::-;954:1;951;944:12;968:117;1077:1;1074;1067:12;1091:102;1132:6;1183:2;1179:7;1174:2;1167:5;1163:14;1159:28;1149:38;;1091:102;;;:::o;1199:180::-;1247:77;1244:1;1237:88;1344:4;1341:1;1334:15;1368:4;1365:1;1358:15;1385:281;1468:27;1490:4;1468:27;:::i;:::-;1460:6;1456:40;1598:6;1586:10;1583:22;1562:18;1550:10;1547:34;1544:62;1541:88;;;1609:18;;:::i;:::-;1541:88;1649:10;1645:2;1638:22;1428:238;1385:281;;:::o;1672:129::-;1706:6;1733:20;;:::i;:::-;1723:30;;1762:33;1790:4;1782:6;1762:33;:::i;:::-;1672:129;;;:::o;1807:308::-;1869:4;1959:18;1951:6;1948:30;1945:56;;;1981:18;;:::i;:::-;1945:56;2019:29;2041:6;2019:29;:::i;:::-;2011:37;;2103:4;2097;2093:15;2085:23;;1807:308;;;:::o;2121:246::-;2202:1;2212:113;2226:6;2223:1;2220:13;2212:113;;;2311:1;2306:3;2302:11;2296:18;2292:1;2287:3;2283:11;2276:39;2248:2;2245:1;2241:10;2236:15;;2212:113;;;2359:1;2350:6;2345:3;2341:16;2334:27;2183:184;2121:246;;;:::o;2373:434::-;2462:5;2487:66;2503:49;2545:6;2503:49;:::i;:::-;2487:66;:::i;:::-;2478:75;;2576:6;2569:5;2562:21;2614:4;2607:5;2603:16;2652:3;2643:6;2638:3;2634:16;2631:25;2628:112;;;2659:79;;:::i;:::-;2628:112;2749:52;2794:6;2789:3;2784;2749:52;:::i;:::-;2468:339;2373:434;;;;;:::o;2827:355::-;2894:5;2943:3;2936:4;2928:6;2924:17;2920:27;2910:122;;2951:79;;:::i;:::-;2910:122;3061:6;3055:13;3086:90;3172:3;3164:6;3157:4;3149:6;3145:17;3086:90;:::i;:::-;3077:99;;2900:282;2827:355;;;;:::o;3188:90::-;3222:7;3265:5;3258:13;3251:21;3240:32;;3188:90;;;:::o;3284:116::-;3354:21;3369:5;3354:21;:::i;:::-;3347:5;3344:32;3334:60;;3390:1;3387;3380:12;3334:60;3284:116;:::o;3406:137::-;3460:5;3491:6;3485:13;3476:22;;3507:30;3531:5;3507:30;:::i;:::-;3406:137;;;;:::o;3549:1647::-;3691:6;3699;3707;3715;3723;3731;3780:3;3768:9;3759:7;3755:23;3751:33;3748:120;;;3787:79;;:::i;:::-;3748:120;3907:1;3932:64;3988:7;3979:6;3968:9;3964:22;3932:64;:::i;:::-;3922:74;;3878:128;4066:2;4055:9;4051:18;4045:25;4097:18;4089:6;4086:30;4083:117;;;4119:79;;:::i;:::-;4083:117;4224:74;4290:7;4281:6;4270:9;4266:22;4224:74;:::i;:::-;4214:84;;4016:292;4368:2;4357:9;4353:18;4347:25;4399:18;4391:6;4388:30;4385:117;;;4421:79;;:::i;:::-;4385:117;4526:74;4592:7;4583:6;4572:9;4568:22;4526:74;:::i;:::-;4516:84;;4318:292;4649:2;4675:61;4728:7;4719:6;4708:9;4704:22;4675:61;:::i;:::-;4665:71;;4620:126;4785:3;4812:64;4868:7;4859:6;4848:9;4844:22;4812:64;:::i;:::-;4802:74;;4756:130;4946:3;4935:9;4931:19;4925:26;4978:18;4970:6;4967:30;4964:117;;;5000:79;;:::i;:::-;4964:117;5105:74;5171:7;5162:6;5151:9;5147:22;5105:74;:::i;:::-;5095:84;;4896:293;3549:1647;;;;;;;;:::o;5202:99::-;5254:6;5288:5;5282:12;5272:22;;5202:99;;;:::o;5307:180::-;5355:77;5352:1;5345:88;5452:4;5449:1;5442:15;5476:4;5473:1;5466:15;5493:320;5537:6;5574:1;5568:4;5564:12;5554:22;;5621:1;5615:4;5611:12;5642:18;5632:81;;5698:4;5690:6;5686:17;5676:27;;5632:81;5760:2;5752:6;5749:14;5729:18;5726:38;5723:84;;5779:18;;:::i;:::-;5723:84;5544:269;5493:320;;;:::o;5819:141::-;5868:4;5891:3;5883:11;;5914:3;5911:1;5904:14;5948:4;5945:1;5935:18;5927:26;;5819:141;;;:::o;5966:93::-;6003:6;6050:2;6045;6038:5;6034:14;6030:23;6020:33;;5966:93;;;:::o;6065:107::-;6109:8;6159:5;6153:4;6149:16;6128:37;;6065:107;;;;:::o;6178:393::-;6247:6;6297:1;6285:10;6281:18;6320:97;6350:66;6339:9;6320:97;:::i;:::-;6438:39;6468:8;6457:9;6438:39;:::i;:::-;6426:51;;6510:4;6506:9;6499:5;6495:21;6486:30;;6559:4;6549:8;6545:19;6538:5;6535:30;6525:40;;6254:317;;6178:393;;;;;:::o;6577:77::-;6614:7;6643:5;6632:16;;6577:77;;;:::o;6660:60::-;6688:3;6709:5;6702:12;;6660:60;;;:::o;6726:142::-;6776:9;6809:53;6827:34;6836:24;6854:5;6836:24;:::i;:::-;6827:34;:::i;:::-;6809:53;:::i;:::-;6796:66;;6726:142;;;:::o;6874:75::-;6917:3;6938:5;6931:12;;6874:75;;;:::o;6955:269::-;7065:39;7096:7;7065:39;:::i;:::-;7126:91;7175:41;7199:16;7175:41;:::i;:::-;7167:6;7160:4;7154:11;7126:91;:::i;:::-;7120:4;7113:105;7031:193;6955:269;;;:::o;7230:73::-;7275:3;7230:73;:::o;7309:189::-;7386:32;;:::i;:::-;7427:65;7485:6;7477;7471:4;7427:65;:::i;:::-;7362:136;7309:189;;:::o;7504:186::-;7564:120;7581:3;7574:5;7571:14;7564:120;;;7635:39;7672:1;7665:5;7635:39;:::i;:::-;7608:1;7601:5;7597:13;7588:22;;7564:120;;;7504:186;;:::o;7696:543::-;7797:2;7792:3;7789:11;7786:446;;;7831:38;7863:5;7831:38;:::i;:::-;7915:29;7933:10;7915:29;:::i;:::-;7905:8;7901:44;8098:2;8086:10;8083:18;8080:49;;;8119:8;8104:23;;8080:49;8142:80;8198:22;8216:3;8198:22;:::i;:::-;8188:8;8184:37;8171:11;8142:80;:::i;:::-;7801:431;;7786:446;7696:543;;;:::o;8245:117::-;8299:8;8349:5;8343:4;8339:16;8318:37;;8245:117;;;;:::o;8368:169::-;8412:6;8445:51;8493:1;8489:6;8481:5;8478:1;8474:13;8445:51;:::i;:::-;8441:56;8526:4;8520;8516:15;8506:25;;8419:118;8368:169;;;;:::o;8542:295::-;8618:4;8764:29;8789:3;8783:4;8764:29;:::i;:::-;8756:37;;8826:3;8823:1;8819:11;8813:4;8810:21;8802:29;;8542:295;;;;:::o;8842:1395::-;8959:37;8992:3;8959:37;:::i;:::-;9061:18;9053:6;9050:30;9047:56;;;9083:18;;:::i;:::-;9047:56;9127:38;9159:4;9153:11;9127:38;:::i;:::-;9212:67;9272:6;9264;9258:4;9212:67;:::i;:::-;9306:1;9330:4;9317:17;;9362:2;9354:6;9351:14;9379:1;9374:618;;;;10036:1;10053:6;10050:77;;;10102:9;10097:3;10093:19;10087:26;10078:35;;10050:77;10153:67;10213:6;10206:5;10153:67;:::i;:::-;10147:4;10140:81;10009:222;9344:887;;9374:618;9426:4;9422:9;9414:6;9410:22;9460:37;9492:4;9460:37;:::i;:::-;9519:1;9533:208;9547:7;9544:1;9541:14;9533:208;;;9626:9;9621:3;9617:19;9611:26;9603:6;9596:42;9677:1;9669:6;9665:14;9655:24;;9724:2;9713:9;9709:18;9696:31;;9570:4;9567:1;9563:12;9558:17;;9533:208;;;9769:6;9760:7;9757:19;9754:179;;;9827:9;9822:3;9818:19;9812:26;9870:48;9912:4;9904:6;9900:17;9889:9;9870:48;:::i;:::-;9862:6;9855:64;9777:156;9754:179;9979:1;9975;9967:6;9963:14;9959:22;9953:4;9946:36;9381:611;;;9344:887;;8934:1303;;;8842:1395;;:::o;482:5216:18:-;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561000f575f80fd5b50600436106101f9575f3560e01c80637dc9e79b11610118578063b90497e0116100ab578063d547741f1161007a578063d547741f146105d0578063de11c94a146105ec578063e11360b31461060a578063e3684e3914610628578063e985e9c514610658576101f9565b8063b90497e014610548578063c87b56dd14610566578063cc49d0c314610596578063d5391393146105b2576101f9565b8063a217fddf116100e7578063a217fddf146104c2578063a22cb465146104e0578063b7abc58d146104fc578063b88d4fde1461052c576101f9565b80637dc9e79b1461043c578063890340821461045857806391d148541461047457806395d89b41146104a4576101f9565b806336568abe1161019057806368a1059a1161015f57806368a1059a146103b457806370a08231146103d25780637b47ec1a146104025780637c4acabf1461041e576101f9565b806336568abe146103305780633dd1eb611461034c57806342842e0e146103685780636352211e14610384576101f9565b806314e2d2a0116101cc57806314e2d2a01461029757806323b872dd146102c8578063248a9ca3146102e45780632f2ff15d14610314576101f9565b806301ffc9a7146101fd57806306fdde031461022d578063081812fc1461024b578063095ea7b31461027b575b5f80fd5b6102176004803603810190610212919061275b565b610688565b60405161022491906127a0565b60405180910390f35b610235610699565b6040516102429190612843565b60405180910390f35b61026560048036038101906102609190612896565b610728565b6040516102729190612900565b60405180910390f35b61029560048036038101906102909190612943565b610743565b005b6102b160048036038101906102ac9190612981565b610759565b6040516102bf929190612b1a565b60405180910390f35b6102e260048036038101906102dd9190612b4f565b610969565b005b6102fe60048036038101906102f99190612bd2565b610a68565b60405161030b9190612c0c565b60405180910390f35b61032e60048036038101906103299190612c25565b610a85565b005b61034a60048036038101906103459190612c25565b610aa7565b005b61036660048036038101906103619190612981565b610b22565b005b610382600480360381019061037d9190612b4f565b610b5c565b005b61039e60048036038101906103999190612896565b610b7b565b6040516103ab9190612900565b60405180910390f35b6103bc610b8c565b6040516103c99190612843565b60405180910390f35b6103ec60048036038101906103e79190612981565b610c1c565b6040516103f99190612c72565b60405180910390f35b61041c60048036038101906104179190612896565b610cd2565b005b610426610d54565b6040516104339190612c0c565b60405180910390f35b61045660048036038101906104519190612896565b610d78565b005b610472600480360381019061046d9190612981565b610efb565b005b61048e60048036038101906104899190612c25565b611116565b60405161049b91906127a0565b60405180910390f35b6104ac61117a565b6040516104b99190612843565b60405180910390f35b6104ca61120a565b6040516104d79190612c0c565b60405180910390f35b6104fa60048036038101906104f59190612cb5565b611210565b005b61051660048036038101906105119190612896565b611226565b6040516105239190612900565b60405180910390f35b61054660048036038101906105419190612e1f565b611256565b005b61055061127b565b60405161055d9190612843565b60405180910390f35b610580600480360381019061057b9190612896565b611307565b60405161058d9190612843565b60405180910390f35b6105b060048036038101906105ab9190612981565b61136d565b005b6105ba6113a7565b6040516105c79190612c0c565b60405180910390f35b6105ea60048036038101906105e59190612c25565b6113cb565b005b6105f46113ed565b6040516106019190612900565b60405180910390f35b610612611412565b60405161061f91906127a0565b60405180910390f35b610642600480360381019061063d9190612896565b611436565b60405161064f9190612c72565b60405180910390f35b610672600480360381019061066d9190612e9f565b611450565b60405161067f91906127a0565b60405180910390f35b5f610692826114de565b9050919050565b60605f80546106a790612f0a565b80601f01602080910402602001604051908101604052809291908181526020018280546106d390612f0a565b801561071e5780601f106106f55761010080835404028352916020019161071e565b820191905f5260205f20905b81548152906001019060200180831161070157829003601f168201915b5050505050905090565b5f61073282611557565b5061073c826115dd565b9050919050565b6107558282610750611616565b61161d565b5050565b6060805f60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208054905090508067ffffffffffffffff8111156107ba576107b9612cfb565b5b6040519080825280602002602001820160405280156107e85781602001602082028036833780820191505090505b5092508067ffffffffffffffff81111561080557610804612cfb565b5b6040519080825280602002602001820160405280156108335781602001602082028036833780820191505090505b5091505f5b818110156109625760095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20818154811061088f5761088e612f3a565b5b905f5260205f2001548482815181106108ab576108aa612f3a565b5b60200260200101818152505060085f8583815181106108cd576108cc612f3a565b5b602002602001015181526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811061091557610914612f3a565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808061095a90612f94565b915050610838565b5050915091565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d9575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016109d09190612900565b60405180910390fd5b5f6109ec83836109e7611616565b61162f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a62578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610a5993929190612fdb565b60405180910390fd5b50505050565b5f60065f8381526020019081526020015f20600101549050919050565b610a8e82610a68565b610a97816116f1565b610aa18383611705565b50505050565b610aaf611616565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b13576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1d82826117ef565b505050565b5f801b610b2e816116f1565b610b587f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683610a85565b5050565b610b7683838360405180602001604052805f815250611256565b505050565b5f610b8582611557565b9050919050565b6060600b8054610b9b90612f0a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc790612f0a565b8015610c125780601f10610be957610100808354040283529160200191610c12565b820191905f5260205f20905b815481529060010190602001808311610bf557829003601f168201915b5050505050905090565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c8d575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c849190612900565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16610cf282610b7b565b73ffffffffffffffffffffffffffffffffffffffff1614610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f9061305a565b60405180910390fd5b610d51816118d9565b50565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3081565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee30610da2816116f1565b7f0000000000000000000000000000000000000000000000000000000000000000610e02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df9906130c2565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660085f8481526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ea0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e979061312a565b60405180910390fd5b610ea9826118d9565b3373ffffffffffffffffffffffffffffffffffffffff167f0f3207927b5662fc83604013a0f43ef142e755cba8e03dd8eabdbe53aa94683c83604051610eef9190612c72565b60405180910390a25050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610f25816116f1565b5f60075f815480929190610f3890612f94565b919050559050610f48838261195b565b3360085f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604051806020016040528042815250600c5f8381526020019081526020015f205f820151815f015590505060095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081908060018154018082558091505060019003905f5260205f20015f9091909190915055600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b91845b884306040518363ffffffff1660e01b815260040161107f929190613148565b5f604051808303815f87803b158015611096575f80fd5b505af11580156110a8573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2787de964661923b7d07c297ec434f2cd5daa8a622b2c656cc7bfdc431d14d19836040516111099190612c72565b60405180910390a3505050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461118990612f0a565b80601f01602080910402602001604051908101604052809291908181526020018280546111b590612f0a565b80156112005780601f106111d757610100808354040283529160200191611200565b820191905f5260205f20905b8154815290600101906020018083116111e357829003601f168201915b5050505050905090565b5f801b81565b61122261121b611616565b8383611978565b5050565b6008602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611261848484610969565b61127561126c611616565b85858585611ae1565b50505050565b600b805461128890612f0a565b80601f01602080910402602001604051908101604052809291908181526020018280546112b490612f0a565b80156112ff5780601f106112d6576101008083540402835291602001916112ff565b820191905f5260205f20905b8154815290600101906020018083116112e257829003601f168201915b505050505081565b606061131282611557565b505f61131c611c8d565b90505f81511161133a5760405180602001604052805f815250611365565b8061134484611ca3565b6040516020016113559291906131a9565b6040516020818303038152906040525b915050919050565b5f801b611379816116f1565b6113a37fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3083610a85565b5050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6113d482610a68565b6113dd816116f1565b6113e783836117ef565b50505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600c602052805f5260405f205f91509050805f0154905081565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611550575061154f82611d6d565b5b9050919050565b5f8061156283611e4e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036115d457826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115cb9190612c72565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b61162a8383836001611e87565b505050565b5f8061163c858585612046565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156116a657505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116dd90613216565b60405180910390fd5b809150509392505050565b611702816116fd611616565b612251565b50565b5f6117108383611116565b6117e557600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611782611616565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506117e9565b5f90505b92915050565b5f6117fa8383611116565b156118cf575f60065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061186c611616565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506118d3565b5f90505b92915050565b5f6118e55f835f61162f565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361195757816040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161194e9190612c72565b60405180910390fd5b5050565b611974828260405180602001604052805f8152506122a2565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036119e857816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016119df9190612900565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611ad491906127a0565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611c86578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611b3f9493929190613286565b6020604051808303815f875af1925050508015611b7a57506040513d601f19601f82011682018060405250810190611b7791906132e4565b60015b611bfb573d805f8114611ba8576040519150601f19603f3d011682016040523d82523d5f602084013e611bad565b606091505b505f815103611bf357836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611bea9190612900565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c8457836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611c7b9190612900565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f6001611cb1846122c5565b0190505f8167ffffffffffffffff811115611ccf57611cce612cfb565b5b6040519080825280601f01601f191660200182016040528015611d015781602001600182028036833780820191505090505b5090505f82602001820190505b600115611d62578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611d5757611d5661330f565b5b0494505f8503611d0e575b819350505050919050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611e3757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611e475750611e4682612416565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611ebf57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611ff1575f611ece84611557565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611f3857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611f4b5750611f498184611450565b155b15611f8d57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611f849190612900565b60405180910390fd5b8115611fef57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f8061205184611e4e565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146120925761209181848661247f565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461211d576120d15f855f80611e87565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461219c57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b61225b8282611116565b61229e5780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161229592919061333c565b60405180910390fd5b5050565b6122ac8383612542565b6122c06122b7611616565b5f858585611ae1565b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612321577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816123175761231661330f565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061235e576d04ee2d6d415b85acef810000000083816123545761235361330f565b5b0492506020810190505b662386f26fc10000831061238d57662386f26fc1000083816123835761238261330f565b5b0492506010810190505b6305f5e10083106123b6576305f5e10083816123ac576123ab61330f565b5b0492506008810190505b61271083106123db5761271083816123d1576123d061330f565b5b0492506004810190505b606483106123fe57606483816123f4576123f361330f565b5b0492506002810190505b600a831061240d576001810190505b80915050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61248a838383612635565b61253d575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036124fe57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016124f59190612c72565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612534929190613363565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036125b2575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016125a99190612900565b60405180910390fd5b5f6125be83835f61162f565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612630575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016126279190612900565b60405180910390fd5b505050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156126ec57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806126ad57506126ac8484611450565b5b806126eb57508273ffffffffffffffffffffffffffffffffffffffff166126d3836115dd565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61273a81612706565b8114612744575f80fd5b50565b5f8135905061275581612731565b92915050565b5f602082840312156127705761276f6126fe565b5b5f61277d84828501612747565b91505092915050565b5f8115159050919050565b61279a81612786565b82525050565b5f6020820190506127b35f830184612791565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156127f05780820151818401526020810190506127d5565b5f8484015250505050565b5f601f19601f8301169050919050565b5f612815826127b9565b61281f81856127c3565b935061282f8185602086016127d3565b612838816127fb565b840191505092915050565b5f6020820190508181035f83015261285b818461280b565b905092915050565b5f819050919050565b61287581612863565b811461287f575f80fd5b50565b5f813590506128908161286c565b92915050565b5f602082840312156128ab576128aa6126fe565b5b5f6128b884828501612882565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6128ea826128c1565b9050919050565b6128fa816128e0565b82525050565b5f6020820190506129135f8301846128f1565b92915050565b612922816128e0565b811461292c575f80fd5b50565b5f8135905061293d81612919565b92915050565b5f8060408385031215612959576129586126fe565b5b5f6129668582860161292f565b925050602061297785828601612882565b9150509250929050565b5f60208284031215612996576129956126fe565b5b5f6129a38482850161292f565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6129de81612863565b82525050565b5f6129ef83836129d5565b60208301905092915050565b5f602082019050919050565b5f612a11826129ac565b612a1b81856129b6565b9350612a26836129c6565b805f5b83811015612a56578151612a3d88826129e4565b9750612a48836129fb565b925050600181019050612a29565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b612a95816128e0565b82525050565b5f612aa68383612a8c565b60208301905092915050565b5f602082019050919050565b5f612ac882612a63565b612ad28185612a6d565b9350612add83612a7d565b805f5b83811015612b0d578151612af48882612a9b565b9750612aff83612ab2565b925050600181019050612ae0565b5085935050505092915050565b5f6040820190508181035f830152612b328185612a07565b90508181036020830152612b468184612abe565b90509392505050565b5f805f60608486031215612b6657612b656126fe565b5b5f612b738682870161292f565b9350506020612b848682870161292f565b9250506040612b9586828701612882565b9150509250925092565b5f819050919050565b612bb181612b9f565b8114612bbb575f80fd5b50565b5f81359050612bcc81612ba8565b92915050565b5f60208284031215612be757612be66126fe565b5b5f612bf484828501612bbe565b91505092915050565b612c0681612b9f565b82525050565b5f602082019050612c1f5f830184612bfd565b92915050565b5f8060408385031215612c3b57612c3a6126fe565b5b5f612c4885828601612bbe565b9250506020612c598582860161292f565b9150509250929050565b612c6c81612863565b82525050565b5f602082019050612c855f830184612c63565b92915050565b612c9481612786565b8114612c9e575f80fd5b50565b5f81359050612caf81612c8b565b92915050565b5f8060408385031215612ccb57612cca6126fe565b5b5f612cd88582860161292f565b9250506020612ce985828601612ca1565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612d31826127fb565b810181811067ffffffffffffffff82111715612d5057612d4f612cfb565b5b80604052505050565b5f612d626126f5565b9050612d6e8282612d28565b919050565b5f67ffffffffffffffff821115612d8d57612d8c612cfb565b5b612d96826127fb565b9050602081019050919050565b828183375f83830152505050565b5f612dc3612dbe84612d73565b612d59565b905082815260208101848484011115612ddf57612dde612cf7565b5b612dea848285612da3565b509392505050565b5f82601f830112612e0657612e05612cf3565b5b8135612e16848260208601612db1565b91505092915050565b5f805f8060808587031215612e3757612e366126fe565b5b5f612e448782880161292f565b9450506020612e558782880161292f565b9350506040612e6687828801612882565b925050606085013567ffffffffffffffff811115612e8757612e86612702565b5b612e9387828801612df2565b91505092959194509250565b5f8060408385031215612eb557612eb46126fe565b5b5f612ec28582860161292f565b9250506020612ed38582860161292f565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612f2157607f821691505b602082108103612f3457612f33612edd565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612f9e82612863565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fd057612fcf612f67565b5b600182019050919050565b5f606082019050612fee5f8301866128f1565b612ffb6020830185612c63565b61300860408301846128f1565b949350505050565b7f596f7520646f206e6f74206f776e207468697320746f6b656e000000000000005f82015250565b5f6130446019836127c3565b915061304f82613010565b602082019050919050565b5f6020820190508181035f83015261307181613038565b9050919050565b7f546f6b656e206973206e6f6e2d7265766f6b61626c65000000000000000000005f82015250565b5f6130ac6016836127c3565b91506130b782613078565b602082019050919050565b5f6020820190508181035f8301526130d9816130a0565b9050919050565b7f596f7520617265206e6f742074686520697373756572000000000000000000005f82015250565b5f6131146016836127c3565b915061311f826130e0565b602082019050919050565b5f6020820190508181035f83015261314181613108565b9050919050565b5f60408201905061315b5f8301856128f1565b61316860208301846128f1565b9392505050565b5f81905092915050565b5f613183826127b9565b61318d818561316f565b935061319d8185602086016127d3565b80840191505092915050565b5f6131b48285613179565b91506131c08284613179565b91508190509392505050565b7f544e547320617265206e6f6e2d7472616e7366657261626c65000000000000005f82015250565b5f6132006019836127c3565b915061320b826131cc565b602082019050919050565b5f6020820190508181035f83015261322d816131f4565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f61325882613234565b613262818561323e565b93506132728185602086016127d3565b61327b816127fb565b840191505092915050565b5f6080820190506132995f8301876128f1565b6132a660208301866128f1565b6132b36040830185612c63565b81810360608301526132c5818461324e565b905095945050505050565b5f815190506132de81612731565b92915050565b5f602082840312156132f9576132f86126fe565b5b5f613306848285016132d0565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f60408201905061334f5f8301856128f1565b61335c6020830184612bfd565b9392505050565b5f6040820190506133765f8301856128f1565b6133836020830184612c63565b939250505056fea2646970667358221220a96a5e56ec2863d07ed98cdda0ccd6d6a74fb4c3bdbc29c140cbfe3e4ad9f4af64736f6c63430008140033",
        "sourceMap": "482:5216:18:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5530:166;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2364:89:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3496:154;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3322:113;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4005:426:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;4142:578:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3810:120:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4226:136;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5328:245;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5030:126:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4786:132:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2184:118;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2938:93:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1919:208:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3572:152:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;594:64;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3166:281;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2416:516;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2854:136:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2517:93:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2187:49:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3717:144:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;699:47:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4984:233:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;887:22:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2676:255:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5295:128:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;526:62;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4642:138:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;851:30:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;814:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1088:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3927:153:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5530:166:18;5630:4;5653:36;5677:11;5653:23;:36::i;:::-;5646:43;;5530:166;;;:::o;2364:89:4:-;2409:13;2441:5;2434:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:89;:::o;3496:154::-;3563:7;3582:22;3596:7;3582:13;:22::i;:::-;;3622:21;3635:7;3622:12;:21::i;:::-;3615:28;;3496:154;;;:::o;3322:113::-;3393:35;3402:2;3406:7;3415:12;:10;:12::i;:::-;3393:8;:35::i;:::-;3322:113;;:::o;4005:426:18:-;4065:25;4092:24;4128:14;4145:18;:24;4164:4;4145:24;;;;;;;;;;;;;;;:31;;;;4128:48;;4211:6;4197:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4186:32;;4252:6;4238:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4228:31;;4275:9;4270:155;4294:6;4290:1;:10;4270:155;;;4335:18;:24;4354:4;4335:24;;;;;;;;;;;;;;;4360:1;4335:27;;;;;;;;:::i;:::-;;;;;;;;;;4321:8;4330:1;4321:11;;;;;;;;:::i;:::-;;;;;;;:41;;;;;4389:12;:25;4402:8;4411:1;4402:11;;;;;;;;:::i;:::-;;;;;;;;4389:25;;;;;;;;;;;;;;;;;;;;;4376:7;4384:1;4376:10;;;;;;;;:::i;:::-;;;;;;;:38;;;;;;;;;;;4302:3;;;;;:::i;:::-;;;;4270:155;;;;4118:313;4005:426;;;:::o;4142:578:4:-;4250:1;4236:16;;:2;:16;;;4232:87;;4305:1;4275:33;;;;;;;;;;;:::i;:::-;;;;;;;;4232:87;4537:21;4561:34;4569:2;4573:7;4582:12;:10;:12::i;:::-;4561:7;:34::i;:::-;4537:58;;4626:4;4609:21;;:13;:21;;;4605:109;;4674:4;4680:7;4689:13;4653:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;4605:109;4222:498;4142:578;;;:::o;3810:120:0:-;3875:7;3901:6;:12;3908:4;3901:12;;;;;;;;;;;:22;;;3894:29;;3810:120;;;:::o;4226:136::-;4300:18;4313:4;4300:12;:18::i;:::-;2464:16;2475:4;2464:10;:16::i;:::-;4330:25:::1;4341:4;4347:7;4330:10;:25::i;:::-;;4226:136:::0;;;:::o;5328:245::-;5443:12;:10;:12::i;:::-;5421:34;;:18;:34;;;5417:102;;5478:30;;;;;;;;;;;;;;5417:102;5529:37;5541:4;5547:18;5529:11;:37::i;:::-;;5328:245;;:::o;5030:126:18:-;2232:4:0;5088:18:18;;2464:16:0;2475:4;2464:10;:16::i;:::-;5118:31:18::1;564:24;5141:7;5118:9;:31::i;:::-;5030:126:::0;;:::o;4786:132:4:-;4872:39;4889:4;4895:2;4899:7;4872:39;;;;;;;;;;;;:16;:39::i;:::-;4786:132;;;:::o;2184:118::-;2247:7;2273:22;2287:7;2273:13;:22::i;:::-;2266:29;;2184:118;;;:::o;2938:93:18:-;2984:13;3016:8;3009:15;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2938:93;:::o;1919:208:4:-;1982:7;2022:1;2005:19;;:5;:19;;;2001:87;;2074:1;2047:30;;;;;;;;;;;:::i;:::-;;;;;;;;2001:87;2104:9;:16;2114:5;2104:16;;;;;;;;;;;;;;;;2097:23;;1919:208;;;:::o;3572:152:18:-;3653:10;3633:30;;:16;3641:7;3633;:16::i;:::-;:30;;;3625:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;3703:14;3709:7;3703:5;:14::i;:::-;3572:152;:::o;594:64::-;633:25;594:64;:::o;3166:281::-;633:25;2464:16:0;2475:4;2464:10;:16::i;:::-;3252:9:18::1;3244:44;;;;;;;;;;;;:::i;:::-;;;;;;;;;3331:10;3306:35;;:12;:21;3319:7;3306:21;;;;;;;;;;;;;;;;;;;;;:35;;;3298:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;3378:14;3384:7;3378:5;:14::i;:::-;3420:10;3407:33;;;3432:7;3407:33;;;;;;:::i;:::-;;;;;;;;3166:281:::0;;:::o;2416:516::-;564:24;2464:16:0;2475:4;2464:10;:16::i;:::-;2494:15:18::1;2512:12;;:14;;;;;;;;;:::i;:::-;;;;;2494:32;;2536:29;2546:9;2557:7;2536:9;:29::i;:::-;2599:10;2575:12;:21;2588:7;2575:21;;;;;;;;;;;;:34;;;;;;;;;;;;;;;;;;2639:30;;;;;;;;2653:15;2639:30;;::::0;2619:8:::1;:17;2628:7;2619:17;;;;;;;;;;;:50;;;;;;;;;;;2679:18;:29;2698:9;2679:29;;;;;;;;;;;;;;;2714:7;2679:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2804:15;;;;;;;;;;;2795:45;;;2841:9;2860:4;2795:71;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;2906:9;2882:43;;2894:10;2882:43;;;2917:7;2882:43;;;;;;:::i;:::-;;;;;;;;2484:448;2416:516:::0;;:::o;2854:136:0:-;2931:4;2954:6;:12;2961:4;2954:12;;;;;;;;;;;:20;;:29;2975:7;2954:29;;;;;;;;;;;;;;;;;;;;;;;;;2947:36;;2854:136;;;;:::o;2517:93:4:-;2564:13;2596:7;2589:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2517:93;:::o;2187:49:0:-;2232:4;2187:49;;;:::o;3717:144:4:-;3802:52;3821:12;:10;:12::i;:::-;3835:8;3845;3802:18;:52::i;:::-;3717:144;;:::o;699:47:18:-;;;;;;;;;;;;;;;;;;;;;;:::o;4984:233:4:-;5097:31;5110:4;5116:2;5120:7;5097:12;:31::i;:::-;5138:72;5172:12;:10;:12::i;:::-;5186:4;5192:2;5196:7;5205:4;5138:33;:72::i;:::-;4984:233;;;;:::o;887:22:18:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2676:255:4:-;2740:13;2765:22;2779:7;2765:13;:22::i;:::-;;2798:21;2822:10;:8;:10::i;:::-;2798:34;;2873:1;2855:7;2849:21;:25;:75;;;;;;;;;;;;;;;;;2891:7;2900:18;:7;:16;:18::i;:::-;2877:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2849:75;2842:82;;;2676:255;;;:::o;5295:128:18:-;2232:4:0;5354:18:18;;2464:16:0;2475:4;2464:10;:16::i;:::-;5384:32:18::1;633:25;5408:7;5384:9;:32::i;:::-;5295:128:::0;;:::o;526:62::-;564:24;526:62;:::o;4642:138:0:-;4717:18;4730:4;4717:12;:18::i;:::-;2464:16;2475:4;2464:10;:16::i;:::-;4747:26:::1;4759:4;4765:7;4747:11;:26::i;:::-;;4642:138:::0;;;:::o;851:30:18:-;;;;;;;;;;;;;:::o;814:31::-;;;:::o;1088:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;3927:153:4:-;4015:4;4038:18;:25;4057:5;4038:25;;;;;;;;;;;;;;;:35;4064:8;4038:35;;;;;;;;;;;;;;;;;;;;;;;;;4031:42;;3927:153;;;;:::o;2565:202:0:-;2650:4;2688:32;2673:47;;;:11;:47;;;;:87;;;;2724:36;2748:11;2724:23;:36::i;:::-;2673:87;2666:94;;2565:202;;;:::o;16212:241:4:-;16275:7;16294:13;16310:17;16319:7;16310:8;:17::i;:::-;16294:33;;16358:1;16341:19;;:5;:19;;;16337:88;;16406:7;16383:31;;;;;;;;;;;:::i;:::-;;;;;;;;16337:88;16441:5;16434:12;;;16212:241;;;:::o;5963:127::-;6033:7;6059:15;:24;6075:7;6059:24;;;;;;;;;;;;;;;;;;;;;6052:31;;5963:127;;;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;14492:120:4:-;14572:33;14581:2;14585:7;14594:4;14600;14572:8;:33::i;:::-;14492:120;;;:::o;4577:316:18:-;4679:7;4703:12;4718:32;4732:2;4736:7;4745:4;4718:13;:32::i;:::-;4703:47;;4781:1;4765:18;;:4;:18;;;;:38;;;;;4801:1;4787:16;;:2;:16;;;;4765:38;4761:104;;;4819:35;;;;;;;;;;:::i;:::-;;;;;;;;4761:104;4882:4;4875:11;;;4577:316;;;;;:::o;3199:103:0:-;3265:30;3276:4;3282:12;:10;:12::i;:::-;3265:10;:30::i;:::-;3199:103;:::o;6179:316::-;6256:4;6277:22;6285:4;6291:7;6277;:22::i;:::-;6272:217;;6347:4;6315:6;:12;6322:4;6315:12;;;;;;;;;;;:20;;:29;6336:7;6315:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;6397:12;:10;:12::i;:::-;6370:40;;6388:7;6370:40;;6382:4;6370:40;;;;;;;;;;6431:4;6424:11;;;;6272:217;6473:5;6466:12;;6179:316;;;;;:::o;6732:317::-;6810:4;6830:22;6838:4;6844:7;6830;:22::i;:::-;6826:217;;;6900:5;6868:6;:12;6875:4;6868:12;;;;;;;;;;;:20;;:29;6889:7;6868:29;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;6951:12;:10;:12::i;:::-;6924:40;;6942:7;6924:40;;6936:4;6924:40;;;;;;;;;;6985:4;6978:11;;;;6826:217;7027:5;7020:12;;6732:317;;;;;:::o;11510:227:4:-;11561:21;11585:40;11601:1;11605:7;11622:1;11585:7;:40::i;:::-;11561:64;;11664:1;11639:27;;:13;:27;;;11635:96;;11712:7;11689:31;;;;;;;;;;;:::i;:::-;;;;;;;;11635:96;11551:186;11510:227;:::o;10656:100::-;10723:26;10733:2;10737:7;10723:26;;;;;;;;;;;;:9;:26::i;:::-;10656:100;;:::o;15665:312::-;15792:1;15772:22;;:8;:22;;;15768:91;;15839:8;15817:31;;;;;;;;;;;:::i;:::-;;;;;;;;15768:91;15906:8;15868:18;:25;15887:5;15868:25;;;;;;;;;;;;;;;:35;15894:8;15868:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;15951:8;15929:41;;15944:5;15929:41;;;15961:8;15929:41;;;;;;:::i;:::-;;;;;;;;15665:312;;;:::o;993:924:8:-;1190:1;1173:2;:14;;;:18;1169:742;;;1227:2;1211:36;;;1248:8;1258:4;1264:7;1273:4;1211:67;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1207:694;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1585:1;1568:6;:13;:18;1564:323;;1708:2;1672:39;;;;;;;;;;;:::i;:::-;;;;;;;;1564:323;1839:6;1833:13;1824:6;1820:2;1816:15;1809:38;1207:694;1335:41;;;1325:51;;;:6;:51;;;;1321:182;;1481:2;1445:39;;;;;;;;;;;:::i;:::-;;;;;;;;1321:182;1279:238;1169:742;993:924;;;;;:::o;3173:92:4:-;3224:13;3249:9;;;;;;;;;;;;;;3173:92;:::o;1308:632:11:-;1364:13;1413:14;1450:1;1430:17;1441:5;1430:10;:17::i;:::-;:21;1413:38;;1465:20;1499:6;1488:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1465:41;;1520:11;1615:6;1611:2;1607:15;1599:6;1595:28;1588:35;;1650:247;1657:4;1650:247;;;1681:5;;;;;;;;1785:10;1780:2;1773:5;1769:14;1764:32;1759:3;1751:46;1841:2;1832:11;;;;;;:::i;:::-;;;;;1874:1;1865:5;:10;1650:247;1861:21;1650:247;1917:6;1910:13;;;;;1308:632;;;:::o;1560:300:4:-;1662:4;1712:25;1697:40;;;:11;:40;;;;:104;;;;1768:33;1753:48;;;:11;:48;;;;1697:104;:156;;;;1817:36;1841:11;1817:23;:36::i;:::-;1697:156;1678:175;;1560:300;;;:::o;5732:115::-;5798:7;5824;:16;5832:7;5824:16;;;;;;;;;;;;;;;;;;;;;5817:23;;5732:115;;;:::o;14794:662::-;14954:9;:31;;;;14983:1;14967:18;;:4;:18;;;;14954:31;14950:460;;;15001:13;15017:22;15031:7;15017:13;:22::i;:::-;15001:38;;15183:1;15167:18;;:4;:18;;;;:35;;;;;15198:4;15189:13;;:5;:13;;;;15167:35;:69;;;;;15207:29;15224:5;15231:4;15207:16;:29::i;:::-;15206:30;15167:69;15163:142;;;15285:4;15263:27;;;;;;;;;;;:::i;:::-;;;;;;;;15163:142;15323:9;15319:81;;;15377:7;15373:2;15357:28;;15366:5;15357:28;;;;;;;;;;;;15319:81;14987:423;14950:460;15447:2;15420:15;:24;15436:7;15420:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;14794:662;;;;:::o;8861:795::-;8947:7;8966:12;8981:17;8990:7;8981:8;:17::i;:::-;8966:32;;9074:1;9058:18;;:4;:18;;;9054:86;;9092:37;9109:4;9115;9121:7;9092:16;:37::i;:::-;9054:86;9200:1;9184:18;;:4;:18;;;9180:256;;9300:48;9317:1;9321:7;9338:1;9342:5;9300:8;:48::i;:::-;9410:1;9391:9;:15;9401:4;9391:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;9180:256;9464:1;9450:16;;:2;:16;;;9446:107;;9527:1;9510:9;:13;9520:2;9510:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9446:107;9582:2;9563:7;:16;9571:7;9563:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9619:7;9615:2;9600:27;;9609:4;9600:27;;;;;;;;;;;;9645:4;9638:11;;;8861:795;;;;;:::o;3432:197:0:-;3520:22;3528:4;3534:7;3520;:22::i;:::-;3515:108;;3598:7;3607:4;3565:47;;;;;;;;;;;;:::i;:::-;;;;;;;;3515:108;3432:197;;:::o;10977:207:4:-;11071:18;11077:2;11081:7;11071:5;:18::i;:::-;11099:78;11133:12;:10;:12::i;:::-;11155:1;11159:2;11163:7;11172:4;11099:33;:78::i;:::-;10977:207;;;:::o;29154:916:14:-;29207:7;29226:14;29243:1;29226:18;;29291:8;29282:5;:17;29278:103;;29328:8;29319:17;;;;;;:::i;:::-;;;;;29364:2;29354:12;;;;29278:103;29407:8;29398:5;:17;29394:103;;29444:8;29435:17;;;;;;:::i;:::-;;;;;29480:2;29470:12;;;;29394:103;29523:8;29514:5;:17;29510:103;;29560:8;29551:17;;;;;;:::i;:::-;;;;;29596:2;29586:12;;;;29510:103;29639:7;29630:5;:16;29626:100;;29675:7;29666:16;;;;;;:::i;:::-;;;;;29710:1;29700:11;;;;29626:100;29752:7;29743:5;:16;29739:100;;29788:7;29779:16;;;;;;:::i;:::-;;;;;29823:1;29813:11;;;;29739:100;29865:7;29856:5;:16;29852:100;;29901:7;29892:16;;;;;;:::i;:::-;;;;;29936:1;29926:11;;;;29852:100;29978:7;29969:5;:16;29965:66;;30015:1;30005:11;;;;29965:66;30057:6;30050:13;;;29154:916;;;:::o;763:146:12:-;839:4;877:25;862:40;;;:11;:40;;;;855:47;;763:146;;;:::o;7105:368:4:-;7217:38;7231:5;7238:7;7247;7217:13;:38::i;:::-;7212:255;;7292:1;7275:19;;:5;:19;;;7271:186;;7344:7;7321:31;;;;;;;;;;;:::i;:::-;;;;;;;;7271:186;7425:7;7434;7398:44;;;;;;;;;;;;:::i;:::-;;;;;;;;7212:255;7105:368;;;:::o;9978:327::-;10059:1;10045:16;;:2;:16;;;10041:87;;10114:1;10084:33;;;;;;;;;;;:::i;:::-;;;;;;;;10041:87;10137:21;10161:32;10169:2;10173:7;10190:1;10161:7;:32::i;:::-;10137:56;;10232:1;10207:27;;:13;:27;;;10203:96;;10285:1;10257:31;;;;;;;;;;;:::i;:::-;;;;;;;;10203:96;10031:274;9978:327;;:::o;6401:272::-;6504:4;6558:1;6539:21;;:7;:21;;;;:127;;;;;6586:7;6577:16;;:5;:16;;;:52;;;;6597:32;6614:5;6621:7;6597:16;:32::i;:::-;6577:52;:88;;;;6658:7;6633:32;;:21;6646:7;6633:12;:21::i;:::-;:32;;;6577:88;6539:127;6520:146;;6401:272;;;;;:::o;7:75:19:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:246::-;1879:1;1889:113;1903:6;1900:1;1897:13;1889:113;;;1988:1;1983:3;1979:11;1973:18;1969:1;1964:3;1960:11;1953:39;1925:2;1922:1;1918:10;1913:15;;1889:113;;;2036:1;2027:6;2022:3;2018:16;2011:27;1860:184;1798:246;;;:::o;2050:102::-;2091:6;2142:2;2138:7;2133:2;2126:5;2122:14;2118:28;2108:38;;2050:102;;;:::o;2158:377::-;2246:3;2274:39;2307:5;2274:39;:::i;:::-;2329:71;2393:6;2388:3;2329:71;:::i;:::-;2322:78;;2409:65;2467:6;2462:3;2455:4;2448:5;2444:16;2409:65;:::i;:::-;2499:29;2521:6;2499:29;:::i;:::-;2494:3;2490:39;2483:46;;2250:285;2158:377;;;;:::o;2541:313::-;2654:4;2692:2;2681:9;2677:18;2669:26;;2741:9;2735:4;2731:20;2727:1;2716:9;2712:17;2705:47;2769:78;2842:4;2833:6;2769:78;:::i;:::-;2761:86;;2541:313;;;;:::o;2860:77::-;2897:7;2926:5;2915:16;;2860:77;;;:::o;2943:122::-;3016:24;3034:5;3016:24;:::i;:::-;3009:5;3006:35;2996:63;;3055:1;3052;3045:12;2996:63;2943:122;:::o;3071:139::-;3117:5;3155:6;3142:20;3133:29;;3171:33;3198:5;3171:33;:::i;:::-;3071:139;;;;:::o;3216:329::-;3275:6;3324:2;3312:9;3303:7;3299:23;3295:32;3292:119;;;3330:79;;:::i;:::-;3292:119;3450:1;3475:53;3520:7;3511:6;3500:9;3496:22;3475:53;:::i;:::-;3465:63;;3421:117;3216:329;;;;:::o;3551:126::-;3588:7;3628:42;3621:5;3617:54;3606:65;;3551:126;;;:::o;3683:96::-;3720:7;3749:24;3767:5;3749:24;:::i;:::-;3738:35;;3683:96;;;:::o;3785:118::-;3872:24;3890:5;3872:24;:::i;:::-;3867:3;3860:37;3785:118;;:::o;3909:222::-;4002:4;4040:2;4029:9;4025:18;4017:26;;4053:71;4121:1;4110:9;4106:17;4097:6;4053:71;:::i;:::-;3909:222;;;;:::o;4137:122::-;4210:24;4228:5;4210:24;:::i;:::-;4203:5;4200:35;4190:63;;4249:1;4246;4239:12;4190:63;4137:122;:::o;4265:139::-;4311:5;4349:6;4336:20;4327:29;;4365:33;4392:5;4365:33;:::i;:::-;4265:139;;;;:::o;4410:474::-;4478:6;4486;4535:2;4523:9;4514:7;4510:23;4506:32;4503:119;;;4541:79;;:::i;:::-;4503:119;4661:1;4686:53;4731:7;4722:6;4711:9;4707:22;4686:53;:::i;:::-;4676:63;;4632:117;4788:2;4814:53;4859:7;4850:6;4839:9;4835:22;4814:53;:::i;:::-;4804:63;;4759:118;4410:474;;;;;:::o;4890:329::-;4949:6;4998:2;4986:9;4977:7;4973:23;4969:32;4966:119;;;5004:79;;:::i;:::-;4966:119;5124:1;5149:53;5194:7;5185:6;5174:9;5170:22;5149:53;:::i;:::-;5139:63;;5095:117;4890:329;;;;:::o;5225:114::-;5292:6;5326:5;5320:12;5310:22;;5225:114;;;:::o;5345:184::-;5444:11;5478:6;5473:3;5466:19;5518:4;5513:3;5509:14;5494:29;;5345:184;;;;:::o;5535:132::-;5602:4;5625:3;5617:11;;5655:4;5650:3;5646:14;5638:22;;5535:132;;;:::o;5673:108::-;5750:24;5768:5;5750:24;:::i;:::-;5745:3;5738:37;5673:108;;:::o;5787:179::-;5856:10;5877:46;5919:3;5911:6;5877:46;:::i;:::-;5955:4;5950:3;5946:14;5932:28;;5787:179;;;;:::o;5972:113::-;6042:4;6074;6069:3;6065:14;6057:22;;5972:113;;;:::o;6121:732::-;6240:3;6269:54;6317:5;6269:54;:::i;:::-;6339:86;6418:6;6413:3;6339:86;:::i;:::-;6332:93;;6449:56;6499:5;6449:56;:::i;:::-;6528:7;6559:1;6544:284;6569:6;6566:1;6563:13;6544:284;;;6645:6;6639:13;6672:63;6731:3;6716:13;6672:63;:::i;:::-;6665:70;;6758:60;6811:6;6758:60;:::i;:::-;6748:70;;6604:224;6591:1;6588;6584:9;6579:14;;6544:284;;;6548:14;6844:3;6837:10;;6245:608;;;6121:732;;;;:::o;6859:114::-;6926:6;6960:5;6954:12;6944:22;;6859:114;;;:::o;6979:184::-;7078:11;7112:6;7107:3;7100:19;7152:4;7147:3;7143:14;7128:29;;6979:184;;;;:::o;7169:132::-;7236:4;7259:3;7251:11;;7289:4;7284:3;7280:14;7272:22;;7169:132;;;:::o;7307:108::-;7384:24;7402:5;7384:24;:::i;:::-;7379:3;7372:37;7307:108;;:::o;7421:179::-;7490:10;7511:46;7553:3;7545:6;7511:46;:::i;:::-;7589:4;7584:3;7580:14;7566:28;;7421:179;;;;:::o;7606:113::-;7676:4;7708;7703:3;7699:14;7691:22;;7606:113;;;:::o;7755:732::-;7874:3;7903:54;7951:5;7903:54;:::i;:::-;7973:86;8052:6;8047:3;7973:86;:::i;:::-;7966:93;;8083:56;8133:5;8083:56;:::i;:::-;8162:7;8193:1;8178:284;8203:6;8200:1;8197:13;8178:284;;;8279:6;8273:13;8306:63;8365:3;8350:13;8306:63;:::i;:::-;8299:70;;8392:60;8445:6;8392:60;:::i;:::-;8382:70;;8238:224;8225:1;8222;8218:9;8213:14;;8178:284;;;8182:14;8478:3;8471:10;;7879:608;;;7755:732;;;;:::o;8493:634::-;8714:4;8752:2;8741:9;8737:18;8729:26;;8801:9;8795:4;8791:20;8787:1;8776:9;8772:17;8765:47;8829:108;8932:4;8923:6;8829:108;:::i;:::-;8821:116;;8984:9;8978:4;8974:20;8969:2;8958:9;8954:18;8947:48;9012:108;9115:4;9106:6;9012:108;:::i;:::-;9004:116;;8493:634;;;;;:::o;9133:619::-;9210:6;9218;9226;9275:2;9263:9;9254:7;9250:23;9246:32;9243:119;;;9281:79;;:::i;:::-;9243:119;9401:1;9426:53;9471:7;9462:6;9451:9;9447:22;9426:53;:::i;:::-;9416:63;;9372:117;9528:2;9554:53;9599:7;9590:6;9579:9;9575:22;9554:53;:::i;:::-;9544:63;;9499:118;9656:2;9682:53;9727:7;9718:6;9707:9;9703:22;9682:53;:::i;:::-;9672:63;;9627:118;9133:619;;;;;:::o;9758:77::-;9795:7;9824:5;9813:16;;9758:77;;;:::o;9841:122::-;9914:24;9932:5;9914:24;:::i;:::-;9907:5;9904:35;9894:63;;9953:1;9950;9943:12;9894:63;9841:122;:::o;9969:139::-;10015:5;10053:6;10040:20;10031:29;;10069:33;10096:5;10069:33;:::i;:::-;9969:139;;;;:::o;10114:329::-;10173:6;10222:2;10210:9;10201:7;10197:23;10193:32;10190:119;;;10228:79;;:::i;:::-;10190:119;10348:1;10373:53;10418:7;10409:6;10398:9;10394:22;10373:53;:::i;:::-;10363:63;;10319:117;10114:329;;;;:::o;10449:118::-;10536:24;10554:5;10536:24;:::i;:::-;10531:3;10524:37;10449:118;;:::o;10573:222::-;10666:4;10704:2;10693:9;10689:18;10681:26;;10717:71;10785:1;10774:9;10770:17;10761:6;10717:71;:::i;:::-;10573:222;;;;:::o;10801:474::-;10869:6;10877;10926:2;10914:9;10905:7;10901:23;10897:32;10894:119;;;10932:79;;:::i;:::-;10894:119;11052:1;11077:53;11122:7;11113:6;11102:9;11098:22;11077:53;:::i;:::-;11067:63;;11023:117;11179:2;11205:53;11250:7;11241:6;11230:9;11226:22;11205:53;:::i;:::-;11195:63;;11150:118;10801:474;;;;;:::o;11281:118::-;11368:24;11386:5;11368:24;:::i;:::-;11363:3;11356:37;11281:118;;:::o;11405:222::-;11498:4;11536:2;11525:9;11521:18;11513:26;;11549:71;11617:1;11606:9;11602:17;11593:6;11549:71;:::i;:::-;11405:222;;;;:::o;11633:116::-;11703:21;11718:5;11703:21;:::i;:::-;11696:5;11693:32;11683:60;;11739:1;11736;11729:12;11683:60;11633:116;:::o;11755:133::-;11798:5;11836:6;11823:20;11814:29;;11852:30;11876:5;11852:30;:::i;:::-;11755:133;;;;:::o;11894:468::-;11959:6;11967;12016:2;12004:9;11995:7;11991:23;11987:32;11984:119;;;12022:79;;:::i;:::-;11984:119;12142:1;12167:53;12212:7;12203:6;12192:9;12188:22;12167:53;:::i;:::-;12157:63;;12113:117;12269:2;12295:50;12337:7;12328:6;12317:9;12313:22;12295:50;:::i;:::-;12285:60;;12240:115;11894:468;;;;;:::o;12368:117::-;12477:1;12474;12467:12;12491:117;12600:1;12597;12590:12;12614:180;12662:77;12659:1;12652:88;12759:4;12756:1;12749:15;12783:4;12780:1;12773:15;12800:281;12883:27;12905:4;12883:27;:::i;:::-;12875:6;12871:40;13013:6;13001:10;12998:22;12977:18;12965:10;12962:34;12959:62;12956:88;;;13024:18;;:::i;:::-;12956:88;13064:10;13060:2;13053:22;12843:238;12800:281;;:::o;13087:129::-;13121:6;13148:20;;:::i;:::-;13138:30;;13177:33;13205:4;13197:6;13177:33;:::i;:::-;13087:129;;;:::o;13222:307::-;13283:4;13373:18;13365:6;13362:30;13359:56;;;13395:18;;:::i;:::-;13359:56;13433:29;13455:6;13433:29;:::i;:::-;13425:37;;13517:4;13511;13507:15;13499:23;;13222:307;;;:::o;13535:146::-;13632:6;13627:3;13622;13609:30;13673:1;13664:6;13659:3;13655:16;13648:27;13535:146;;;:::o;13687:423::-;13764:5;13789:65;13805:48;13846:6;13805:48;:::i;:::-;13789:65;:::i;:::-;13780:74;;13877:6;13870:5;13863:21;13915:4;13908:5;13904:16;13953:3;13944:6;13939:3;13935:16;13932:25;13929:112;;;13960:79;;:::i;:::-;13929:112;14050:54;14097:6;14092:3;14087;14050:54;:::i;:::-;13770:340;13687:423;;;;;:::o;14129:338::-;14184:5;14233:3;14226:4;14218:6;14214:17;14210:27;14200:122;;14241:79;;:::i;:::-;14200:122;14358:6;14345:20;14383:78;14457:3;14449:6;14442:4;14434:6;14430:17;14383:78;:::i;:::-;14374:87;;14190:277;14129:338;;;;:::o;14473:943::-;14568:6;14576;14584;14592;14641:3;14629:9;14620:7;14616:23;14612:33;14609:120;;;14648:79;;:::i;:::-;14609:120;14768:1;14793:53;14838:7;14829:6;14818:9;14814:22;14793:53;:::i;:::-;14783:63;;14739:117;14895:2;14921:53;14966:7;14957:6;14946:9;14942:22;14921:53;:::i;:::-;14911:63;;14866:118;15023:2;15049:53;15094:7;15085:6;15074:9;15070:22;15049:53;:::i;:::-;15039:63;;14994:118;15179:2;15168:9;15164:18;15151:32;15210:18;15202:6;15199:30;15196:117;;;15232:79;;:::i;:::-;15196:117;15337:62;15391:7;15382:6;15371:9;15367:22;15337:62;:::i;:::-;15327:72;;15122:287;14473:943;;;;;;;:::o;15422:474::-;15490:6;15498;15547:2;15535:9;15526:7;15522:23;15518:32;15515:119;;;15553:79;;:::i;:::-;15515:119;15673:1;15698:53;15743:7;15734:6;15723:9;15719:22;15698:53;:::i;:::-;15688:63;;15644:117;15800:2;15826:53;15871:7;15862:6;15851:9;15847:22;15826:53;:::i;:::-;15816:63;;15771:118;15422:474;;;;;:::o;15902:180::-;15950:77;15947:1;15940:88;16047:4;16044:1;16037:15;16071:4;16068:1;16061:15;16088:320;16132:6;16169:1;16163:4;16159:12;16149:22;;16216:1;16210:4;16206:12;16237:18;16227:81;;16293:4;16285:6;16281:17;16271:27;;16227:81;16355:2;16347:6;16344:14;16324:18;16321:38;16318:84;;16374:18;;:::i;:::-;16318:84;16139:269;16088:320;;;:::o;16414:180::-;16462:77;16459:1;16452:88;16559:4;16556:1;16549:15;16583:4;16580:1;16573:15;16600:180;16648:77;16645:1;16638:88;16745:4;16742:1;16735:15;16769:4;16766:1;16759:15;16786:233;16825:3;16848:24;16866:5;16848:24;:::i;:::-;16839:33;;16894:66;16887:5;16884:77;16881:103;;16964:18;;:::i;:::-;16881:103;17011:1;17004:5;17000:13;16993:20;;16786:233;;;:::o;17025:442::-;17174:4;17212:2;17201:9;17197:18;17189:26;;17225:71;17293:1;17282:9;17278:17;17269:6;17225:71;:::i;:::-;17306:72;17374:2;17363:9;17359:18;17350:6;17306:72;:::i;:::-;17388;17456:2;17445:9;17441:18;17432:6;17388:72;:::i;:::-;17025:442;;;;;;:::o;17473:175::-;17613:27;17609:1;17601:6;17597:14;17590:51;17473:175;:::o;17654:366::-;17796:3;17817:67;17881:2;17876:3;17817:67;:::i;:::-;17810:74;;17893:93;17982:3;17893:93;:::i;:::-;18011:2;18006:3;18002:12;17995:19;;17654:366;;;:::o;18026:419::-;18192:4;18230:2;18219:9;18215:18;18207:26;;18279:9;18273:4;18269:20;18265:1;18254:9;18250:17;18243:47;18307:131;18433:4;18307:131;:::i;:::-;18299:139;;18026:419;;;:::o;18451:172::-;18591:24;18587:1;18579:6;18575:14;18568:48;18451:172;:::o;18629:366::-;18771:3;18792:67;18856:2;18851:3;18792:67;:::i;:::-;18785:74;;18868:93;18957:3;18868:93;:::i;:::-;18986:2;18981:3;18977:12;18970:19;;18629:366;;;:::o;19001:419::-;19167:4;19205:2;19194:9;19190:18;19182:26;;19254:9;19248:4;19244:20;19240:1;19229:9;19225:17;19218:47;19282:131;19408:4;19282:131;:::i;:::-;19274:139;;19001:419;;;:::o;19426:172::-;19566:24;19562:1;19554:6;19550:14;19543:48;19426:172;:::o;19604:366::-;19746:3;19767:67;19831:2;19826:3;19767:67;:::i;:::-;19760:74;;19843:93;19932:3;19843:93;:::i;:::-;19961:2;19956:3;19952:12;19945:19;;19604:366;;;:::o;19976:419::-;20142:4;20180:2;20169:9;20165:18;20157:26;;20229:9;20223:4;20219:20;20215:1;20204:9;20200:17;20193:47;20257:131;20383:4;20257:131;:::i;:::-;20249:139;;19976:419;;;:::o;20401:332::-;20522:4;20560:2;20549:9;20545:18;20537:26;;20573:71;20641:1;20630:9;20626:17;20617:6;20573:71;:::i;:::-;20654:72;20722:2;20711:9;20707:18;20698:6;20654:72;:::i;:::-;20401:332;;;;;:::o;20739:148::-;20841:11;20878:3;20863:18;;20739:148;;;;:::o;20893:390::-;20999:3;21027:39;21060:5;21027:39;:::i;:::-;21082:89;21164:6;21159:3;21082:89;:::i;:::-;21075:96;;21180:65;21238:6;21233:3;21226:4;21219:5;21215:16;21180:65;:::i;:::-;21270:6;21265:3;21261:16;21254:23;;21003:280;20893:390;;;;:::o;21289:435::-;21469:3;21491:95;21582:3;21573:6;21491:95;:::i;:::-;21484:102;;21603:95;21694:3;21685:6;21603:95;:::i;:::-;21596:102;;21715:3;21708:10;;21289:435;;;;;:::o;21730:175::-;21870:27;21866:1;21858:6;21854:14;21847:51;21730:175;:::o;21911:366::-;22053:3;22074:67;22138:2;22133:3;22074:67;:::i;:::-;22067:74;;22150:93;22239:3;22150:93;:::i;:::-;22268:2;22263:3;22259:12;22252:19;;21911:366;;;:::o;22283:419::-;22449:4;22487:2;22476:9;22472:18;22464:26;;22536:9;22530:4;22526:20;22522:1;22511:9;22507:17;22500:47;22564:131;22690:4;22564:131;:::i;:::-;22556:139;;22283:419;;;:::o;22708:98::-;22759:6;22793:5;22787:12;22777:22;;22708:98;;;:::o;22812:168::-;22895:11;22929:6;22924:3;22917:19;22969:4;22964:3;22960:14;22945:29;;22812:168;;;;:::o;22986:373::-;23072:3;23100:38;23132:5;23100:38;:::i;:::-;23154:70;23217:6;23212:3;23154:70;:::i;:::-;23147:77;;23233:65;23291:6;23286:3;23279:4;23272:5;23268:16;23233:65;:::i;:::-;23323:29;23345:6;23323:29;:::i;:::-;23318:3;23314:39;23307:46;;23076:283;22986:373;;;;:::o;23365:640::-;23560:4;23598:3;23587:9;23583:19;23575:27;;23612:71;23680:1;23669:9;23665:17;23656:6;23612:71;:::i;:::-;23693:72;23761:2;23750:9;23746:18;23737:6;23693:72;:::i;:::-;23775;23843:2;23832:9;23828:18;23819:6;23775:72;:::i;:::-;23894:9;23888:4;23884:20;23879:2;23868:9;23864:18;23857:48;23922:76;23993:4;23984:6;23922:76;:::i;:::-;23914:84;;23365:640;;;;;;;:::o;24011:141::-;24067:5;24098:6;24092:13;24083:22;;24114:32;24140:5;24114:32;:::i;:::-;24011:141;;;;:::o;24158:349::-;24227:6;24276:2;24264:9;24255:7;24251:23;24247:32;24244:119;;;24282:79;;:::i;:::-;24244:119;24402:1;24427:63;24482:7;24473:6;24462:9;24458:22;24427:63;:::i;:::-;24417:73;;24373:127;24158:349;;;;:::o;24513:180::-;24561:77;24558:1;24551:88;24658:4;24655:1;24648:15;24682:4;24679:1;24672:15;24699:332;24820:4;24858:2;24847:9;24843:18;24835:26;;24871:71;24939:1;24928:9;24924:17;24915:6;24871:71;:::i;:::-;24952:72;25020:2;25009:9;25005:18;24996:6;24952:72;:::i;:::-;24699:332;;;;;:::o;25037:::-;25158:4;25196:2;25185:9;25181:18;25173:26;;25209:71;25277:1;25266:9;25262:17;25253:6;25209:71;:::i;:::-;25290:72;25358:2;25347:9;25343:18;25334:6;25290:72;:::i;:::-;25037:332;;;;;:::o",
        "linkReferences": {},
        "immutableReferences": {
            "7085": [
                {
                    "start": 3492,
                    "length": 32
                },
                {
                    "start": 5140,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "DEFAULT_ADMIN_ROLE()": "a217fddf",
        "MINTER_ROLE()": "d5391393",
        "REVOKER_ROLE()": "7c4acabf",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "burnToken(uint256)": "7b47ec1a",
        "factoryContract()": "de11c94a",
        "getApproved(uint256)": "081812fc",
        "getIssuedTokens(address)": "14e2d2a0",
        "getRoleAdmin(bytes32)": "248a9ca3",
        "grantMinterRole(address)": "3dd1eb61",
        "grantRevokerRole(address)": "cc49d0c3",
        "grantRole(bytes32,address)": "2f2ff15d",
        "hasRole(bytes32,address)": "91d14854",
        "imageURL()": "b90497e0",
        "isApprovedForAll(address,address)": "e985e9c5",
        "issueToken(address)": "89034082",
        "metadata(uint256)": "e3684e39",
        "name()": "06fdde03",
        "ownerOf(uint256)": "6352211e",
        "renounceRole(bytes32,address)": "36568abe",
        "revokable()": "e11360b3",
        "revokeRole(bytes32,address)": "d547741f",
        "revokeToken(uint256)": "7dc9e79b",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenImageURL()": "68a1059a",
        "tokenIssuers(uint256)": "b7abc58d",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_revokable\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"_factoryContract\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_imageURL\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AccessControlBadConfirmation\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"neededRole\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"issuer\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"TokenIssued\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"revoker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"TokenRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"REVOKER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burnToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factoryContract\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getIssuedTokens\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"address[]\",\"name\":\"issuers\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantMinterRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRevokerRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"imageURL\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"issueToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"metadata\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"issuedAt\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"callerConfirmation\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"revokable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"revokeToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenImageURL\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenIssuers\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"A trust-based non-transferable token contract with optional revocation support.\",\"errors\":{\"AccessControlBadConfirmation()\":[{\"details\":\"The caller of a function is not the expected one. NOTE: Don't confuse with {AccessControlUnauthorizedAccount}.\"}],\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"details\":\"The `account` is missing a role.\"}],\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted to signal this.\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call. This account bears the admin role (for the granted role). Expected in cases where the role was granted using the internal {AccessControl-_grantRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"},\"TokenIssued(address,address,uint256)\":{\"details\":\"Event emitted when a token is issued.\"},\"TokenRevoked(address,uint256)\":{\"details\":\"Event emitted when a token is revoked.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"burnToken(uint256)\":{\"details\":\"Allows the owner of a token to burn it.\",\"params\":{\"tokenId\":\"The ID of the token to burn.\"}},\"constructor\":{\"details\":\"Constructor to initialize the contract.\",\"params\":{\"_factoryContract\":\"Address of the factory contract.\",\"_imageURL\":\"contains the image associated with the token\",\"_revokable\":\"Boolean indicating if the token can be revoked.\",\"admin\":\"The address of the contract administrator.\",\"name\":\"The name of the token.\",\"symbol\":\"The symbol of the token.\"}},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"getIssuedTokens(address)\":{\"details\":\"Returns the list of tokens issued to a recipient and their issuers.\",\"params\":{\"user\":\"The address of the user.\"},\"returns\":{\"issuers\":\"The list of addresses that issued each token.\",\"tokenIds\":\"The list of token IDs issued to the user.\"}},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantMinterRole(address)\":{\"details\":\"Grants the minter role to an account.\",\"params\":{\"account\":\"The address to be granted the minter role.\"}},\"grantRevokerRole(address)\":{\"details\":\"Grants the revoker role to an account.\",\"params\":{\"account\":\"The address to be granted the revoker role.\"}},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"issueToken(address)\":{\"details\":\"Issues a new trust token to a recipient.\",\"params\":{\"recipient\":\"The address receiving the token.\"}},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"revokeToken(uint256)\":{\"details\":\"Revokes a trust token if revocation is enabled.\",\"params\":{\"tokenId\":\"The ID of the token to revoke.\"}},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"Overrides supportsInterface to include AccessControl and ERC721 support.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"title\":\"TNT\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TNT.sol\":\"TNT\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xc1bebdee8943bd5e9ef1e0f2e63296aa1dd4171a66b9e74d0286220e891e1458\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://928cf2f0042c606f3dcb21bd8a272573f462a215cd65285d2d6b407f31e9bd67\",\"dweb:/ipfs/QmWGxjckno6sfjHPX5naPnsfsyisgy4PJDf46eLw9umfpx\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x4d9a2b261b56a1e4a37bb038151dec98b952fed16de2bdfdda27e38e2b12b530\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f724110f7aeb6151af800ab8c12e6060b29bda9e013f0ccb331eb754d6a7cbf0\",\"dweb:/ipfs/QmUcjzCZpxtUPdEThtAzE1f9LvuJiUGZxTdH9N6bHrb5Cf\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x39ed367e54765186281efcfe83e47cf0ad62cc879f10e191360712507125f29a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2c5ae6d85bd48cca8d6d2fcec8c63efd86f56f8a5832577a47e403ce0e65cb09\",\"dweb:/ipfs/QmUtcS8AbRSWhuc61puYet58os8FvSqm329ChoW8wwZXZk\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11\",\"dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34\",\"dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0xddab643169f47a2c5291afafcbfdca045d9e6835553307d090bc048b6dabd0ac\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d0ffbacfee42977167b3c75bd4787f8b72a7ab1176abd544f3dff662c6528e24\",\"dweb:/ipfs/QmUprM1cWCyaQ3LDjHA2DhwiPs3wekQ6MWXHFZdMMxpcyX\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x81c274a60a7ae232ae3dc9ff3a4011b4849a853c13b0832cd3351bb1bb2f0dae\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9da0c20dc74358a2a76330818f3bac9d1e2ce3371aec847b9cbf5d147fbae4f6\",\"dweb:/ipfs/QmeczhmnFv1hbXKGLwbYXY6Rrytc9a5A2YaRi5QMMgjPnb\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xddce8e17e3d3f9ed818b4f4c4478a8262aab8b11ed322f1bf5ed705bb4bd97fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8084aa71a4cc7d2980972412a88fe4f114869faea3fefa5436431644eb5c0287\",\"dweb:/ipfs/Qmbqfs5dRdPvHVKY8kTaeyc65NdqXRQwRK7h9s5UJEhD1p\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c5fab4970634f9ab9a620983dc1c8a30153981a0b1a521666e269d0a11399d3\",\"dweb:/ipfs/QmVRnBC575MESGkEHndjujtR7qub2FzU9RWy9eKLp4hPZB\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]},\"src/TNT.sol\":{\"keccak256\":\"0x69198f93eb12110aa5cdcb0195bd6c23a8a6221da1a1d2a3e0b4ed2760dbb226\",\"license\":\"AEL\",\"urls\":[\"bzz-raw://0af8a8dbb5e39b64bd09bfa899fd75bf327d3e6a0ababdd74b647a961f79fbfc\",\"dweb:/ipfs/QmPu1kBtWfM5LK6N19hww5JRMbpniCpxucKZ5iaq3a38db\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "admin",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "symbol",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "_revokable",
                            "type": "bool"
                        },
                        {
                            "internalType": "address",
                            "name": "_factoryContract",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_imageURL",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "AccessControlBadConfirmation"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "neededRole",
                            "type": "bytes32"
                        }
                    ],
                    "type": "error",
                    "name": "AccessControlUnauthorizedAccount"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721IncorrectOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InsufficientApproval"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "approver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidApprover"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidOperator"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidReceiver"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidSender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721NonexistentToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "approved",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32",
                            "indexed": true
                        },
                        {
                            "internalType": "bytes32",
                            "name": "previousAdminRole",
                            "type": "bytes32",
                            "indexed": true
                        },
                        {
                            "internalType": "bytes32",
                            "name": "newAdminRole",
                            "type": "bytes32",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "RoleAdminChanged",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "RoleGranted",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "RoleRevoked",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "issuer",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TokenIssued",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "revoker",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TokenRevoked",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DEFAULT_ADMIN_ROLE",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "MINTER_ROLE",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "REVOKER_ROLE",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "burnToken"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "factoryContract",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getApproved",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getIssuedTokens",
                    "outputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "tokenIds",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "issuers",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getRoleAdmin",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "grantMinterRole"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "grantRevokerRole"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "grantRole"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "hasRole",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "imageURL",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isApprovedForAll",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "issueToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "metadata",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "issuedAt",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "callerConfirmation",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "renounceRole"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "revokable",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "revokeRole"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "revokeToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "safeTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "safeTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "interfaceId",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "supportsInterface",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "tokenImageURL",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "tokenIssuers",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "tokenURI",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "approve(address,uint256)": {
                        "details": "See {IERC721-approve}."
                    },
                    "balanceOf(address)": {
                        "details": "See {IERC721-balanceOf}."
                    },
                    "burnToken(uint256)": {
                        "details": "Allows the owner of a token to burn it.",
                        "params": {
                            "tokenId": "The ID of the token to burn."
                        }
                    },
                    "constructor": {
                        "details": "Constructor to initialize the contract.",
                        "params": {
                            "_factoryContract": "Address of the factory contract.",
                            "_imageURL": "contains the image associated with the token",
                            "_revokable": "Boolean indicating if the token can be revoked.",
                            "admin": "The address of the contract administrator.",
                            "name": "The name of the token.",
                            "symbol": "The symbol of the token."
                        }
                    },
                    "getApproved(uint256)": {
                        "details": "See {IERC721-getApproved}."
                    },
                    "getIssuedTokens(address)": {
                        "details": "Returns the list of tokens issued to a recipient and their issuers.",
                        "params": {
                            "user": "The address of the user."
                        },
                        "returns": {
                            "issuers": "The list of addresses that issued each token.",
                            "tokenIds": "The list of token IDs issued to the user."
                        }
                    },
                    "getRoleAdmin(bytes32)": {
                        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
                    },
                    "grantMinterRole(address)": {
                        "details": "Grants the minter role to an account.",
                        "params": {
                            "account": "The address to be granted the minter role."
                        }
                    },
                    "grantRevokerRole(address)": {
                        "details": "Grants the revoker role to an account.",
                        "params": {
                            "account": "The address to be granted the revoker role."
                        }
                    },
                    "grantRole(bytes32,address)": {
                        "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event."
                    },
                    "hasRole(bytes32,address)": {
                        "details": "Returns `true` if `account` has been granted `role`."
                    },
                    "isApprovedForAll(address,address)": {
                        "details": "See {IERC721-isApprovedForAll}."
                    },
                    "issueToken(address)": {
                        "details": "Issues a new trust token to a recipient.",
                        "params": {
                            "recipient": "The address receiving the token."
                        }
                    },
                    "name()": {
                        "details": "See {IERC721Metadata-name}."
                    },
                    "ownerOf(uint256)": {
                        "details": "See {IERC721-ownerOf}."
                    },
                    "renounceRole(bytes32,address)": {
                        "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event."
                    },
                    "revokeRole(bytes32,address)": {
                        "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event."
                    },
                    "revokeToken(uint256)": {
                        "details": "Revokes a trust token if revocation is enabled.",
                        "params": {
                            "tokenId": "The ID of the token to revoke."
                        }
                    },
                    "safeTransferFrom(address,address,uint256)": {
                        "details": "See {IERC721-safeTransferFrom}."
                    },
                    "safeTransferFrom(address,address,uint256,bytes)": {
                        "details": "See {IERC721-safeTransferFrom}."
                    },
                    "setApprovalForAll(address,bool)": {
                        "details": "See {IERC721-setApprovalForAll}."
                    },
                    "supportsInterface(bytes4)": {
                        "details": "Overrides supportsInterface to include AccessControl and ERC721 support."
                    },
                    "symbol()": {
                        "details": "See {IERC721Metadata-symbol}."
                    },
                    "tokenURI(uint256)": {
                        "details": "See {IERC721Metadata-tokenURI}."
                    },
                    "transferFrom(address,address,uint256)": {
                        "details": "See {IERC721-transferFrom}."
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/",
                "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/"
            ],
            "optimizer": {
                "enabled": false,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "src/TNT.sol": "TNT"
            },
            "evmVersion": "shanghai",
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
                "keccak256": "0xc1bebdee8943bd5e9ef1e0f2e63296aa1dd4171a66b9e74d0286220e891e1458",
                "urls": [
                    "bzz-raw://928cf2f0042c606f3dcb21bd8a272573f462a215cd65285d2d6b407f31e9bd67",
                    "dweb:/ipfs/QmWGxjckno6sfjHPX5naPnsfsyisgy4PJDf46eLw9umfpx"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
                "keccak256": "0x4d9a2b261b56a1e4a37bb038151dec98b952fed16de2bdfdda27e38e2b12b530",
                "urls": [
                    "bzz-raw://f724110f7aeb6151af800ab8c12e6060b29bda9e013f0ccb331eb754d6a7cbf0",
                    "dweb:/ipfs/QmUcjzCZpxtUPdEThtAzE1f9LvuJiUGZxTdH9N6bHrb5Cf"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
                "urls": [
                    "bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
                    "dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
                "keccak256": "0x39ed367e54765186281efcfe83e47cf0ad62cc879f10e191360712507125f29a",
                "urls": [
                    "bzz-raw://2c5ae6d85bd48cca8d6d2fcec8c63efd86f56f8a5832577a47e403ce0e65cb09",
                    "dweb:/ipfs/QmUtcS8AbRSWhuc61puYet58os8FvSqm329ChoW8wwZXZk"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
                "keccak256": "0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261",
                "urls": [
                    "bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11",
                    "dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
                "keccak256": "0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d",
                "urls": [
                    "bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34",
                    "dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
                "keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
                "urls": [
                    "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
                    "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol": {
                "keccak256": "0xddab643169f47a2c5291afafcbfdca045d9e6835553307d090bc048b6dabd0ac",
                "urls": [
                    "bzz-raw://d0ffbacfee42977167b3c75bd4787f8b72a7ab1176abd544f3dff662c6528e24",
                    "dweb:/ipfs/QmUprM1cWCyaQ3LDjHA2DhwiPs3wekQ6MWXHFZdMMxpcyX"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
                "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
                "urls": [
                    "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
                    "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
                "keccak256": "0x81c274a60a7ae232ae3dc9ff3a4011b4849a853c13b0832cd3351bb1bb2f0dae",
                "urls": [
                    "bzz-raw://9da0c20dc74358a2a76330818f3bac9d1e2ce3371aec847b9cbf5d147fbae4f6",
                    "dweb:/ipfs/QmeczhmnFv1hbXKGLwbYXY6Rrytc9a5A2YaRi5QMMgjPnb"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
                "keccak256": "0xddce8e17e3d3f9ed818b4f4c4478a8262aab8b11ed322f1bf5ed705bb4bd97fa",
                "urls": [
                    "bzz-raw://8084aa71a4cc7d2980972412a88fe4f114869faea3fefa5436431644eb5c0287",
                    "dweb:/ipfs/Qmbqfs5dRdPvHVKY8kTaeyc65NdqXRQwRK7h9s5UJEhD1p"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
                "keccak256": "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
                "urls": [
                    "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
                    "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
                "keccak256": "0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6",
                "urls": [
                    "bzz-raw://6c5fab4970634f9ab9a620983dc1c8a30153981a0b1a521666e269d0a11399d3",
                    "dweb:/ipfs/QmVRnBC575MESGkEHndjujtR7qub2FzU9RWy9eKLp4hPZB"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol": {
                "keccak256": "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
                "urls": [
                    "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
                    "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
                "keccak256": "0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3",
                "urls": [
                    "bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03",
                    "dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"
                ],
                "license": "MIT"
            },
            "src/TNT.sol": {
                "keccak256": "0x69198f93eb12110aa5cdcb0195bd6c23a8a6221da1a1d2a3e0b4ed2760dbb226",
                "urls": [
                    "bzz-raw://0af8a8dbb5e39b64bd09bfa899fd75bf327d3e6a0ababdd74b647a961f79fbfc",
                    "dweb:/ipfs/QmPu1kBtWfM5LK6N19hww5JRMbpniCpxucKZ5iaq3a38db"
                ],
                "license": "AEL"
            }
        },
        "version": 1
    },
    "id": 18
}
export const TNTAbi = TNT.abi;
