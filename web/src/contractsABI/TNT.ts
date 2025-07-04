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
            "name": "setImageURL",
            "inputs": [
                {
                    "name": "newURL",
                    "type": "string",
                    "internalType": "string"
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
        "object": "0x60a060405234801562000010575f80fd5b5060405162003f9838038062003f988339818101604052810190620000369190620004c9565b8484815f9081620000489190620007f5565b5080600190816200005a9190620007f5565b505050620000715f801b876200014260201b60201c565b50620000a47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6876200014260201b60201c565b50620000d77fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee30876200014260201b60201c565b5082151560808115158152505081600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b9081620001359190620007f5565b50505050505050620008d9565b5f6200015583836200023e60201b60201c565b6200023457600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550620001d0620002a260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000238565b5f90505b92915050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620002e582620002ba565b9050919050565b620002f781620002d9565b811462000302575f80fd5b50565b5f815190506200031581620002ec565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200036b8262000323565b810181811067ffffffffffffffff821117156200038d576200038c62000333565b5b80604052505050565b5f620003a1620002a9565b9050620003af828262000360565b919050565b5f67ffffffffffffffff821115620003d157620003d062000333565b5b620003dc8262000323565b9050602081019050919050565b5f5b8381101562000408578082015181840152602081019050620003eb565b5f8484015250505050565b5f620004296200042384620003b4565b62000396565b9050828152602081018484840111156200044857620004476200031f565b5b62000455848285620003e9565b509392505050565b5f82601f8301126200047457620004736200031b565b5b81516200048684826020860162000413565b91505092915050565b5f8115159050919050565b620004a5816200048f565b8114620004b0575f80fd5b50565b5f81519050620004c3816200049a565b92915050565b5f805f805f8060c08789031215620004e657620004e5620002b2565b5b5f620004f589828a0162000305565b965050602087015167ffffffffffffffff811115620005195762000518620002b6565b5b6200052789828a016200045d565b955050604087015167ffffffffffffffff8111156200054b576200054a620002b6565b5b6200055989828a016200045d565b94505060606200056c89828a01620004b3565b93505060806200057f89828a0162000305565b92505060a087015167ffffffffffffffff811115620005a357620005a2620002b6565b5b620005b189828a016200045d565b9150509295509295509295565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200060d57607f821691505b602082108103620006235762000622620005c8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620006877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200064a565b6200069386836200064a565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620006dd620006d7620006d184620006ab565b620006b4565b620006ab565b9050919050565b5f819050919050565b620006f883620006bd565b620007106200070782620006e4565b84845462000656565b825550505050565b5f90565b6200072662000718565b62000733818484620006ed565b505050565b5b818110156200075a576200074e5f826200071c565b60018101905062000739565b5050565b601f821115620007a957620007738162000629565b6200077e846200063b565b810160208510156200078e578190505b620007a66200079d856200063b565b83018262000738565b50505b505050565b5f82821c905092915050565b5f620007cb5f1984600802620007ae565b1980831691505092915050565b5f620007e58383620007ba565b9150826002028217905092915050565b6200080082620005be565b67ffffffffffffffff8111156200081c576200081b62000333565b5b620008288254620005f5565b620008358282856200075e565b5f60209050601f8311600181146200086b575f841562000856578287015190505b620008628582620007d8565b865550620008d1565b601f1984166200087b8662000629565b5f5b82811015620008a4578489015182556001820191506020850194506020810190506200087d565b86831015620008c45784890151620008c0601f891682620007ba565b8355505b6001600288020188555050505b505050505050565b60805161369f620008f95f395f8181610d3201526113a2015261369f5ff3fe608060405234801561000f575f80fd5b50600436106101f9575f3560e01c80637dc9e79b11610118578063b90497e0116100ab578063d547741f1161007a578063d547741f146105ce578063de11c94a146105ea578063e11360b314610608578063e3684e3914610626578063e985e9c514610656576101f9565b8063b90497e014610546578063c87b56dd14610564578063cc49d0c314610594578063d5391393146105b0576101f9565b8063a217fddf116100e7578063a217fddf146104c0578063a22cb465146104de578063b7abc58d146104fa578063b88d4fde1461052a576101f9565b80637dc9e79b1461043a578063890340821461045657806391d148541461047257806395d89b41146104a2576101f9565b806336568abe116101905780636352211e1161015f5780636352211e146103a057806370a08231146103d05780637b47ec1a146104005780637c4acabf1461041c576101f9565b806336568abe146103305780633dd1eb611461034c57806342842e0e1461036857806358e792ee14610384576101f9565b806314e2d2a0116101cc57806314e2d2a01461029757806323b872dd146102c8578063248a9ca3146102e45780632f2ff15d14610314576101f9565b806301ffc9a7146101fd57806306fdde031461022d578063081812fc1461024b578063095ea7b31461027b575b5f80fd5b610217600480360381019061021291906126e9565b610686565b604051610224919061272e565b60405180910390f35b610235610697565b60405161024291906127d1565b60405180910390f35b61026560048036038101906102609190612824565b610726565b604051610272919061288e565b60405180910390f35b610295600480360381019061029091906128d1565b610741565b005b6102b160048036038101906102ac919061290f565b610757565b6040516102bf929190612aa8565b60405180910390f35b6102e260048036038101906102dd9190612add565b610967565b005b6102fe60048036038101906102f99190612b60565b610a66565b60405161030b9190612b9a565b60405180910390f35b61032e60048036038101906103299190612bb3565b610a83565b005b61034a60048036038101906103459190612bb3565b610aa5565b005b6103666004803603810190610361919061290f565b610b20565b005b610382600480360381019061037d9190612add565b610b5a565b005b61039e60048036038101906103999190612d1d565b610b79565b005b6103ba60048036038101906103b59190612824565b610b99565b6040516103c7919061288e565b60405180910390f35b6103ea60048036038101906103e5919061290f565b610baa565b6040516103f79190612d73565b60405180910390f35b61041a60048036038101906104159190612824565b610c60565b005b610424610ce2565b6040516104319190612b9a565b60405180910390f35b610454600480360381019061044f9190612824565b610d06565b005b610470600480360381019061046b919061290f565b610e89565b005b61048c60048036038101906104879190612bb3565b6110a4565b604051610499919061272e565b60405180910390f35b6104aa611108565b6040516104b791906127d1565b60405180910390f35b6104c8611198565b6040516104d59190612b9a565b60405180910390f35b6104f860048036038101906104f39190612db6565b61119e565b005b610514600480360381019061050f9190612824565b6111b4565b604051610521919061288e565b60405180910390f35b610544600480360381019061053f9190612e92565b6111e4565b005b61054e611209565b60405161055b91906127d1565b60405180910390f35b61057e60048036038101906105799190612824565b611295565b60405161058b91906127d1565b60405180910390f35b6105ae60048036038101906105a9919061290f565b6112fb565b005b6105b8611335565b6040516105c59190612b9a565b60405180910390f35b6105e860048036038101906105e39190612bb3565b611359565b005b6105f261137b565b6040516105ff919061288e565b60405180910390f35b6106106113a0565b60405161061d919061272e565b60405180910390f35b610640600480360381019061063b9190612824565b6113c4565b60405161064d9190612d73565b60405180910390f35b610670600480360381019061066b9190612f12565b6113de565b60405161067d919061272e565b60405180910390f35b5f6106908261146c565b9050919050565b60605f80546106a590612f7d565b80601f01602080910402602001604051908101604052809291908181526020018280546106d190612f7d565b801561071c5780601f106106f35761010080835404028352916020019161071c565b820191905f5260205f20905b8154815290600101906020018083116106ff57829003601f168201915b5050505050905090565b5f610730826114e5565b5061073a8261156b565b9050919050565b610753828261074e6115a4565b6115ab565b5050565b6060805f60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208054905090508067ffffffffffffffff8111156107b8576107b7612bf9565b5b6040519080825280602002602001820160405280156107e65781602001602082028036833780820191505090505b5092508067ffffffffffffffff81111561080357610802612bf9565b5b6040519080825280602002602001820160405280156108315781602001602082028036833780820191505090505b5091505f5b818110156109605760095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20818154811061088d5761088c612fad565b5b905f5260205f2001548482815181106108a9576108a8612fad565b5b60200260200101818152505060085f8583815181106108cb576108ca612fad565b5b602002602001015181526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811061091357610912612fad565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808061095890613007565b915050610836565b5050915091565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d7575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016109ce919061288e565b60405180910390fd5b5f6109ea83836109e56115a4565b6115bd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a60578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610a579392919061304e565b60405180910390fd5b50505050565b5f60065f8381526020019081526020015f20600101549050919050565b610a8c82610a66565b610a958161167f565b610a9f8383611693565b50505050565b610aad6115a4565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b11576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1b828261177d565b505050565b5f801b610b2c8161167f565b610b567f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683610a83565b5050565b610b7483838360405180602001604052805f8152506111e4565b505050565b5f801b610b858161167f565b81600b9081610b949190613220565b505050565b5f610ba3826114e5565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c1b575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c12919061288e565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16610c8082610b99565b73ffffffffffffffffffffffffffffffffffffffff1614610cd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccd90613339565b60405180910390fd5b610cdf81611867565b50565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3081565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee30610d308161167f565b7f0000000000000000000000000000000000000000000000000000000000000000610d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d87906133a1565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660085f8481526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2590613409565b60405180910390fd5b610e3782611867565b3373ffffffffffffffffffffffffffffffffffffffff167f0f3207927b5662fc83604013a0f43ef142e755cba8e03dd8eabdbe53aa94683c83604051610e7d9190612d73565b60405180910390a25050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610eb38161167f565b5f60075f815480929190610ec690613007565b919050559050610ed683826118e9565b3360085f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604051806020016040528042815250600c5f8381526020019081526020015f205f820151815f015590505060095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081908060018154018082558091505060019003905f5260205f20015f9091909190915055600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b91845b884306040518363ffffffff1660e01b815260040161100d929190613427565b5f604051808303815f87803b158015611024575f80fd5b505af1158015611036573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2787de964661923b7d07c297ec434f2cd5daa8a622b2c656cc7bfdc431d14d19836040516110979190612d73565b60405180910390a3505050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461111790612f7d565b80601f016020809104026020016040519081016040528092919081815260200182805461114390612f7d565b801561118e5780601f106111655761010080835404028352916020019161118e565b820191905f5260205f20905b81548152906001019060200180831161117157829003601f168201915b5050505050905090565b5f801b81565b6111b06111a96115a4565b8383611906565b5050565b6008602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6111ef848484610967565b6112036111fa6115a4565b85858585611a6f565b50505050565b600b805461121690612f7d565b80601f016020809104026020016040519081016040528092919081815260200182805461124290612f7d565b801561128d5780601f106112645761010080835404028352916020019161128d565b820191905f5260205f20905b81548152906001019060200180831161127057829003601f168201915b505050505081565b60606112a0826114e5565b505f6112aa611c1b565b90505f8151116112c85760405180602001604052805f8152506112f3565b806112d284611c31565b6040516020016112e3929190613488565b6040516020818303038152906040525b915050919050565b5f801b6113078161167f565b6113317fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3083610a83565b5050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61136282610a66565b61136b8161167f565b611375838361177d565b50505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600c602052805f5260405f205f91509050805f0154905081565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114de57506114dd82611cfb565b5b9050919050565b5f806114f083611ddc565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361156257826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115599190612d73565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6115b88383836001611e15565b505050565b5f806115ca858585611fd4565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561163457505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611674576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166b906134f5565b60405180910390fd5b809150509392505050565b6116908161168b6115a4565b6121df565b50565b5f61169e83836110a4565b61177357600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506117106115a4565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611777565b5f90505b92915050565b5f61178883836110a4565b1561185d575f60065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506117fa6115a4565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611861565b5f90505b92915050565b5f6118735f835f6115bd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118e557816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016118dc9190612d73565b60405180910390fd5b5050565b611902828260405180602001604052805f815250612230565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361197657816040517f5b08ba1800000000000000000000000000000000000000000000000000000000815260040161196d919061288e565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611a62919061272e565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611c14578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611acd9493929190613565565b6020604051808303815f875af1925050508015611b0857506040513d601f19601f82011682018060405250810190611b0591906135c3565b60015b611b89573d805f8114611b36576040519150601f19603f3d011682016040523d82523d5f602084013e611b3b565b606091505b505f815103611b8157836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611b78919061288e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c1257836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611c09919061288e565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f6001611c3f84612253565b0190505f8167ffffffffffffffff811115611c5d57611c5c612bf9565b5b6040519080825280601f01601f191660200182016040528015611c8f5781602001600182028036833780820191505090505b5090505f82602001820190505b600115611cf0578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611ce557611ce46135ee565b5b0494505f8503611c9c575b819350505050919050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dc557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dd55750611dd4826123a4565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611e4d57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611f7f575f611e5c846114e5565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611ec657508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611ed95750611ed781846113de565b155b15611f1b57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611f12919061288e565b60405180910390fd5b8115611f7d57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f80611fdf84611ddc565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146120205761201f81848661240d565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146120ab5761205f5f855f80611e15565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461212a57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6121e982826110a4565b61222c5780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161222392919061361b565b60405180910390fd5b5050565b61223a83836124d0565b61224e6122456115a4565b5f858585611a6f565b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106122af577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816122a5576122a46135ee565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106122ec576d04ee2d6d415b85acef810000000083816122e2576122e16135ee565b5b0492506020810190505b662386f26fc10000831061231b57662386f26fc100008381612311576123106135ee565b5b0492506010810190505b6305f5e1008310612344576305f5e100838161233a576123396135ee565b5b0492506008810190505b612710831061236957612710838161235f5761235e6135ee565b5b0492506004810190505b6064831061238c5760648381612382576123816135ee565b5b0492506002810190505b600a831061239b576001810190505b80915050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6124188383836125c3565b6124cb575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361248c57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016124839190612d73565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016124c2929190613642565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612540575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612537919061288e565b60405180910390fd5b5f61254c83835f6115bd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146125be575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016125b5919061288e565b60405180910390fd5b505050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561267a57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061263b575061263a84846113de565b5b8061267957508273ffffffffffffffffffffffffffffffffffffffff166126618361156b565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6126c881612694565b81146126d2575f80fd5b50565b5f813590506126e3816126bf565b92915050565b5f602082840312156126fe576126fd61268c565b5b5f61270b848285016126d5565b91505092915050565b5f8115159050919050565b61272881612714565b82525050565b5f6020820190506127415f83018461271f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561277e578082015181840152602081019050612763565b5f8484015250505050565b5f601f19601f8301169050919050565b5f6127a382612747565b6127ad8185612751565b93506127bd818560208601612761565b6127c681612789565b840191505092915050565b5f6020820190508181035f8301526127e98184612799565b905092915050565b5f819050919050565b612803816127f1565b811461280d575f80fd5b50565b5f8135905061281e816127fa565b92915050565b5f602082840312156128395761283861268c565b5b5f61284684828501612810565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6128788261284f565b9050919050565b6128888161286e565b82525050565b5f6020820190506128a15f83018461287f565b92915050565b6128b08161286e565b81146128ba575f80fd5b50565b5f813590506128cb816128a7565b92915050565b5f80604083850312156128e7576128e661268c565b5b5f6128f4858286016128bd565b925050602061290585828601612810565b9150509250929050565b5f602082840312156129245761292361268c565b5b5f612931848285016128bd565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61296c816127f1565b82525050565b5f61297d8383612963565b60208301905092915050565b5f602082019050919050565b5f61299f8261293a565b6129a98185612944565b93506129b483612954565b805f5b838110156129e45781516129cb8882612972565b97506129d683612989565b9250506001810190506129b7565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b612a238161286e565b82525050565b5f612a348383612a1a565b60208301905092915050565b5f602082019050919050565b5f612a56826129f1565b612a6081856129fb565b9350612a6b83612a0b565b805f5b83811015612a9b578151612a828882612a29565b9750612a8d83612a40565b925050600181019050612a6e565b5085935050505092915050565b5f6040820190508181035f830152612ac08185612995565b90508181036020830152612ad48184612a4c565b90509392505050565b5f805f60608486031215612af457612af361268c565b5b5f612b01868287016128bd565b9350506020612b12868287016128bd565b9250506040612b2386828701612810565b9150509250925092565b5f819050919050565b612b3f81612b2d565b8114612b49575f80fd5b50565b5f81359050612b5a81612b36565b92915050565b5f60208284031215612b7557612b7461268c565b5b5f612b8284828501612b4c565b91505092915050565b612b9481612b2d565b82525050565b5f602082019050612bad5f830184612b8b565b92915050565b5f8060408385031215612bc957612bc861268c565b5b5f612bd685828601612b4c565b9250506020612be7858286016128bd565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612c2f82612789565b810181811067ffffffffffffffff82111715612c4e57612c4d612bf9565b5b80604052505050565b5f612c60612683565b9050612c6c8282612c26565b919050565b5f67ffffffffffffffff821115612c8b57612c8a612bf9565b5b612c9482612789565b9050602081019050919050565b828183375f83830152505050565b5f612cc1612cbc84612c71565b612c57565b905082815260208101848484011115612cdd57612cdc612bf5565b5b612ce8848285612ca1565b509392505050565b5f82601f830112612d0457612d03612bf1565b5b8135612d14848260208601612caf565b91505092915050565b5f60208284031215612d3257612d3161268c565b5b5f82013567ffffffffffffffff811115612d4f57612d4e612690565b5b612d5b84828501612cf0565b91505092915050565b612d6d816127f1565b82525050565b5f602082019050612d865f830184612d64565b92915050565b612d9581612714565b8114612d9f575f80fd5b50565b5f81359050612db081612d8c565b92915050565b5f8060408385031215612dcc57612dcb61268c565b5b5f612dd9858286016128bd565b9250506020612dea85828601612da2565b9150509250929050565b5f67ffffffffffffffff821115612e0e57612e0d612bf9565b5b612e1782612789565b9050602081019050919050565b5f612e36612e3184612df4565b612c57565b905082815260208101848484011115612e5257612e51612bf5565b5b612e5d848285612ca1565b509392505050565b5f82601f830112612e7957612e78612bf1565b5b8135612e89848260208601612e24565b91505092915050565b5f805f8060808587031215612eaa57612ea961268c565b5b5f612eb7878288016128bd565b9450506020612ec8878288016128bd565b9350506040612ed987828801612810565b925050606085013567ffffffffffffffff811115612efa57612ef9612690565b5b612f0687828801612e65565b91505092959194509250565b5f8060408385031215612f2857612f2761268c565b5b5f612f35858286016128bd565b9250506020612f46858286016128bd565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612f9457607f821691505b602082108103612fa757612fa6612f50565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f613011826127f1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361304357613042612fda565b5b600182019050919050565b5f6060820190506130615f83018661287f565b61306e6020830185612d64565b61307b604083018461287f565b949350505050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026130df7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826130a4565b6130e986836130a4565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61312461311f61311a846127f1565b613101565b6127f1565b9050919050565b5f819050919050565b61313d8361310a565b6131516131498261312b565b8484546130b0565b825550505050565b5f90565b613165613159565b613170818484613134565b505050565b5b81811015613193576131885f8261315d565b600181019050613176565b5050565b601f8211156131d8576131a981613083565b6131b284613095565b810160208510156131c1578190505b6131d56131cd85613095565b830182613175565b50505b505050565b5f82821c905092915050565b5f6131f85f19846008026131dd565b1980831691505092915050565b5f61321083836131e9565b9150826002028217905092915050565b61322982612747565b67ffffffffffffffff81111561324257613241612bf9565b5b61324c8254612f7d565b613257828285613197565b5f60209050601f831160018114613288575f8415613276578287015190505b6132808582613205565b8655506132e7565b601f19841661329686613083565b5f5b828110156132bd57848901518255600182019150602085019450602081019050613298565b868310156132da57848901516132d6601f8916826131e9565b8355505b6001600288020188555050505b505050505050565b7f596f7520646f206e6f74206f776e207468697320746f6b656e000000000000005f82015250565b5f613323601983612751565b915061332e826132ef565b602082019050919050565b5f6020820190508181035f83015261335081613317565b9050919050565b7f546f6b656e206973206e6f6e2d7265766f6b61626c65000000000000000000005f82015250565b5f61338b601683612751565b915061339682613357565b602082019050919050565b5f6020820190508181035f8301526133b88161337f565b9050919050565b7f596f7520617265206e6f742074686520697373756572000000000000000000005f82015250565b5f6133f3601683612751565b91506133fe826133bf565b602082019050919050565b5f6020820190508181035f830152613420816133e7565b9050919050565b5f60408201905061343a5f83018561287f565b613447602083018461287f565b9392505050565b5f81905092915050565b5f61346282612747565b61346c818561344e565b935061347c818560208601612761565b80840191505092915050565b5f6134938285613458565b915061349f8284613458565b91508190509392505050565b7f544e547320617265206e6f6e2d7472616e7366657261626c65000000000000005f82015250565b5f6134df601983612751565b91506134ea826134ab565b602082019050919050565b5f6020820190508181035f83015261350c816134d3565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f61353782613513565b613541818561351d565b9350613551818560208601612761565b61355a81612789565b840191505092915050565b5f6080820190506135785f83018761287f565b613585602083018661287f565b6135926040830185612d64565b81810360608301526135a4818461352d565b905095945050505050565b5f815190506135bd816126bf565b92915050565b5f602082840312156135d8576135d761268c565b5b5f6135e5848285016135af565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f60408201905061362e5f83018561287f565b61363b6020830184612b8b565b9392505050565b5f6040820190506136555f83018561287f565b6136626020830184612d64565b939250505056fea264697066735822122061f1be47b3f9223692129505fb87064bb067ebb359e526c66c316f14c5aedcaa64736f6c63430008140033",
        "sourceMap": "482:5246:18:-:0;;;1831:453;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2029:4;2035:6;1454:5:4;1446;:13;;;;;;:::i;:::-;;1479:7;1469;:17;;;;;;:::i;:::-;;1380:113;;2053:37:18::1;2232:4:0;2064:18:18::0;::::1;2084:5;2053:10;;;:37;;:::i;:::-;;2100:30;564:24;2124:5;2100:10;;;:30;;:::i;:::-;;2140:31;633:25;2165:5;2140:10;;;:31;;:::i;:::-;;2193:10;2181:22;;;;;;;;::::0;::::1;2231:16;2213:15;;:34;;;;;;;;;;;;;;;;;;2268:9;2257:8;:20;;;;;;:::i;:::-;;1831:453:::0;;;;;;482:5246;;6179:316:0;6256:4;6277:22;6285:4;6291:7;6277;;;:22;;:::i;:::-;6272:217;;6347:4;6315:6;:12;6322:4;6315:12;;;;;;;;;;;:20;;:29;6336:7;6315:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;6397:12;:10;;;:12;;:::i;:::-;6370:40;;6388:7;6370:40;;6382:4;6370:40;;;;;;;;;;6431:4;6424:11;;;;6272:217;6473:5;6466:12;;6179:316;;;;;:::o;2854:136::-;2931:4;2954:6;:12;2961:4;2954:12;;;;;;;;;;;:20;;:29;2975:7;2954:29;;;;;;;;;;;;;;;;;;;;;;;;;2947:36;;2854:136;;;;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;7:75:19:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:117::-;954:1;951;944:12;968:117;1077:1;1074;1067:12;1091:102;1132:6;1183:2;1179:7;1174:2;1167:5;1163:14;1159:28;1149:38;;1091:102;;;:::o;1199:180::-;1247:77;1244:1;1237:88;1344:4;1341:1;1334:15;1368:4;1365:1;1358:15;1385:281;1468:27;1490:4;1468:27;:::i;:::-;1460:6;1456:40;1598:6;1586:10;1583:22;1562:18;1550:10;1547:34;1544:62;1541:88;;;1609:18;;:::i;:::-;1541:88;1649:10;1645:2;1638:22;1428:238;1385:281;;:::o;1672:129::-;1706:6;1733:20;;:::i;:::-;1723:30;;1762:33;1790:4;1782:6;1762:33;:::i;:::-;1672:129;;;:::o;1807:308::-;1869:4;1959:18;1951:6;1948:30;1945:56;;;1981:18;;:::i;:::-;1945:56;2019:29;2041:6;2019:29;:::i;:::-;2011:37;;2103:4;2097;2093:15;2085:23;;1807:308;;;:::o;2121:246::-;2202:1;2212:113;2226:6;2223:1;2220:13;2212:113;;;2311:1;2306:3;2302:11;2296:18;2292:1;2287:3;2283:11;2276:39;2248:2;2245:1;2241:10;2236:15;;2212:113;;;2359:1;2350:6;2345:3;2341:16;2334:27;2183:184;2121:246;;;:::o;2373:434::-;2462:5;2487:66;2503:49;2545:6;2503:49;:::i;:::-;2487:66;:::i;:::-;2478:75;;2576:6;2569:5;2562:21;2614:4;2607:5;2603:16;2652:3;2643:6;2638:3;2634:16;2631:25;2628:112;;;2659:79;;:::i;:::-;2628:112;2749:52;2794:6;2789:3;2784;2749:52;:::i;:::-;2468:339;2373:434;;;;;:::o;2827:355::-;2894:5;2943:3;2936:4;2928:6;2924:17;2920:27;2910:122;;2951:79;;:::i;:::-;2910:122;3061:6;3055:13;3086:90;3172:3;3164:6;3157:4;3149:6;3145:17;3086:90;:::i;:::-;3077:99;;2900:282;2827:355;;;;:::o;3188:90::-;3222:7;3265:5;3258:13;3251:21;3240:32;;3188:90;;;:::o;3284:116::-;3354:21;3369:5;3354:21;:::i;:::-;3347:5;3344:32;3334:60;;3390:1;3387;3380:12;3334:60;3284:116;:::o;3406:137::-;3460:5;3491:6;3485:13;3476:22;;3507:30;3531:5;3507:30;:::i;:::-;3406:137;;;;:::o;3549:1647::-;3691:6;3699;3707;3715;3723;3731;3780:3;3768:9;3759:7;3755:23;3751:33;3748:120;;;3787:79;;:::i;:::-;3748:120;3907:1;3932:64;3988:7;3979:6;3968:9;3964:22;3932:64;:::i;:::-;3922:74;;3878:128;4066:2;4055:9;4051:18;4045:25;4097:18;4089:6;4086:30;4083:117;;;4119:79;;:::i;:::-;4083:117;4224:74;4290:7;4281:6;4270:9;4266:22;4224:74;:::i;:::-;4214:84;;4016:292;4368:2;4357:9;4353:18;4347:25;4399:18;4391:6;4388:30;4385:117;;;4421:79;;:::i;:::-;4385:117;4526:74;4592:7;4583:6;4572:9;4568:22;4526:74;:::i;:::-;4516:84;;4318:292;4649:2;4675:61;4728:7;4719:6;4708:9;4704:22;4675:61;:::i;:::-;4665:71;;4620:126;4785:3;4812:64;4868:7;4859:6;4848:9;4844:22;4812:64;:::i;:::-;4802:74;;4756:130;4946:3;4935:9;4931:19;4925:26;4978:18;4970:6;4967:30;4964:117;;;5000:79;;:::i;:::-;4964:117;5105:74;5171:7;5162:6;5151:9;5147:22;5105:74;:::i;:::-;5095:84;;4896:293;3549:1647;;;;;;;;:::o;5202:99::-;5254:6;5288:5;5282:12;5272:22;;5202:99;;;:::o;5307:180::-;5355:77;5352:1;5345:88;5452:4;5449:1;5442:15;5476:4;5473:1;5466:15;5493:320;5537:6;5574:1;5568:4;5564:12;5554:22;;5621:1;5615:4;5611:12;5642:18;5632:81;;5698:4;5690:6;5686:17;5676:27;;5632:81;5760:2;5752:6;5749:14;5729:18;5726:38;5723:84;;5779:18;;:::i;:::-;5723:84;5544:269;5493:320;;;:::o;5819:141::-;5868:4;5891:3;5883:11;;5914:3;5911:1;5904:14;5948:4;5945:1;5935:18;5927:26;;5819:141;;;:::o;5966:93::-;6003:6;6050:2;6045;6038:5;6034:14;6030:23;6020:33;;5966:93;;;:::o;6065:107::-;6109:8;6159:5;6153:4;6149:16;6128:37;;6065:107;;;;:::o;6178:393::-;6247:6;6297:1;6285:10;6281:18;6320:97;6350:66;6339:9;6320:97;:::i;:::-;6438:39;6468:8;6457:9;6438:39;:::i;:::-;6426:51;;6510:4;6506:9;6499:5;6495:21;6486:30;;6559:4;6549:8;6545:19;6538:5;6535:30;6525:40;;6254:317;;6178:393;;;;;:::o;6577:77::-;6614:7;6643:5;6632:16;;6577:77;;;:::o;6660:60::-;6688:3;6709:5;6702:12;;6660:60;;;:::o;6726:142::-;6776:9;6809:53;6827:34;6836:24;6854:5;6836:24;:::i;:::-;6827:34;:::i;:::-;6809:53;:::i;:::-;6796:66;;6726:142;;;:::o;6874:75::-;6917:3;6938:5;6931:12;;6874:75;;;:::o;6955:269::-;7065:39;7096:7;7065:39;:::i;:::-;7126:91;7175:41;7199:16;7175:41;:::i;:::-;7167:6;7160:4;7154:11;7126:91;:::i;:::-;7120:4;7113:105;7031:193;6955:269;;;:::o;7230:73::-;7275:3;7230:73;:::o;7309:189::-;7386:32;;:::i;:::-;7427:65;7485:6;7477;7471:4;7427:65;:::i;:::-;7362:136;7309:189;;:::o;7504:186::-;7564:120;7581:3;7574:5;7571:14;7564:120;;;7635:39;7672:1;7665:5;7635:39;:::i;:::-;7608:1;7601:5;7597:13;7588:22;;7564:120;;;7504:186;;:::o;7696:543::-;7797:2;7792:3;7789:11;7786:446;;;7831:38;7863:5;7831:38;:::i;:::-;7915:29;7933:10;7915:29;:::i;:::-;7905:8;7901:44;8098:2;8086:10;8083:18;8080:49;;;8119:8;8104:23;;8080:49;8142:80;8198:22;8216:3;8198:22;:::i;:::-;8188:8;8184:37;8171:11;8142:80;:::i;:::-;7801:431;;7786:446;7696:543;;;:::o;8245:117::-;8299:8;8349:5;8343:4;8339:16;8318:37;;8245:117;;;;:::o;8368:169::-;8412:6;8445:51;8493:1;8489:6;8481:5;8478:1;8474:13;8445:51;:::i;:::-;8441:56;8526:4;8520;8516:15;8506:25;;8419:118;8368:169;;;;:::o;8542:295::-;8618:4;8764:29;8789:3;8783:4;8764:29;:::i;:::-;8756:37;;8826:3;8823:1;8819:11;8813:4;8810:21;8802:29;;8542:295;;;;:::o;8842:1395::-;8959:37;8992:3;8959:37;:::i;:::-;9061:18;9053:6;9050:30;9047:56;;;9083:18;;:::i;:::-;9047:56;9127:38;9159:4;9153:11;9127:38;:::i;:::-;9212:67;9272:6;9264;9258:4;9212:67;:::i;:::-;9306:1;9330:4;9317:17;;9362:2;9354:6;9351:14;9379:1;9374:618;;;;10036:1;10053:6;10050:77;;;10102:9;10097:3;10093:19;10087:26;10078:35;;10050:77;10153:67;10213:6;10206:5;10153:67;:::i;:::-;10147:4;10140:81;10009:222;9344:887;;9374:618;9426:4;9422:9;9414:6;9410:22;9460:37;9492:4;9460:37;:::i;:::-;9519:1;9533:208;9547:7;9544:1;9541:14;9533:208;;;9626:9;9621:3;9617:19;9611:26;9603:6;9596:42;9677:1;9669:6;9665:14;9655:24;;9724:2;9713:9;9709:18;9696:31;;9570:4;9567:1;9563:12;9558:17;;9533:208;;;9769:6;9760:7;9757:19;9754:179;;;9827:9;9822:3;9818:19;9812:26;9870:48;9912:4;9904:6;9900:17;9889:9;9870:48;:::i;:::-;9862:6;9855:64;9777:156;9754:179;9979:1;9975;9967:6;9963:14;9959:22;9953:4;9946:36;9381:611;;;9344:887;;8934:1303;;;8842:1395;;:::o;482:5246:18:-;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561000f575f80fd5b50600436106101f9575f3560e01c80637dc9e79b11610118578063b90497e0116100ab578063d547741f1161007a578063d547741f146105ce578063de11c94a146105ea578063e11360b314610608578063e3684e3914610626578063e985e9c514610656576101f9565b8063b90497e014610546578063c87b56dd14610564578063cc49d0c314610594578063d5391393146105b0576101f9565b8063a217fddf116100e7578063a217fddf146104c0578063a22cb465146104de578063b7abc58d146104fa578063b88d4fde1461052a576101f9565b80637dc9e79b1461043a578063890340821461045657806391d148541461047257806395d89b41146104a2576101f9565b806336568abe116101905780636352211e1161015f5780636352211e146103a057806370a08231146103d05780637b47ec1a146104005780637c4acabf1461041c576101f9565b806336568abe146103305780633dd1eb611461034c57806342842e0e1461036857806358e792ee14610384576101f9565b806314e2d2a0116101cc57806314e2d2a01461029757806323b872dd146102c8578063248a9ca3146102e45780632f2ff15d14610314576101f9565b806301ffc9a7146101fd57806306fdde031461022d578063081812fc1461024b578063095ea7b31461027b575b5f80fd5b610217600480360381019061021291906126e9565b610686565b604051610224919061272e565b60405180910390f35b610235610697565b60405161024291906127d1565b60405180910390f35b61026560048036038101906102609190612824565b610726565b604051610272919061288e565b60405180910390f35b610295600480360381019061029091906128d1565b610741565b005b6102b160048036038101906102ac919061290f565b610757565b6040516102bf929190612aa8565b60405180910390f35b6102e260048036038101906102dd9190612add565b610967565b005b6102fe60048036038101906102f99190612b60565b610a66565b60405161030b9190612b9a565b60405180910390f35b61032e60048036038101906103299190612bb3565b610a83565b005b61034a60048036038101906103459190612bb3565b610aa5565b005b6103666004803603810190610361919061290f565b610b20565b005b610382600480360381019061037d9190612add565b610b5a565b005b61039e60048036038101906103999190612d1d565b610b79565b005b6103ba60048036038101906103b59190612824565b610b99565b6040516103c7919061288e565b60405180910390f35b6103ea60048036038101906103e5919061290f565b610baa565b6040516103f79190612d73565b60405180910390f35b61041a60048036038101906104159190612824565b610c60565b005b610424610ce2565b6040516104319190612b9a565b60405180910390f35b610454600480360381019061044f9190612824565b610d06565b005b610470600480360381019061046b919061290f565b610e89565b005b61048c60048036038101906104879190612bb3565b6110a4565b604051610499919061272e565b60405180910390f35b6104aa611108565b6040516104b791906127d1565b60405180910390f35b6104c8611198565b6040516104d59190612b9a565b60405180910390f35b6104f860048036038101906104f39190612db6565b61119e565b005b610514600480360381019061050f9190612824565b6111b4565b604051610521919061288e565b60405180910390f35b610544600480360381019061053f9190612e92565b6111e4565b005b61054e611209565b60405161055b91906127d1565b60405180910390f35b61057e60048036038101906105799190612824565b611295565b60405161058b91906127d1565b60405180910390f35b6105ae60048036038101906105a9919061290f565b6112fb565b005b6105b8611335565b6040516105c59190612b9a565b60405180910390f35b6105e860048036038101906105e39190612bb3565b611359565b005b6105f261137b565b6040516105ff919061288e565b60405180910390f35b6106106113a0565b60405161061d919061272e565b60405180910390f35b610640600480360381019061063b9190612824565b6113c4565b60405161064d9190612d73565b60405180910390f35b610670600480360381019061066b9190612f12565b6113de565b60405161067d919061272e565b60405180910390f35b5f6106908261146c565b9050919050565b60605f80546106a590612f7d565b80601f01602080910402602001604051908101604052809291908181526020018280546106d190612f7d565b801561071c5780601f106106f35761010080835404028352916020019161071c565b820191905f5260205f20905b8154815290600101906020018083116106ff57829003601f168201915b5050505050905090565b5f610730826114e5565b5061073a8261156b565b9050919050565b610753828261074e6115a4565b6115ab565b5050565b6060805f60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208054905090508067ffffffffffffffff8111156107b8576107b7612bf9565b5b6040519080825280602002602001820160405280156107e65781602001602082028036833780820191505090505b5092508067ffffffffffffffff81111561080357610802612bf9565b5b6040519080825280602002602001820160405280156108315781602001602082028036833780820191505090505b5091505f5b818110156109605760095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20818154811061088d5761088c612fad565b5b905f5260205f2001548482815181106108a9576108a8612fad565b5b60200260200101818152505060085f8583815181106108cb576108ca612fad565b5b602002602001015181526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811061091357610912612fad565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808061095890613007565b915050610836565b5050915091565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d7575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016109ce919061288e565b60405180910390fd5b5f6109ea83836109e56115a4565b6115bd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a60578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610a579392919061304e565b60405180910390fd5b50505050565b5f60065f8381526020019081526020015f20600101549050919050565b610a8c82610a66565b610a958161167f565b610a9f8383611693565b50505050565b610aad6115a4565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b11576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1b828261177d565b505050565b5f801b610b2c8161167f565b610b567f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683610a83565b5050565b610b7483838360405180602001604052805f8152506111e4565b505050565b5f801b610b858161167f565b81600b9081610b949190613220565b505050565b5f610ba3826114e5565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c1b575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c12919061288e565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16610c8082610b99565b73ffffffffffffffffffffffffffffffffffffffff1614610cd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccd90613339565b60405180910390fd5b610cdf81611867565b50565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3081565b7fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee30610d308161167f565b7f0000000000000000000000000000000000000000000000000000000000000000610d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d87906133a1565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660085f8481526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2590613409565b60405180910390fd5b610e3782611867565b3373ffffffffffffffffffffffffffffffffffffffff167f0f3207927b5662fc83604013a0f43ef142e755cba8e03dd8eabdbe53aa94683c83604051610e7d9190612d73565b60405180910390a25050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610eb38161167f565b5f60075f815480929190610ec690613007565b919050559050610ed683826118e9565b3360085f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604051806020016040528042815250600c5f8381526020019081526020015f205f820151815f015590505060095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081908060018154018082558091505060019003905f5260205f20015f9091909190915055600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b91845b884306040518363ffffffff1660e01b815260040161100d929190613427565b5f604051808303815f87803b158015611024575f80fd5b505af1158015611036573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2787de964661923b7d07c297ec434f2cd5daa8a622b2c656cc7bfdc431d14d19836040516110979190612d73565b60405180910390a3505050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461111790612f7d565b80601f016020809104026020016040519081016040528092919081815260200182805461114390612f7d565b801561118e5780601f106111655761010080835404028352916020019161118e565b820191905f5260205f20905b81548152906001019060200180831161117157829003601f168201915b5050505050905090565b5f801b81565b6111b06111a96115a4565b8383611906565b5050565b6008602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6111ef848484610967565b6112036111fa6115a4565b85858585611a6f565b50505050565b600b805461121690612f7d565b80601f016020809104026020016040519081016040528092919081815260200182805461124290612f7d565b801561128d5780601f106112645761010080835404028352916020019161128d565b820191905f5260205f20905b81548152906001019060200180831161127057829003601f168201915b505050505081565b60606112a0826114e5565b505f6112aa611c1b565b90505f8151116112c85760405180602001604052805f8152506112f3565b806112d284611c31565b6040516020016112e3929190613488565b6040516020818303038152906040525b915050919050565b5f801b6113078161167f565b6113317fce3f34913921da558f105cefb578d87278debbbd073a8d552b5de0d168deee3083610a83565b5050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61136282610a66565b61136b8161167f565b611375838361177d565b50505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600c602052805f5260405f205f91509050805f0154905081565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114de57506114dd82611cfb565b5b9050919050565b5f806114f083611ddc565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361156257826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115599190612d73565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6115b88383836001611e15565b505050565b5f806115ca858585611fd4565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561163457505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611674576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166b906134f5565b60405180910390fd5b809150509392505050565b6116908161168b6115a4565b6121df565b50565b5f61169e83836110a4565b61177357600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506117106115a4565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611777565b5f90505b92915050565b5f61178883836110a4565b1561185d575f60065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506117fa6115a4565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611861565b5f90505b92915050565b5f6118735f835f6115bd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118e557816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016118dc9190612d73565b60405180910390fd5b5050565b611902828260405180602001604052805f815250612230565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361197657816040517f5b08ba1800000000000000000000000000000000000000000000000000000000815260040161196d919061288e565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611a62919061272e565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611c14578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611acd9493929190613565565b6020604051808303815f875af1925050508015611b0857506040513d601f19601f82011682018060405250810190611b0591906135c3565b60015b611b89573d805f8114611b36576040519150601f19603f3d011682016040523d82523d5f602084013e611b3b565b606091505b505f815103611b8157836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611b78919061288e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c1257836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611c09919061288e565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f6001611c3f84612253565b0190505f8167ffffffffffffffff811115611c5d57611c5c612bf9565b5b6040519080825280601f01601f191660200182016040528015611c8f5781602001600182028036833780820191505090505b5090505f82602001820190505b600115611cf0578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611ce557611ce46135ee565b5b0494505f8503611c9c575b819350505050919050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dc557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dd55750611dd4826123a4565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611e4d57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611f7f575f611e5c846114e5565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611ec657508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611ed95750611ed781846113de565b155b15611f1b57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611f12919061288e565b60405180910390fd5b8115611f7d57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f80611fdf84611ddc565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146120205761201f81848661240d565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146120ab5761205f5f855f80611e15565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461212a57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6121e982826110a4565b61222c5780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161222392919061361b565b60405180910390fd5b5050565b61223a83836124d0565b61224e6122456115a4565b5f858585611a6f565b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106122af577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816122a5576122a46135ee565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106122ec576d04ee2d6d415b85acef810000000083816122e2576122e16135ee565b5b0492506020810190505b662386f26fc10000831061231b57662386f26fc100008381612311576123106135ee565b5b0492506010810190505b6305f5e1008310612344576305f5e100838161233a576123396135ee565b5b0492506008810190505b612710831061236957612710838161235f5761235e6135ee565b5b0492506004810190505b6064831061238c5760648381612382576123816135ee565b5b0492506002810190505b600a831061239b576001810190505b80915050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6124188383836125c3565b6124cb575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361248c57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016124839190612d73565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016124c2929190613642565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612540575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612537919061288e565b60405180910390fd5b5f61254c83835f6115bd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146125be575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016125b5919061288e565b60405180910390fd5b505050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561267a57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061263b575061263a84846113de565b5b8061267957508273ffffffffffffffffffffffffffffffffffffffff166126618361156b565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6126c881612694565b81146126d2575f80fd5b50565b5f813590506126e3816126bf565b92915050565b5f602082840312156126fe576126fd61268c565b5b5f61270b848285016126d5565b91505092915050565b5f8115159050919050565b61272881612714565b82525050565b5f6020820190506127415f83018461271f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561277e578082015181840152602081019050612763565b5f8484015250505050565b5f601f19601f8301169050919050565b5f6127a382612747565b6127ad8185612751565b93506127bd818560208601612761565b6127c681612789565b840191505092915050565b5f6020820190508181035f8301526127e98184612799565b905092915050565b5f819050919050565b612803816127f1565b811461280d575f80fd5b50565b5f8135905061281e816127fa565b92915050565b5f602082840312156128395761283861268c565b5b5f61284684828501612810565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6128788261284f565b9050919050565b6128888161286e565b82525050565b5f6020820190506128a15f83018461287f565b92915050565b6128b08161286e565b81146128ba575f80fd5b50565b5f813590506128cb816128a7565b92915050565b5f80604083850312156128e7576128e661268c565b5b5f6128f4858286016128bd565b925050602061290585828601612810565b9150509250929050565b5f602082840312156129245761292361268c565b5b5f612931848285016128bd565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61296c816127f1565b82525050565b5f61297d8383612963565b60208301905092915050565b5f602082019050919050565b5f61299f8261293a565b6129a98185612944565b93506129b483612954565b805f5b838110156129e45781516129cb8882612972565b97506129d683612989565b9250506001810190506129b7565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b612a238161286e565b82525050565b5f612a348383612a1a565b60208301905092915050565b5f602082019050919050565b5f612a56826129f1565b612a6081856129fb565b9350612a6b83612a0b565b805f5b83811015612a9b578151612a828882612a29565b9750612a8d83612a40565b925050600181019050612a6e565b5085935050505092915050565b5f6040820190508181035f830152612ac08185612995565b90508181036020830152612ad48184612a4c565b90509392505050565b5f805f60608486031215612af457612af361268c565b5b5f612b01868287016128bd565b9350506020612b12868287016128bd565b9250506040612b2386828701612810565b9150509250925092565b5f819050919050565b612b3f81612b2d565b8114612b49575f80fd5b50565b5f81359050612b5a81612b36565b92915050565b5f60208284031215612b7557612b7461268c565b5b5f612b8284828501612b4c565b91505092915050565b612b9481612b2d565b82525050565b5f602082019050612bad5f830184612b8b565b92915050565b5f8060408385031215612bc957612bc861268c565b5b5f612bd685828601612b4c565b9250506020612be7858286016128bd565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612c2f82612789565b810181811067ffffffffffffffff82111715612c4e57612c4d612bf9565b5b80604052505050565b5f612c60612683565b9050612c6c8282612c26565b919050565b5f67ffffffffffffffff821115612c8b57612c8a612bf9565b5b612c9482612789565b9050602081019050919050565b828183375f83830152505050565b5f612cc1612cbc84612c71565b612c57565b905082815260208101848484011115612cdd57612cdc612bf5565b5b612ce8848285612ca1565b509392505050565b5f82601f830112612d0457612d03612bf1565b5b8135612d14848260208601612caf565b91505092915050565b5f60208284031215612d3257612d3161268c565b5b5f82013567ffffffffffffffff811115612d4f57612d4e612690565b5b612d5b84828501612cf0565b91505092915050565b612d6d816127f1565b82525050565b5f602082019050612d865f830184612d64565b92915050565b612d9581612714565b8114612d9f575f80fd5b50565b5f81359050612db081612d8c565b92915050565b5f8060408385031215612dcc57612dcb61268c565b5b5f612dd9858286016128bd565b9250506020612dea85828601612da2565b9150509250929050565b5f67ffffffffffffffff821115612e0e57612e0d612bf9565b5b612e1782612789565b9050602081019050919050565b5f612e36612e3184612df4565b612c57565b905082815260208101848484011115612e5257612e51612bf5565b5b612e5d848285612ca1565b509392505050565b5f82601f830112612e7957612e78612bf1565b5b8135612e89848260208601612e24565b91505092915050565b5f805f8060808587031215612eaa57612ea961268c565b5b5f612eb7878288016128bd565b9450506020612ec8878288016128bd565b9350506040612ed987828801612810565b925050606085013567ffffffffffffffff811115612efa57612ef9612690565b5b612f0687828801612e65565b91505092959194509250565b5f8060408385031215612f2857612f2761268c565b5b5f612f35858286016128bd565b9250506020612f46858286016128bd565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612f9457607f821691505b602082108103612fa757612fa6612f50565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f613011826127f1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361304357613042612fda565b5b600182019050919050565b5f6060820190506130615f83018661287f565b61306e6020830185612d64565b61307b604083018461287f565b949350505050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026130df7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826130a4565b6130e986836130a4565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61312461311f61311a846127f1565b613101565b6127f1565b9050919050565b5f819050919050565b61313d8361310a565b6131516131498261312b565b8484546130b0565b825550505050565b5f90565b613165613159565b613170818484613134565b505050565b5b81811015613193576131885f8261315d565b600181019050613176565b5050565b601f8211156131d8576131a981613083565b6131b284613095565b810160208510156131c1578190505b6131d56131cd85613095565b830182613175565b50505b505050565b5f82821c905092915050565b5f6131f85f19846008026131dd565b1980831691505092915050565b5f61321083836131e9565b9150826002028217905092915050565b61322982612747565b67ffffffffffffffff81111561324257613241612bf9565b5b61324c8254612f7d565b613257828285613197565b5f60209050601f831160018114613288575f8415613276578287015190505b6132808582613205565b8655506132e7565b601f19841661329686613083565b5f5b828110156132bd57848901518255600182019150602085019450602081019050613298565b868310156132da57848901516132d6601f8916826131e9565b8355505b6001600288020188555050505b505050505050565b7f596f7520646f206e6f74206f776e207468697320746f6b656e000000000000005f82015250565b5f613323601983612751565b915061332e826132ef565b602082019050919050565b5f6020820190508181035f83015261335081613317565b9050919050565b7f546f6b656e206973206e6f6e2d7265766f6b61626c65000000000000000000005f82015250565b5f61338b601683612751565b915061339682613357565b602082019050919050565b5f6020820190508181035f8301526133b88161337f565b9050919050565b7f596f7520617265206e6f742074686520697373756572000000000000000000005f82015250565b5f6133f3601683612751565b91506133fe826133bf565b602082019050919050565b5f6020820190508181035f830152613420816133e7565b9050919050565b5f60408201905061343a5f83018561287f565b613447602083018461287f565b9392505050565b5f81905092915050565b5f61346282612747565b61346c818561344e565b935061347c818560208601612761565b80840191505092915050565b5f6134938285613458565b915061349f8284613458565b91508190509392505050565b7f544e547320617265206e6f6e2d7472616e7366657261626c65000000000000005f82015250565b5f6134df601983612751565b91506134ea826134ab565b602082019050919050565b5f6020820190508181035f83015261350c816134d3565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f61353782613513565b613541818561351d565b9350613551818560208601612761565b61355a81612789565b840191505092915050565b5f6080820190506135785f83018761287f565b613585602083018661287f565b6135926040830185612d64565b81810360608301526135a4818461352d565b905095945050505050565b5f815190506135bd816126bf565b92915050565b5f602082840312156135d8576135d761268c565b5b5f6135e5848285016135af565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f60408201905061362e5f83018561287f565b61363b6020830184612b8b565b9392505050565b5f6040820190506136555f83018561287f565b6136626020830184612d64565b939250505056fea264697066735822122061f1be47b3f9223692129505fb87064bb067ebb359e526c66c316f14c5aedcaa64736f6c63430008140033",
        "sourceMap": "482:5246:18:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5560:166;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2364:89:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3496:154;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3322:113;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4035:426:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;4142:578:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3810:120:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4226:136;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5328:245;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5060:126:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4786:132:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2942:115:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2184:118:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1919:208;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3602:152:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;594:64;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3196:281;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2416:516;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2854:136:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2517:93:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2187:49:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3717:144:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;699:47:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4984:233:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;887:22:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2676:255:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5325:128:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;526:62;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4642:138:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;851:30:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;814:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1088:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3927:153:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5560:166:18;5660:4;5683:36;5707:11;5683:23;:36::i;:::-;5676:43;;5560:166;;;:::o;2364:89:4:-;2409:13;2441:5;2434:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:89;:::o;3496:154::-;3563:7;3582:22;3596:7;3582:13;:22::i;:::-;;3622:21;3635:7;3622:12;:21::i;:::-;3615:28;;3496:154;;;:::o;3322:113::-;3393:35;3402:2;3406:7;3415:12;:10;:12::i;:::-;3393:8;:35::i;:::-;3322:113;;:::o;4035:426:18:-;4095:25;4122:24;4158:14;4175:18;:24;4194:4;4175:24;;;;;;;;;;;;;;;:31;;;;4158:48;;4241:6;4227:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4216:32;;4282:6;4268:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4258:31;;4305:9;4300:155;4324:6;4320:1;:10;4300:155;;;4365:18;:24;4384:4;4365:24;;;;;;;;;;;;;;;4390:1;4365:27;;;;;;;;:::i;:::-;;;;;;;;;;4351:8;4360:1;4351:11;;;;;;;;:::i;:::-;;;;;;;:41;;;;;4419:12;:25;4432:8;4441:1;4432:11;;;;;;;;:::i;:::-;;;;;;;;4419:25;;;;;;;;;;;;;;;;;;;;;4406:7;4414:1;4406:10;;;;;;;;:::i;:::-;;;;;;;:38;;;;;;;;;;;4332:3;;;;;:::i;:::-;;;;4300:155;;;;4148:313;4035:426;;;:::o;4142:578:4:-;4250:1;4236:16;;:2;:16;;;4232:87;;4305:1;4275:33;;;;;;;;;;;:::i;:::-;;;;;;;;4232:87;4537:21;4561:34;4569:2;4573:7;4582:12;:10;:12::i;:::-;4561:7;:34::i;:::-;4537:58;;4626:4;4609:21;;:13;:21;;;4605:109;;4674:4;4680:7;4689:13;4653:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;4605:109;4222:498;4142:578;;;:::o;3810:120:0:-;3875:7;3901:6;:12;3908:4;3901:12;;;;;;;;;;;:22;;;3894:29;;3810:120;;;:::o;4226:136::-;4300:18;4313:4;4300:12;:18::i;:::-;2464:16;2475:4;2464:10;:16::i;:::-;4330:25:::1;4341:4;4347:7;4330:10;:25::i;:::-;;4226:136:::0;;;:::o;5328:245::-;5443:12;:10;:12::i;:::-;5421:34;;:18;:34;;;5417:102;;5478:30;;;;;;;;;;;;;;5417:102;5529:37;5541:4;5547:18;5529:11;:37::i;:::-;;5328:245;;:::o;5060:126:18:-;2232:4:0;5118:18:18;;2464:16:0;2475:4;2464:10;:16::i;:::-;5148:31:18::1;564:24;5171:7;5148:9;:31::i;:::-;5060:126:::0;;:::o;4786:132:4:-;4872:39;4889:4;4895:2;4899:7;4872:39;;;;;;;;;;;;:16;:39::i;:::-;4786:132;;;:::o;2942:115:18:-;2232:4:0;3003:18:18;;2464:16:0;2475:4;2464:10;:16::i;:::-;3044:6:18::1;3033:8;:17;;;;;;:::i;:::-;;2942:115:::0;;:::o;2184:118:4:-;2247:7;2273:22;2287:7;2273:13;:22::i;:::-;2266:29;;2184:118;;;:::o;1919:208::-;1982:7;2022:1;2005:19;;:5;:19;;;2001:87;;2074:1;2047:30;;;;;;;;;;;:::i;:::-;;;;;;;;2001:87;2104:9;:16;2114:5;2104:16;;;;;;;;;;;;;;;;2097:23;;1919:208;;;:::o;3602:152:18:-;3683:10;3663:30;;:16;3671:7;3663;:16::i;:::-;:30;;;3655:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;3733:14;3739:7;3733:5;:14::i;:::-;3602:152;:::o;594:64::-;633:25;594:64;:::o;3196:281::-;633:25;2464:16:0;2475:4;2464:10;:16::i;:::-;3282:9:18::1;3274:44;;;;;;;;;;;;:::i;:::-;;;;;;;;;3361:10;3336:35;;:12;:21;3349:7;3336:21;;;;;;;;;;;;;;;;;;;;;:35;;;3328:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;3408:14;3414:7;3408:5;:14::i;:::-;3450:10;3437:33;;;3462:7;3437:33;;;;;;:::i;:::-;;;;;;;;3196:281:::0;;:::o;2416:516::-;564:24;2464:16:0;2475:4;2464:10;:16::i;:::-;2494:15:18::1;2512:12;;:14;;;;;;;;;:::i;:::-;;;;;2494:32;;2536:29;2546:9;2557:7;2536:9;:29::i;:::-;2599:10;2575:12;:21;2588:7;2575:21;;;;;;;;;;;;:34;;;;;;;;;;;;;;;;;;2639:30;;;;;;;;2653:15;2639:30;;::::0;2619:8:::1;:17;2628:7;2619:17;;;;;;;;;;;:50;;;;;;;;;;;2679:18;:29;2698:9;2679:29;;;;;;;;;;;;;;;2714:7;2679:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2804:15;;;;;;;;;;;2795:45;;;2841:9;2860:4;2795:71;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;2906:9;2882:43;;2894:10;2882:43;;;2917:7;2882:43;;;;;;:::i;:::-;;;;;;;;2484:448;2416:516:::0;;:::o;2854:136:0:-;2931:4;2954:6;:12;2961:4;2954:12;;;;;;;;;;;:20;;:29;2975:7;2954:29;;;;;;;;;;;;;;;;;;;;;;;;;2947:36;;2854:136;;;;:::o;2517:93:4:-;2564:13;2596:7;2589:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2517:93;:::o;2187:49:0:-;2232:4;2187:49;;;:::o;3717:144:4:-;3802:52;3821:12;:10;:12::i;:::-;3835:8;3845;3802:18;:52::i;:::-;3717:144;;:::o;699:47:18:-;;;;;;;;;;;;;;;;;;;;;;:::o;4984:233:4:-;5097:31;5110:4;5116:2;5120:7;5097:12;:31::i;:::-;5138:72;5172:12;:10;:12::i;:::-;5186:4;5192:2;5196:7;5205:4;5138:33;:72::i;:::-;4984:233;;;;:::o;887:22:18:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2676:255:4:-;2740:13;2765:22;2779:7;2765:13;:22::i;:::-;;2798:21;2822:10;:8;:10::i;:::-;2798:34;;2873:1;2855:7;2849:21;:25;:75;;;;;;;;;;;;;;;;;2891:7;2900:18;:7;:16;:18::i;:::-;2877:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2849:75;2842:82;;;2676:255;;;:::o;5325:128:18:-;2232:4:0;5384:18:18;;2464:16:0;2475:4;2464:10;:16::i;:::-;5414:32:18::1;633:25;5438:7;5414:9;:32::i;:::-;5325:128:::0;;:::o;526:62::-;564:24;526:62;:::o;4642:138:0:-;4717:18;4730:4;4717:12;:18::i;:::-;2464:16;2475:4;2464:10;:16::i;:::-;4747:26:::1;4759:4;4765:7;4747:11;:26::i;:::-;;4642:138:::0;;;:::o;851:30:18:-;;;;;;;;;;;;;:::o;814:31::-;;;:::o;1088:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;3927:153:4:-;4015:4;4038:18;:25;4057:5;4038:25;;;;;;;;;;;;;;;:35;4064:8;4038:35;;;;;;;;;;;;;;;;;;;;;;;;;4031:42;;3927:153;;;;:::o;2565:202:0:-;2650:4;2688:32;2673:47;;;:11;:47;;;;:87;;;;2724:36;2748:11;2724:23;:36::i;:::-;2673:87;2666:94;;2565:202;;;:::o;16212:241:4:-;16275:7;16294:13;16310:17;16319:7;16310:8;:17::i;:::-;16294:33;;16358:1;16341:19;;:5;:19;;;16337:88;;16406:7;16383:31;;;;;;;;;;;:::i;:::-;;;;;;;;16337:88;16441:5;16434:12;;;16212:241;;;:::o;5963:127::-;6033:7;6059:15;:24;6075:7;6059:24;;;;;;;;;;;;;;;;;;;;;6052:31;;5963:127;;;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;14492:120:4:-;14572:33;14581:2;14585:7;14594:4;14600;14572:8;:33::i;:::-;14492:120;;;:::o;4607:316:18:-;4709:7;4733:12;4748:32;4762:2;4766:7;4775:4;4748:13;:32::i;:::-;4733:47;;4811:1;4795:18;;:4;:18;;;;:38;;;;;4831:1;4817:16;;:2;:16;;;;4795:38;4791:104;;;4849:35;;;;;;;;;;:::i;:::-;;;;;;;;4791:104;4912:4;4905:11;;;4607:316;;;;;:::o;3199:103:0:-;3265:30;3276:4;3282:12;:10;:12::i;:::-;3265:10;:30::i;:::-;3199:103;:::o;6179:316::-;6256:4;6277:22;6285:4;6291:7;6277;:22::i;:::-;6272:217;;6347:4;6315:6;:12;6322:4;6315:12;;;;;;;;;;;:20;;:29;6336:7;6315:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;6397:12;:10;:12::i;:::-;6370:40;;6388:7;6370:40;;6382:4;6370:40;;;;;;;;;;6431:4;6424:11;;;;6272:217;6473:5;6466:12;;6179:316;;;;;:::o;6732:317::-;6810:4;6830:22;6838:4;6844:7;6830;:22::i;:::-;6826:217;;;6900:5;6868:6;:12;6875:4;6868:12;;;;;;;;;;;:20;;:29;6889:7;6868:29;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;6951:12;:10;:12::i;:::-;6924:40;;6942:7;6924:40;;6936:4;6924:40;;;;;;;;;;6985:4;6978:11;;;;6826:217;7027:5;7020:12;;6732:317;;;;;:::o;11510:227:4:-;11561:21;11585:40;11601:1;11605:7;11622:1;11585:7;:40::i;:::-;11561:64;;11664:1;11639:27;;:13;:27;;;11635:96;;11712:7;11689:31;;;;;;;;;;;:::i;:::-;;;;;;;;11635:96;11551:186;11510:227;:::o;10656:100::-;10723:26;10733:2;10737:7;10723:26;;;;;;;;;;;;:9;:26::i;:::-;10656:100;;:::o;15665:312::-;15792:1;15772:22;;:8;:22;;;15768:91;;15839:8;15817:31;;;;;;;;;;;:::i;:::-;;;;;;;;15768:91;15906:8;15868:18;:25;15887:5;15868:25;;;;;;;;;;;;;;;:35;15894:8;15868:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;15951:8;15929:41;;15944:5;15929:41;;;15961:8;15929:41;;;;;;:::i;:::-;;;;;;;;15665:312;;;:::o;993:924:8:-;1190:1;1173:2;:14;;;:18;1169:742;;;1227:2;1211:36;;;1248:8;1258:4;1264:7;1273:4;1211:67;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1207:694;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1585:1;1568:6;:13;:18;1564:323;;1708:2;1672:39;;;;;;;;;;;:::i;:::-;;;;;;;;1564:323;1839:6;1833:13;1824:6;1820:2;1816:15;1809:38;1207:694;1335:41;;;1325:51;;;:6;:51;;;;1321:182;;1481:2;1445:39;;;;;;;;;;;:::i;:::-;;;;;;;;1321:182;1279:238;1169:742;993:924;;;;;:::o;3173:92:4:-;3224:13;3249:9;;;;;;;;;;;;;;3173:92;:::o;1308:632:11:-;1364:13;1413:14;1450:1;1430:17;1441:5;1430:10;:17::i;:::-;:21;1413:38;;1465:20;1499:6;1488:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1465:41;;1520:11;1615:6;1611:2;1607:15;1599:6;1595:28;1588:35;;1650:247;1657:4;1650:247;;;1681:5;;;;;;;;1785:10;1780:2;1773:5;1769:14;1764:32;1759:3;1751:46;1841:2;1832:11;;;;;;:::i;:::-;;;;;1874:1;1865:5;:10;1650:247;1861:21;1650:247;1917:6;1910:13;;;;;1308:632;;;:::o;1560:300:4:-;1662:4;1712:25;1697:40;;;:11;:40;;;;:104;;;;1768:33;1753:48;;;:11;:48;;;;1697:104;:156;;;;1817:36;1841:11;1817:23;:36::i;:::-;1697:156;1678:175;;1560:300;;;:::o;5732:115::-;5798:7;5824;:16;5832:7;5824:16;;;;;;;;;;;;;;;;;;;;;5817:23;;5732:115;;;:::o;14794:662::-;14954:9;:31;;;;14983:1;14967:18;;:4;:18;;;;14954:31;14950:460;;;15001:13;15017:22;15031:7;15017:13;:22::i;:::-;15001:38;;15183:1;15167:18;;:4;:18;;;;:35;;;;;15198:4;15189:13;;:5;:13;;;;15167:35;:69;;;;;15207:29;15224:5;15231:4;15207:16;:29::i;:::-;15206:30;15167:69;15163:142;;;15285:4;15263:27;;;;;;;;;;;:::i;:::-;;;;;;;;15163:142;15323:9;15319:81;;;15377:7;15373:2;15357:28;;15366:5;15357:28;;;;;;;;;;;;15319:81;14987:423;14950:460;15447:2;15420:15;:24;15436:7;15420:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;14794:662;;;;:::o;8861:795::-;8947:7;8966:12;8981:17;8990:7;8981:8;:17::i;:::-;8966:32;;9074:1;9058:18;;:4;:18;;;9054:86;;9092:37;9109:4;9115;9121:7;9092:16;:37::i;:::-;9054:86;9200:1;9184:18;;:4;:18;;;9180:256;;9300:48;9317:1;9321:7;9338:1;9342:5;9300:8;:48::i;:::-;9410:1;9391:9;:15;9401:4;9391:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;9180:256;9464:1;9450:16;;:2;:16;;;9446:107;;9527:1;9510:9;:13;9520:2;9510:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9446:107;9582:2;9563:7;:16;9571:7;9563:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9619:7;9615:2;9600:27;;9609:4;9600:27;;;;;;;;;;;;9645:4;9638:11;;;8861:795;;;;;:::o;3432:197:0:-;3520:22;3528:4;3534:7;3520;:22::i;:::-;3515:108;;3598:7;3607:4;3565:47;;;;;;;;;;;;:::i;:::-;;;;;;;;3515:108;3432:197;;:::o;10977:207:4:-;11071:18;11077:2;11081:7;11071:5;:18::i;:::-;11099:78;11133:12;:10;:12::i;:::-;11155:1;11159:2;11163:7;11172:4;11099:33;:78::i;:::-;10977:207;;;:::o;29154:916:14:-;29207:7;29226:14;29243:1;29226:18;;29291:8;29282:5;:17;29278:103;;29328:8;29319:17;;;;;;:::i;:::-;;;;;29364:2;29354:12;;;;29278:103;29407:8;29398:5;:17;29394:103;;29444:8;29435:17;;;;;;:::i;:::-;;;;;29480:2;29470:12;;;;29394:103;29523:8;29514:5;:17;29510:103;;29560:8;29551:17;;;;;;:::i;:::-;;;;;29596:2;29586:12;;;;29510:103;29639:7;29630:5;:16;29626:100;;29675:7;29666:16;;;;;;:::i;:::-;;;;;29710:1;29700:11;;;;29626:100;29752:7;29743:5;:16;29739:100;;29788:7;29779:16;;;;;;:::i;:::-;;;;;29823:1;29813:11;;;;29739:100;29865:7;29856:5;:16;29852:100;;29901:7;29892:16;;;;;;:::i;:::-;;;;;29936:1;29926:11;;;;29852:100;29978:7;29969:5;:16;29965:66;;30015:1;30005:11;;;;29965:66;30057:6;30050:13;;;29154:916;;;:::o;763:146:12:-;839:4;877:25;862:40;;;:11;:40;;;;855:47;;763:146;;;:::o;7105:368:4:-;7217:38;7231:5;7238:7;7247;7217:13;:38::i;:::-;7212:255;;7292:1;7275:19;;:5;:19;;;7271:186;;7344:7;7321:31;;;;;;;;;;;:::i;:::-;;;;;;;;7271:186;7425:7;7434;7398:44;;;;;;;;;;;;:::i;:::-;;;;;;;;7212:255;7105:368;;;:::o;9978:327::-;10059:1;10045:16;;:2;:16;;;10041:87;;10114:1;10084:33;;;;;;;;;;;:::i;:::-;;;;;;;;10041:87;10137:21;10161:32;10169:2;10173:7;10190:1;10161:7;:32::i;:::-;10137:56;;10232:1;10207:27;;:13;:27;;;10203:96;;10285:1;10257:31;;;;;;;;;;;:::i;:::-;;;;;;;;10203:96;10031:274;9978:327;;:::o;6401:272::-;6504:4;6558:1;6539:21;;:7;:21;;;;:127;;;;;6586:7;6577:16;;:5;:16;;;:52;;;;6597:32;6614:5;6621:7;6597:16;:32::i;:::-;6577:52;:88;;;;6658:7;6633:32;;:21;6646:7;6633:12;:21::i;:::-;:32;;;6577:88;6539:127;6520:146;;6401:272;;;;;:::o;7:75:19:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:246::-;1879:1;1889:113;1903:6;1900:1;1897:13;1889:113;;;1988:1;1983:3;1979:11;1973:18;1969:1;1964:3;1960:11;1953:39;1925:2;1922:1;1918:10;1913:15;;1889:113;;;2036:1;2027:6;2022:3;2018:16;2011:27;1860:184;1798:246;;;:::o;2050:102::-;2091:6;2142:2;2138:7;2133:2;2126:5;2122:14;2118:28;2108:38;;2050:102;;;:::o;2158:377::-;2246:3;2274:39;2307:5;2274:39;:::i;:::-;2329:71;2393:6;2388:3;2329:71;:::i;:::-;2322:78;;2409:65;2467:6;2462:3;2455:4;2448:5;2444:16;2409:65;:::i;:::-;2499:29;2521:6;2499:29;:::i;:::-;2494:3;2490:39;2483:46;;2250:285;2158:377;;;;:::o;2541:313::-;2654:4;2692:2;2681:9;2677:18;2669:26;;2741:9;2735:4;2731:20;2727:1;2716:9;2712:17;2705:47;2769:78;2842:4;2833:6;2769:78;:::i;:::-;2761:86;;2541:313;;;;:::o;2860:77::-;2897:7;2926:5;2915:16;;2860:77;;;:::o;2943:122::-;3016:24;3034:5;3016:24;:::i;:::-;3009:5;3006:35;2996:63;;3055:1;3052;3045:12;2996:63;2943:122;:::o;3071:139::-;3117:5;3155:6;3142:20;3133:29;;3171:33;3198:5;3171:33;:::i;:::-;3071:139;;;;:::o;3216:329::-;3275:6;3324:2;3312:9;3303:7;3299:23;3295:32;3292:119;;;3330:79;;:::i;:::-;3292:119;3450:1;3475:53;3520:7;3511:6;3500:9;3496:22;3475:53;:::i;:::-;3465:63;;3421:117;3216:329;;;;:::o;3551:126::-;3588:7;3628:42;3621:5;3617:54;3606:65;;3551:126;;;:::o;3683:96::-;3720:7;3749:24;3767:5;3749:24;:::i;:::-;3738:35;;3683:96;;;:::o;3785:118::-;3872:24;3890:5;3872:24;:::i;:::-;3867:3;3860:37;3785:118;;:::o;3909:222::-;4002:4;4040:2;4029:9;4025:18;4017:26;;4053:71;4121:1;4110:9;4106:17;4097:6;4053:71;:::i;:::-;3909:222;;;;:::o;4137:122::-;4210:24;4228:5;4210:24;:::i;:::-;4203:5;4200:35;4190:63;;4249:1;4246;4239:12;4190:63;4137:122;:::o;4265:139::-;4311:5;4349:6;4336:20;4327:29;;4365:33;4392:5;4365:33;:::i;:::-;4265:139;;;;:::o;4410:474::-;4478:6;4486;4535:2;4523:9;4514:7;4510:23;4506:32;4503:119;;;4541:79;;:::i;:::-;4503:119;4661:1;4686:53;4731:7;4722:6;4711:9;4707:22;4686:53;:::i;:::-;4676:63;;4632:117;4788:2;4814:53;4859:7;4850:6;4839:9;4835:22;4814:53;:::i;:::-;4804:63;;4759:118;4410:474;;;;;:::o;4890:329::-;4949:6;4998:2;4986:9;4977:7;4973:23;4969:32;4966:119;;;5004:79;;:::i;:::-;4966:119;5124:1;5149:53;5194:7;5185:6;5174:9;5170:22;5149:53;:::i;:::-;5139:63;;5095:117;4890:329;;;;:::o;5225:114::-;5292:6;5326:5;5320:12;5310:22;;5225:114;;;:::o;5345:184::-;5444:11;5478:6;5473:3;5466:19;5518:4;5513:3;5509:14;5494:29;;5345:184;;;;:::o;5535:132::-;5602:4;5625:3;5617:11;;5655:4;5650:3;5646:14;5638:22;;5535:132;;;:::o;5673:108::-;5750:24;5768:5;5750:24;:::i;:::-;5745:3;5738:37;5673:108;;:::o;5787:179::-;5856:10;5877:46;5919:3;5911:6;5877:46;:::i;:::-;5955:4;5950:3;5946:14;5932:28;;5787:179;;;;:::o;5972:113::-;6042:4;6074;6069:3;6065:14;6057:22;;5972:113;;;:::o;6121:732::-;6240:3;6269:54;6317:5;6269:54;:::i;:::-;6339:86;6418:6;6413:3;6339:86;:::i;:::-;6332:93;;6449:56;6499:5;6449:56;:::i;:::-;6528:7;6559:1;6544:284;6569:6;6566:1;6563:13;6544:284;;;6645:6;6639:13;6672:63;6731:3;6716:13;6672:63;:::i;:::-;6665:70;;6758:60;6811:6;6758:60;:::i;:::-;6748:70;;6604:224;6591:1;6588;6584:9;6579:14;;6544:284;;;6548:14;6844:3;6837:10;;6245:608;;;6121:732;;;;:::o;6859:114::-;6926:6;6960:5;6954:12;6944:22;;6859:114;;;:::o;6979:184::-;7078:11;7112:6;7107:3;7100:19;7152:4;7147:3;7143:14;7128:29;;6979:184;;;;:::o;7169:132::-;7236:4;7259:3;7251:11;;7289:4;7284:3;7280:14;7272:22;;7169:132;;;:::o;7307:108::-;7384:24;7402:5;7384:24;:::i;:::-;7379:3;7372:37;7307:108;;:::o;7421:179::-;7490:10;7511:46;7553:3;7545:6;7511:46;:::i;:::-;7589:4;7584:3;7580:14;7566:28;;7421:179;;;;:::o;7606:113::-;7676:4;7708;7703:3;7699:14;7691:22;;7606:113;;;:::o;7755:732::-;7874:3;7903:54;7951:5;7903:54;:::i;:::-;7973:86;8052:6;8047:3;7973:86;:::i;:::-;7966:93;;8083:56;8133:5;8083:56;:::i;:::-;8162:7;8193:1;8178:284;8203:6;8200:1;8197:13;8178:284;;;8279:6;8273:13;8306:63;8365:3;8350:13;8306:63;:::i;:::-;8299:70;;8392:60;8445:6;8392:60;:::i;:::-;8382:70;;8238:224;8225:1;8222;8218:9;8213:14;;8178:284;;;8182:14;8478:3;8471:10;;7879:608;;;7755:732;;;;:::o;8493:634::-;8714:4;8752:2;8741:9;8737:18;8729:26;;8801:9;8795:4;8791:20;8787:1;8776:9;8772:17;8765:47;8829:108;8932:4;8923:6;8829:108;:::i;:::-;8821:116;;8984:9;8978:4;8974:20;8969:2;8958:9;8954:18;8947:48;9012:108;9115:4;9106:6;9012:108;:::i;:::-;9004:116;;8493:634;;;;;:::o;9133:619::-;9210:6;9218;9226;9275:2;9263:9;9254:7;9250:23;9246:32;9243:119;;;9281:79;;:::i;:::-;9243:119;9401:1;9426:53;9471:7;9462:6;9451:9;9447:22;9426:53;:::i;:::-;9416:63;;9372:117;9528:2;9554:53;9599:7;9590:6;9579:9;9575:22;9554:53;:::i;:::-;9544:63;;9499:118;9656:2;9682:53;9727:7;9718:6;9707:9;9703:22;9682:53;:::i;:::-;9672:63;;9627:118;9133:619;;;;;:::o;9758:77::-;9795:7;9824:5;9813:16;;9758:77;;;:::o;9841:122::-;9914:24;9932:5;9914:24;:::i;:::-;9907:5;9904:35;9894:63;;9953:1;9950;9943:12;9894:63;9841:122;:::o;9969:139::-;10015:5;10053:6;10040:20;10031:29;;10069:33;10096:5;10069:33;:::i;:::-;9969:139;;;;:::o;10114:329::-;10173:6;10222:2;10210:9;10201:7;10197:23;10193:32;10190:119;;;10228:79;;:::i;:::-;10190:119;10348:1;10373:53;10418:7;10409:6;10398:9;10394:22;10373:53;:::i;:::-;10363:63;;10319:117;10114:329;;;;:::o;10449:118::-;10536:24;10554:5;10536:24;:::i;:::-;10531:3;10524:37;10449:118;;:::o;10573:222::-;10666:4;10704:2;10693:9;10689:18;10681:26;;10717:71;10785:1;10774:9;10770:17;10761:6;10717:71;:::i;:::-;10573:222;;;;:::o;10801:474::-;10869:6;10877;10926:2;10914:9;10905:7;10901:23;10897:32;10894:119;;;10932:79;;:::i;:::-;10894:119;11052:1;11077:53;11122:7;11113:6;11102:9;11098:22;11077:53;:::i;:::-;11067:63;;11023:117;11179:2;11205:53;11250:7;11241:6;11230:9;11226:22;11205:53;:::i;:::-;11195:63;;11150:118;10801:474;;;;;:::o;11281:117::-;11390:1;11387;11380:12;11404:117;11513:1;11510;11503:12;11527:180;11575:77;11572:1;11565:88;11672:4;11669:1;11662:15;11696:4;11693:1;11686:15;11713:281;11796:27;11818:4;11796:27;:::i;:::-;11788:6;11784:40;11926:6;11914:10;11911:22;11890:18;11878:10;11875:34;11872:62;11869:88;;;11937:18;;:::i;:::-;11869:88;11977:10;11973:2;11966:22;11756:238;11713:281;;:::o;12000:129::-;12034:6;12061:20;;:::i;:::-;12051:30;;12090:33;12118:4;12110:6;12090:33;:::i;:::-;12000:129;;;:::o;12135:308::-;12197:4;12287:18;12279:6;12276:30;12273:56;;;12309:18;;:::i;:::-;12273:56;12347:29;12369:6;12347:29;:::i;:::-;12339:37;;12431:4;12425;12421:15;12413:23;;12135:308;;;:::o;12449:146::-;12546:6;12541:3;12536;12523:30;12587:1;12578:6;12573:3;12569:16;12562:27;12449:146;;;:::o;12601:425::-;12679:5;12704:66;12720:49;12762:6;12720:49;:::i;:::-;12704:66;:::i;:::-;12695:75;;12793:6;12786:5;12779:21;12831:4;12824:5;12820:16;12869:3;12860:6;12855:3;12851:16;12848:25;12845:112;;;12876:79;;:::i;:::-;12845:112;12966:54;13013:6;13008:3;13003;12966:54;:::i;:::-;12685:341;12601:425;;;;;:::o;13046:340::-;13102:5;13151:3;13144:4;13136:6;13132:17;13128:27;13118:122;;13159:79;;:::i;:::-;13118:122;13276:6;13263:20;13301:79;13376:3;13368:6;13361:4;13353:6;13349:17;13301:79;:::i;:::-;13292:88;;13108:278;13046:340;;;;:::o;13392:509::-;13461:6;13510:2;13498:9;13489:7;13485:23;13481:32;13478:119;;;13516:79;;:::i;:::-;13478:119;13664:1;13653:9;13649:17;13636:31;13694:18;13686:6;13683:30;13680:117;;;13716:79;;:::i;:::-;13680:117;13821:63;13876:7;13867:6;13856:9;13852:22;13821:63;:::i;:::-;13811:73;;13607:287;13392:509;;;;:::o;13907:118::-;13994:24;14012:5;13994:24;:::i;:::-;13989:3;13982:37;13907:118;;:::o;14031:222::-;14124:4;14162:2;14151:9;14147:18;14139:26;;14175:71;14243:1;14232:9;14228:17;14219:6;14175:71;:::i;:::-;14031:222;;;;:::o;14259:116::-;14329:21;14344:5;14329:21;:::i;:::-;14322:5;14319:32;14309:60;;14365:1;14362;14355:12;14309:60;14259:116;:::o;14381:133::-;14424:5;14462:6;14449:20;14440:29;;14478:30;14502:5;14478:30;:::i;:::-;14381:133;;;;:::o;14520:468::-;14585:6;14593;14642:2;14630:9;14621:7;14617:23;14613:32;14610:119;;;14648:79;;:::i;:::-;14610:119;14768:1;14793:53;14838:7;14829:6;14818:9;14814:22;14793:53;:::i;:::-;14783:63;;14739:117;14895:2;14921:50;14963:7;14954:6;14943:9;14939:22;14921:50;:::i;:::-;14911:60;;14866:115;14520:468;;;;;:::o;14994:307::-;15055:4;15145:18;15137:6;15134:30;15131:56;;;15167:18;;:::i;:::-;15131:56;15205:29;15227:6;15205:29;:::i;:::-;15197:37;;15289:4;15283;15279:15;15271:23;;14994:307;;;:::o;15307:423::-;15384:5;15409:65;15425:48;15466:6;15425:48;:::i;:::-;15409:65;:::i;:::-;15400:74;;15497:6;15490:5;15483:21;15535:4;15528:5;15524:16;15573:3;15564:6;15559:3;15555:16;15552:25;15549:112;;;15580:79;;:::i;:::-;15549:112;15670:54;15717:6;15712:3;15707;15670:54;:::i;:::-;15390:340;15307:423;;;;;:::o;15749:338::-;15804:5;15853:3;15846:4;15838:6;15834:17;15830:27;15820:122;;15861:79;;:::i;:::-;15820:122;15978:6;15965:20;16003:78;16077:3;16069:6;16062:4;16054:6;16050:17;16003:78;:::i;:::-;15994:87;;15810:277;15749:338;;;;:::o;16093:943::-;16188:6;16196;16204;16212;16261:3;16249:9;16240:7;16236:23;16232:33;16229:120;;;16268:79;;:::i;:::-;16229:120;16388:1;16413:53;16458:7;16449:6;16438:9;16434:22;16413:53;:::i;:::-;16403:63;;16359:117;16515:2;16541:53;16586:7;16577:6;16566:9;16562:22;16541:53;:::i;:::-;16531:63;;16486:118;16643:2;16669:53;16714:7;16705:6;16694:9;16690:22;16669:53;:::i;:::-;16659:63;;16614:118;16799:2;16788:9;16784:18;16771:32;16830:18;16822:6;16819:30;16816:117;;;16852:79;;:::i;:::-;16816:117;16957:62;17011:7;17002:6;16991:9;16987:22;16957:62;:::i;:::-;16947:72;;16742:287;16093:943;;;;;;;:::o;17042:474::-;17110:6;17118;17167:2;17155:9;17146:7;17142:23;17138:32;17135:119;;;17173:79;;:::i;:::-;17135:119;17293:1;17318:53;17363:7;17354:6;17343:9;17339:22;17318:53;:::i;:::-;17308:63;;17264:117;17420:2;17446:53;17491:7;17482:6;17471:9;17467:22;17446:53;:::i;:::-;17436:63;;17391:118;17042:474;;;;;:::o;17522:180::-;17570:77;17567:1;17560:88;17667:4;17664:1;17657:15;17691:4;17688:1;17681:15;17708:320;17752:6;17789:1;17783:4;17779:12;17769:22;;17836:1;17830:4;17826:12;17857:18;17847:81;;17913:4;17905:6;17901:17;17891:27;;17847:81;17975:2;17967:6;17964:14;17944:18;17941:38;17938:84;;17994:18;;:::i;:::-;17938:84;17759:269;17708:320;;;:::o;18034:180::-;18082:77;18079:1;18072:88;18179:4;18176:1;18169:15;18203:4;18200:1;18193:15;18220:180;18268:77;18265:1;18258:88;18365:4;18362:1;18355:15;18389:4;18386:1;18379:15;18406:233;18445:3;18468:24;18486:5;18468:24;:::i;:::-;18459:33;;18514:66;18507:5;18504:77;18501:103;;18584:18;;:::i;:::-;18501:103;18631:1;18624:5;18620:13;18613:20;;18406:233;;;:::o;18645:442::-;18794:4;18832:2;18821:9;18817:18;18809:26;;18845:71;18913:1;18902:9;18898:17;18889:6;18845:71;:::i;:::-;18926:72;18994:2;18983:9;18979:18;18970:6;18926:72;:::i;:::-;19008;19076:2;19065:9;19061:18;19052:6;19008:72;:::i;:::-;18645:442;;;;;;:::o;19093:141::-;19142:4;19165:3;19157:11;;19188:3;19185:1;19178:14;19222:4;19219:1;19209:18;19201:26;;19093:141;;;:::o;19240:93::-;19277:6;19324:2;19319;19312:5;19308:14;19304:23;19294:33;;19240:93;;;:::o;19339:107::-;19383:8;19433:5;19427:4;19423:16;19402:37;;19339:107;;;;:::o;19452:393::-;19521:6;19571:1;19559:10;19555:18;19594:97;19624:66;19613:9;19594:97;:::i;:::-;19712:39;19742:8;19731:9;19712:39;:::i;:::-;19700:51;;19784:4;19780:9;19773:5;19769:21;19760:30;;19833:4;19823:8;19819:19;19812:5;19809:30;19799:40;;19528:317;;19452:393;;;;;:::o;19851:60::-;19879:3;19900:5;19893:12;;19851:60;;;:::o;19917:142::-;19967:9;20000:53;20018:34;20027:24;20045:5;20027:24;:::i;:::-;20018:34;:::i;:::-;20000:53;:::i;:::-;19987:66;;19917:142;;;:::o;20065:75::-;20108:3;20129:5;20122:12;;20065:75;;;:::o;20146:269::-;20256:39;20287:7;20256:39;:::i;:::-;20317:91;20366:41;20390:16;20366:41;:::i;:::-;20358:6;20351:4;20345:11;20317:91;:::i;:::-;20311:4;20304:105;20222:193;20146:269;;;:::o;20421:73::-;20466:3;20421:73;:::o;20500:189::-;20577:32;;:::i;:::-;20618:65;20676:6;20668;20662:4;20618:65;:::i;:::-;20553:136;20500:189;;:::o;20695:186::-;20755:120;20772:3;20765:5;20762:14;20755:120;;;20826:39;20863:1;20856:5;20826:39;:::i;:::-;20799:1;20792:5;20788:13;20779:22;;20755:120;;;20695:186;;:::o;20887:543::-;20988:2;20983:3;20980:11;20977:446;;;21022:38;21054:5;21022:38;:::i;:::-;21106:29;21124:10;21106:29;:::i;:::-;21096:8;21092:44;21289:2;21277:10;21274:18;21271:49;;;21310:8;21295:23;;21271:49;21333:80;21389:22;21407:3;21389:22;:::i;:::-;21379:8;21375:37;21362:11;21333:80;:::i;:::-;20992:431;;20977:446;20887:543;;;:::o;21436:117::-;21490:8;21540:5;21534:4;21530:16;21509:37;;21436:117;;;;:::o;21559:169::-;21603:6;21636:51;21684:1;21680:6;21672:5;21669:1;21665:13;21636:51;:::i;:::-;21632:56;21717:4;21711;21707:15;21697:25;;21610:118;21559:169;;;;:::o;21733:295::-;21809:4;21955:29;21980:3;21974:4;21955:29;:::i;:::-;21947:37;;22017:3;22014:1;22010:11;22004:4;22001:21;21993:29;;21733:295;;;;:::o;22033:1395::-;22150:37;22183:3;22150:37;:::i;:::-;22252:18;22244:6;22241:30;22238:56;;;22274:18;;:::i;:::-;22238:56;22318:38;22350:4;22344:11;22318:38;:::i;:::-;22403:67;22463:6;22455;22449:4;22403:67;:::i;:::-;22497:1;22521:4;22508:17;;22553:2;22545:6;22542:14;22570:1;22565:618;;;;23227:1;23244:6;23241:77;;;23293:9;23288:3;23284:19;23278:26;23269:35;;23241:77;23344:67;23404:6;23397:5;23344:67;:::i;:::-;23338:4;23331:81;23200:222;22535:887;;22565:618;22617:4;22613:9;22605:6;22601:22;22651:37;22683:4;22651:37;:::i;:::-;22710:1;22724:208;22738:7;22735:1;22732:14;22724:208;;;22817:9;22812:3;22808:19;22802:26;22794:6;22787:42;22868:1;22860:6;22856:14;22846:24;;22915:2;22904:9;22900:18;22887:31;;22761:4;22758:1;22754:12;22749:17;;22724:208;;;22960:6;22951:7;22948:19;22945:179;;;23018:9;23013:3;23009:19;23003:26;23061:48;23103:4;23095:6;23091:17;23080:9;23061:48;:::i;:::-;23053:6;23046:64;22968:156;22945:179;23170:1;23166;23158:6;23154:14;23150:22;23144:4;23137:36;22572:611;;;22535:887;;22125:1303;;;22033:1395;;:::o;23434:175::-;23574:27;23570:1;23562:6;23558:14;23551:51;23434:175;:::o;23615:366::-;23757:3;23778:67;23842:2;23837:3;23778:67;:::i;:::-;23771:74;;23854:93;23943:3;23854:93;:::i;:::-;23972:2;23967:3;23963:12;23956:19;;23615:366;;;:::o;23987:419::-;24153:4;24191:2;24180:9;24176:18;24168:26;;24240:9;24234:4;24230:20;24226:1;24215:9;24211:17;24204:47;24268:131;24394:4;24268:131;:::i;:::-;24260:139;;23987:419;;;:::o;24412:172::-;24552:24;24548:1;24540:6;24536:14;24529:48;24412:172;:::o;24590:366::-;24732:3;24753:67;24817:2;24812:3;24753:67;:::i;:::-;24746:74;;24829:93;24918:3;24829:93;:::i;:::-;24947:2;24942:3;24938:12;24931:19;;24590:366;;;:::o;24962:419::-;25128:4;25166:2;25155:9;25151:18;25143:26;;25215:9;25209:4;25205:20;25201:1;25190:9;25186:17;25179:47;25243:131;25369:4;25243:131;:::i;:::-;25235:139;;24962:419;;;:::o;25387:172::-;25527:24;25523:1;25515:6;25511:14;25504:48;25387:172;:::o;25565:366::-;25707:3;25728:67;25792:2;25787:3;25728:67;:::i;:::-;25721:74;;25804:93;25893:3;25804:93;:::i;:::-;25922:2;25917:3;25913:12;25906:19;;25565:366;;;:::o;25937:419::-;26103:4;26141:2;26130:9;26126:18;26118:26;;26190:9;26184:4;26180:20;26176:1;26165:9;26161:17;26154:47;26218:131;26344:4;26218:131;:::i;:::-;26210:139;;25937:419;;;:::o;26362:332::-;26483:4;26521:2;26510:9;26506:18;26498:26;;26534:71;26602:1;26591:9;26587:17;26578:6;26534:71;:::i;:::-;26615:72;26683:2;26672:9;26668:18;26659:6;26615:72;:::i;:::-;26362:332;;;;;:::o;26700:148::-;26802:11;26839:3;26824:18;;26700:148;;;;:::o;26854:390::-;26960:3;26988:39;27021:5;26988:39;:::i;:::-;27043:89;27125:6;27120:3;27043:89;:::i;:::-;27036:96;;27141:65;27199:6;27194:3;27187:4;27180:5;27176:16;27141:65;:::i;:::-;27231:6;27226:3;27222:16;27215:23;;26964:280;26854:390;;;;:::o;27250:435::-;27430:3;27452:95;27543:3;27534:6;27452:95;:::i;:::-;27445:102;;27564:95;27655:3;27646:6;27564:95;:::i;:::-;27557:102;;27676:3;27669:10;;27250:435;;;;;:::o;27691:175::-;27831:27;27827:1;27819:6;27815:14;27808:51;27691:175;:::o;27872:366::-;28014:3;28035:67;28099:2;28094:3;28035:67;:::i;:::-;28028:74;;28111:93;28200:3;28111:93;:::i;:::-;28229:2;28224:3;28220:12;28213:19;;27872:366;;;:::o;28244:419::-;28410:4;28448:2;28437:9;28433:18;28425:26;;28497:9;28491:4;28487:20;28483:1;28472:9;28468:17;28461:47;28525:131;28651:4;28525:131;:::i;:::-;28517:139;;28244:419;;;:::o;28669:98::-;28720:6;28754:5;28748:12;28738:22;;28669:98;;;:::o;28773:168::-;28856:11;28890:6;28885:3;28878:19;28930:4;28925:3;28921:14;28906:29;;28773:168;;;;:::o;28947:373::-;29033:3;29061:38;29093:5;29061:38;:::i;:::-;29115:70;29178:6;29173:3;29115:70;:::i;:::-;29108:77;;29194:65;29252:6;29247:3;29240:4;29233:5;29229:16;29194:65;:::i;:::-;29284:29;29306:6;29284:29;:::i;:::-;29279:3;29275:39;29268:46;;29037:283;28947:373;;;;:::o;29326:640::-;29521:4;29559:3;29548:9;29544:19;29536:27;;29573:71;29641:1;29630:9;29626:17;29617:6;29573:71;:::i;:::-;29654:72;29722:2;29711:9;29707:18;29698:6;29654:72;:::i;:::-;29736;29804:2;29793:9;29789:18;29780:6;29736:72;:::i;:::-;29855:9;29849:4;29845:20;29840:2;29829:9;29825:18;29818:48;29883:76;29954:4;29945:6;29883:76;:::i;:::-;29875:84;;29326:640;;;;;;;:::o;29972:141::-;30028:5;30059:6;30053:13;30044:22;;30075:32;30101:5;30075:32;:::i;:::-;29972:141;;;;:::o;30119:349::-;30188:6;30237:2;30225:9;30216:7;30212:23;30208:32;30205:119;;;30243:79;;:::i;:::-;30205:119;30363:1;30388:63;30443:7;30434:6;30423:9;30419:22;30388:63;:::i;:::-;30378:73;;30334:127;30119:349;;;;:::o;30474:180::-;30522:77;30519:1;30512:88;30619:4;30616:1;30609:15;30643:4;30640:1;30633:15;30660:332;30781:4;30819:2;30808:9;30804:18;30796:26;;30832:71;30900:1;30889:9;30885:17;30876:6;30832:71;:::i;:::-;30913:72;30981:2;30970:9;30966:18;30957:6;30913:72;:::i;:::-;30660:332;;;;;:::o;30998:::-;31119:4;31157:2;31146:9;31142:18;31134:26;;31170:71;31238:1;31227:9;31223:17;31214:6;31170:71;:::i;:::-;31251:72;31319:2;31308:9;31304:18;31295:6;31251:72;:::i;:::-;30998:332;;;;;:::o",
        "linkReferences": {},
        "immutableReferences": {
            "7234": [
                {
                    "start": 3378,
                    "length": 32
                },
                {
                    "start": 5026,
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
        "setImageURL(string)": "58e792ee",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenIssuers(uint256)": "b7abc58d",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_revokable\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"_factoryContract\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_imageURL\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AccessControlBadConfirmation\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"neededRole\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"issuer\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"TokenIssued\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"revoker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"TokenRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"REVOKER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burnToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factoryContract\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getIssuedTokens\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"address[]\",\"name\":\"issuers\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantMinterRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRevokerRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"imageURL\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"issueToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"metadata\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"issuedAt\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"callerConfirmation\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"revokable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"revokeToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"newURL\",\"type\":\"string\"}],\"name\":\"setImageURL\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenIssuers\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"A trust-based non-transferable token contract with optional revocation support.\",\"errors\":{\"AccessControlBadConfirmation()\":[{\"details\":\"The caller of a function is not the expected one. NOTE: Don't confuse with {AccessControlUnauthorizedAccount}.\"}],\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"details\":\"The `account` is missing a role.\"}],\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted to signal this.\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call. This account bears the admin role (for the granted role). Expected in cases where the role was granted using the internal {AccessControl-_grantRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"},\"TokenIssued(address,address,uint256)\":{\"details\":\"Event emitted when a token is issued.\"},\"TokenRevoked(address,uint256)\":{\"details\":\"Event emitted when a token is revoked.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"burnToken(uint256)\":{\"details\":\"Allows the owner of a token to burn it.\",\"params\":{\"tokenId\":\"The ID of the token to burn.\"}},\"constructor\":{\"details\":\"Constructor to initialize the contract.\",\"params\":{\"_factoryContract\":\"Address of the factory contract.\",\"_imageURL\":\"contains the image associated with the token\",\"_revokable\":\"Boolean indicating if the token can be revoked.\",\"admin\":\"The address of the contract administrator.\",\"name\":\"The name of the token.\",\"symbol\":\"The symbol of the token.\"}},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"getIssuedTokens(address)\":{\"details\":\"Returns the list of tokens issued to a recipient and their issuers.\",\"params\":{\"user\":\"The address of the user.\"},\"returns\":{\"issuers\":\"The list of addresses that issued each token.\",\"tokenIds\":\"The list of token IDs issued to the user.\"}},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantMinterRole(address)\":{\"details\":\"Grants the minter role to an account.\",\"params\":{\"account\":\"The address to be granted the minter role.\"}},\"grantRevokerRole(address)\":{\"details\":\"Grants the revoker role to an account.\",\"params\":{\"account\":\"The address to be granted the revoker role.\"}},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"issueToken(address)\":{\"details\":\"Issues a new trust token to a recipient.\",\"params\":{\"recipient\":\"The address receiving the token.\"}},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"revokeToken(uint256)\":{\"details\":\"Revokes a trust token if revocation is enabled.\",\"params\":{\"tokenId\":\"The ID of the token to revoke.\"}},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"Overrides supportsInterface to include AccessControl and ERC721 support.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"title\":\"TNT\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TNT.sol\":\"TNT\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xc1bebdee8943bd5e9ef1e0f2e63296aa1dd4171a66b9e74d0286220e891e1458\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://928cf2f0042c606f3dcb21bd8a272573f462a215cd65285d2d6b407f31e9bd67\",\"dweb:/ipfs/QmWGxjckno6sfjHPX5naPnsfsyisgy4PJDf46eLw9umfpx\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x4d9a2b261b56a1e4a37bb038151dec98b952fed16de2bdfdda27e38e2b12b530\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f724110f7aeb6151af800ab8c12e6060b29bda9e013f0ccb331eb754d6a7cbf0\",\"dweb:/ipfs/QmUcjzCZpxtUPdEThtAzE1f9LvuJiUGZxTdH9N6bHrb5Cf\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x39ed367e54765186281efcfe83e47cf0ad62cc879f10e191360712507125f29a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2c5ae6d85bd48cca8d6d2fcec8c63efd86f56f8a5832577a47e403ce0e65cb09\",\"dweb:/ipfs/QmUtcS8AbRSWhuc61puYet58os8FvSqm329ChoW8wwZXZk\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11\",\"dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34\",\"dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0xddab643169f47a2c5291afafcbfdca045d9e6835553307d090bc048b6dabd0ac\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d0ffbacfee42977167b3c75bd4787f8b72a7ab1176abd544f3dff662c6528e24\",\"dweb:/ipfs/QmUprM1cWCyaQ3LDjHA2DhwiPs3wekQ6MWXHFZdMMxpcyX\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x81c274a60a7ae232ae3dc9ff3a4011b4849a853c13b0832cd3351bb1bb2f0dae\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9da0c20dc74358a2a76330818f3bac9d1e2ce3371aec847b9cbf5d147fbae4f6\",\"dweb:/ipfs/QmeczhmnFv1hbXKGLwbYXY6Rrytc9a5A2YaRi5QMMgjPnb\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xddce8e17e3d3f9ed818b4f4c4478a8262aab8b11ed322f1bf5ed705bb4bd97fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8084aa71a4cc7d2980972412a88fe4f114869faea3fefa5436431644eb5c0287\",\"dweb:/ipfs/Qmbqfs5dRdPvHVKY8kTaeyc65NdqXRQwRK7h9s5UJEhD1p\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c5fab4970634f9ab9a620983dc1c8a30153981a0b1a521666e269d0a11399d3\",\"dweb:/ipfs/QmVRnBC575MESGkEHndjujtR7qub2FzU9RWy9eKLp4hPZB\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]},\"src/TNT.sol\":{\"keccak256\":\"0x3da5a228457bc0a0c50c6a52bcadec9a4c7edea0a50b662587a25b686327ecb4\",\"license\":\"AEL\",\"urls\":[\"bzz-raw://a782eeaa8c30048fade13c67f3bea147d7f938cac0fb93bdf4e5f81fb6bf7b55\",\"dweb:/ipfs/QmVo6bKPh7bQqTkr7t536QxbQ9H9SpfG6SJtR2QtjCYura\"]}},\"version\":1}",
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
                            "internalType": "string",
                            "name": "newURL",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setImageURL"
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
                "keccak256": "0x3da5a228457bc0a0c50c6a52bcadec9a4c7edea0a50b662587a25b686327ecb4",
                "urls": [
                    "bzz-raw://a782eeaa8c30048fade13c67f3bea147d7f938cac0fb93bdf4e5f81fb6bf7b55",
                    "dweb:/ipfs/QmVo6bKPh7bQqTkr7t536QxbQ9H9SpfG6SJtR2QtjCYura"
                ],
                "license": "AEL"
            }
        },
        "version": 1
    },
    "id": 18
}

export const TNTAbi = TNT.abi;
