const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "CancelTransaction",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "ExecuteTransaction",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "NewAdmin",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "newDelay",
                "type": "uint256"
            }
        ],
        "name": "NewDelay",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newPendingAdmin",
                "type": "address"
            }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "QueueTransaction",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "GRACE_PERIOD",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAXIMUM_DELAY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINIMUM_DELAY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "acceptAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin_initialized",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "cancelTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "delay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "executeTransaction",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "queueTransaction",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "queuedTransactions",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "delay_",
                "type": "uint256"
            }
        ],
        "name": "setDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "pendingAdmin_",
                "type": "address"
            }
        ],
        "name": "setPendingAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];
let web3, account, timelock;
function fromWei(v) {
    return web3.utils.fromWei(v);
}
function toWei(v) {
    return web3.utils.toWei(v);
}
let Web3Modal, web3Modal, provider;
async function onLoad(callback){
    const providerOptions = {};
    Web3Modal = window.Web3Modal.default;
    const providers = {
        metamask: {
            id: "injected",
            name: "MetaMask",
            type: "injected",
            check: "isMetaMask"
        },
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "647c7c604e3a4164a3400530f46e8e34", // Required
                qrcodeModalOptions: {
                    mobileLinks: [
                        "rainbow",
                        "metamask",
                        "argent",
                        "trust",
                        "imtoken",
                        "pillar"
                    ]
                }
            }
        },
    };
    web3Modal = new Web3Modal(providers);
    provider = await web3Modal.connect();
    provider.on("accountsChanged", (accounts) => {
        console.log("accountsChanged", accounts);
        load(provider);
    });
    provider.on("chainChanged", (chainId) => {
        console.log("chainChanged", chainId);
        load(provider);
    });
    provider.on("connect", (info) => {
        console.log("connect", info);
        load(provider);
    });
    provider.on("disconnect", (error) => {
        console.log("disconnect", error);
        alert(error.message);
    });

    await load(provider);
    if( callback ){
        await callback();
    }
    // setInterval(pendingReward, 10000);
}

async function accountLoad(provider) {
    if (provider) {
        const r = await provider.request({method: 'eth_requestAccounts'});
        web3 = new Web3(provider);
        account = r[0];
        return true;
    }
    return false;
}



async function load(provider) {
    const enabled = await accountLoad(provider);
    if (enabled) {
        $('#WALLET').html('wallet: ...'+account.substr(account.length - 5));
        timelock = new web3.eth.Contract(abi,'0x3d9f5f87ef9abe7e0c985c48e66f3e3b863450e2');

        const ts = get_interval(12);
        $('.timestamp').val(ts);

    } else {
        alert('no web3 connection');
    }
}

function encodeParameters(types, values) {
    const abi = new ethers.utils.AbiCoder();
    return abi.encode(types, values);
}

function get_interval(hours) {
    return parseInt((new Date().getTime() + (60 * 60 * hours * 1000)) / 1000);
}

async function add_lp(){
    const eta = $('#add_timestamp').val();
    const master = $('#master').val();
    const lp = $('#lp').val();
    const points = $('#alloc').val();
    const rewarder = $('#rewarder').val();
    const signature = 'add(uint256,address,address)';
    const params = [points, lp, rewarder];
    const data = encodeParameters(['uint256', 'address', 'address'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#add_out_queue').val( queue.encodeABI() );
    $('#add_out_run').val( run.encodeABI() );
}

async function set_lp(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const pid = $('#set_pid').val();
    const points = $('#set_alloc').val();
    const rewarder = $('#set_rewarder').val();
    const overwrite = $('#set_overwrite').is(":checked");

    const signature = 'set(uint256,uint256,address,bool)';
    const params = [pid, points, rewarder, overwrite];
    const data = encodeParameters(['uint256', 'uint256', 'address', 'bool'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#set_out_queue').val( queue.encodeABI() );
    $('#set_out_run').val( run.encodeABI() );
}

async function updateEmissionRate(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const hermesPerSec = web3.utils.toWei($('#hermesPerSec').val(),'gwei');
    console.log('hermesPerSec', hermesPerSec);
    const signature = 'updateEmissionRate(uint256)';
    const params = [hermesPerSec];
    const data = encodeParameters(['uint256'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#updateEmissionRate_out_queue').val( queue.encodeABI() );
    $('#updateEmissionRate_out_run').val( run.encodeABI() );
}

async function setInvestorPercent(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const setInvestorPercent = $('#setInvestorPercent').val();
    const signature = 'setInvestorPercent(uint256)';
    const params = [setInvestorPercent];
    const data = encodeParameters(['uint256'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#setInvestorPercent_out_queue').val( queue.encodeABI() );
    $('#setInvestorPercent_out_run').val( run.encodeABI() );
}

async function setInvestorAddr(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const setInvestorPercent = $('#setInvestorAddr').val();
    const signature = 'setInvestorAddr(address)';
    const params = [setInvestorPercent];
    const data = encodeParameters(['address'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#setInvestorAddr_out_queue').val( queue.encodeABI() );
    $('#setInvestorAddr_out_run').val( run.encodeABI() );
}

async function setTreasuryPercent(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const setInvestorPercent = $('#setTreasuryPercent').val();
    const signature = 'setTreasuryPercent(uint256)';
    const params = [setInvestorPercent];
    const data = encodeParameters(['uint256'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#setTreasuryPercent_out_queue').val( queue.encodeABI() );
    $('#setTreasuryPercent_out_run').val( run.encodeABI() );
}

async function setDevPercent(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const setInvestorPercent = $('#setDevPercent').val();
    const signature = 'setDevPercent(uint256)';
    const params = [setInvestorPercent];
    const data = encodeParameters(['uint256'], params);
    const value = 0;
    const queue = await timelock.methods.executeTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.queueTransaction(master, value, signature, data, eta);

    $('#setDevPercent_out_queue').val( queue.encodeABI() );
    $('#setDevPercent_out_run').val( run.encodeABI() );
}

// setDevFeeStage(uint256[] memory _devFees)
// setUserFeeStage(uint256[] memory _userFees)
// setStageEnds(uint256[] memory _blockEnds)
// setStageStarts(uint256[] memory _blockStarts)
// (uint256 _newDevPercent)
