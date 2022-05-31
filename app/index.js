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
        "name": "queueTransaction",
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
        "name": "executeTransaction",
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

        const ts = get_interval(1);
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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

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
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setDevPercent_out_queue').val( queue.encodeABI() );
    $('#setDevPercent_out_run').val( run.encodeABI() );
}

async function setDevFeeStage(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const setDevFeeStage1 = $('#setDevFeeStage1').val();
    const setDevFeeStage2 = $('#setDevFeeStage2').val();
    const setDevFeeStage3 = $('#setDevFeeStage3').val();
    const signature = 'setDevFeeStage(uint256[])';
    const params = [[setDevFeeStage1,setDevFeeStage2,setDevFeeStage3]];
    const data = encodeParameters(['uint256[]'], params);
    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setDevFeeStage_out_queue').val( queue.encodeABI() );
    $('#setDevFeeStage_out_run').val( run.encodeABI() );
}

async function setUserFeeStage(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const setUserFeeStage1 = $('#setUserFeeStage1').val();
    const setUserFeeStage2 = $('#setUserFeeStage2').val();
    const setUserFeeStage3 = $('#setUserFeeStage3').val();
    const signature = 'setUserFeeStage(uint256[])';
    const params = [[setUserFeeStage1,setUserFeeStage2,setUserFeeStage3]];
    const data = encodeParameters(['uint256[]'], params);
    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setUserFeeStage_out_queue').val( queue.encodeABI() );
    $('#setUserFeeStage_out_run').val( run.encodeABI() );
}

async function setStageEnds(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const a1 = $('#setStageEnds1').val();
    const b2 = $('#setStageEnds2').val();
    const c3 = $('#setStageEnds3').val();
    const signature = 'setStageEnds(uint256[])';
    const params = [[a1,b2,c3]];
    const data = encodeParameters(['uint256[]'], params);
    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setUserFeeStage_out_queue').val( queue.encodeABI() );
    $('#setUserFeeStage_out_run').val( run.encodeABI() );
}

async function setStageStarts(){
    const master = $('#master').val();

    const eta = $('#timestamp').val();
    const a1 = $('#setStageStarts1').val();
    const b2 = $('#setStageStarts2').val();
    const c3 = $('#setStageStarts3').val();
    const signature = 'setStageStarts(uint256[])';
    const params = [[a1,b2,c3]];
    const data = encodeParameters(['uint256[]'], params);
    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setStageStarts_out_queue').val( queue.encodeABI() );
    $('#setStageStarts_out_run').val( run.encodeABI() );
}

async function HermesToken_burn(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_burn_account').val();
    const amount = $('#HermesToken_burn_amount').val();
    const signature = 'burn(address,uint256)';
    const params = [account,amount];
    const data = encodeParameters(['address','uint256'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_burn_out_queue').val( queue.encodeABI() );
    $('#HermesToken_burn_out_run').val( run.encodeABI() );
}

async function HermesToken_mint(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_mint_account').val();
    const amount = $('#HermesToken_mint_amount').val();
    const signature = 'mint(address,uint256)';
    const params = [account,amount];
    const data = encodeParameters(['address','uint256'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_mint_out_queue').val( queue.encodeABI() );
    $('#HermesToken_mint_out_run').val( run.encodeABI() );
}

async function HermesToken_grantMinterRole(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_grantMinterRole_account').val();
    const signature = 'grantMinterRole(address)';
    const params = [account];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_grantMinterRole_out_queue').val( queue.encodeABI() );
    $('#HermesToken_grantMinterRole_out_run').val( run.encodeABI() );
}

async function HermesToken_grantBurnerRole(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_grantBurnerRole_account').val();
    const signature = 'grantBurnerRole(address)';
    const params = [account];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_grantBurnerRole_out_queue').val( queue.encodeABI() );
    $('#HermesToken_grantBurnerRole_out_run').val( run.encodeABI() );
}

async function HermesToken_revokeMinterRole(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_revokeMinterRole_account').val();
    const signature = 'revokeMinterRole(address)';
    const params = [account];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_revokeMinterRole_out_queue').val( queue.encodeABI() );
    $('#HermesToken_revokeMinterRole_out_run').val( run.encodeABI() );
}

async function HermesToken_revokeBurnerRole(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_revokeBurnerRole_account').val();
    const signature = 'revokeBurnerRole(address)';
    const params = [account];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_revokeBurnerRole_out_queue').val( queue.encodeABI() );
    $('#HermesToken_revokeBurnerRole_out_run').val( run.encodeABI() );
}

async function HermesToken_transferOwnership(){
    const master = $('#HermesToken').val();
    const eta = $('#timestamp').val();

    const account = $('#HermesToken_transferOwnership_newOwner').val();
    const signature = 'transferOwnership(address)';
    const params = [account];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#HermesToken_transferOwnership_out_queue').val( queue.encodeABI() );
    $('#HermesToken_transferOwnership_out_run').val( run.encodeABI() );
}

async function setRewardRate(){
    const master = $('#SimpleRewarderPerSec').val();
    const eta = $('#timestamp').val();

    const val = $('#setRewardRate_tokenPerSec').val();
    const signature = 'setRewardRate(uint256)';
    const params = [val];
    const data = encodeParameters(['uint256'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setRewardRate_out_queue').val( queue.encodeABI() );
    $('#setRewardRate_out_run').val( run.encodeABI() );
}

async function Distributor_setCaller(){
    const master = $('#Distributor').val();
    const eta = $('#timestamp').val();

    const caller = $('#setRewardRate_caller').val();
    const status = $('#setRewardRate_status').is(":checked");
    const signature = 'setCaller(address,bool)';
    const params = [caller,status];
    const data = encodeParameters(['address','bool'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#Distributor_setCaller_out_queue').val( queue.encodeABI() );
    $('#Distributor_setCaller_out_run').val( run.encodeABI() );
}

async function Distributor_pairRemove(){
    const master = $('#Distributor').val();
    const eta = $('#timestamp').val();

    const val = $('#pairRemove_pair').val();
    const signature = 'pairRemove(address)';
    const params = [val];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#Distributor_pairRemove_out_queue').val( queue.encodeABI() );
    $('#Distributor_pairRemove_out_run').val( run.encodeABI() );
}

async function Distributor_addNewToken(){
    const master = $('#Distributor').val();
    const eta = $('#timestamp').val();

    const token = $('#addNewToken_token').val();
    const xHRMSPath_a = $('#addNewToken_xHRMSPath_a').val();
    const xHRMSPath_b = $('#addNewToken_xHRMSPath_b').val();
    const sHRMSPath_a = $('#addNewToken_xHRMSPath_a').val();
    const sHRMSPath_b = $('#addNewToken_xHRMSPath_a').val();
    const signature = 'addNewToken(address,uint256[],uint256[])';
    const params = [token,[xHRMSPath_a,xHRMSPath_b],[sHRMSPath_a,sHRMSPath_b]];
    const data = encodeParameters(['address','uint256[]','uint256[]'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#Distributor_addNewToken_out_queue').val( queue.encodeABI() );
    $('#Distributor_addNewToken_out_run').val( run.encodeABI() );
}

async function Distributor_setToken(){
    const master = $('#Distributor').val();
    const eta = $('#timestamp').val();

    const token = $('#addNewToken_token').val();
    const xHRMSPath_a = $('#addNewToken_sHRMSPath_a').val();
    const xHRMSPath_b = $('#addNewToken_sHRMSPath_b').val();
    const sHRMSPath_a = $('#addNewToken_sHRMSPath_a').val();
    const sHRMSPath_b = $('#addNewToken_sHRMSPath_a').val();
    const signature = 'setToken(address,uint256[],uint256[])';
    const params = [token,[xHRMSPath_a,xHRMSPath_b],[sHRMSPath_a,sHRMSPath_b]];
    const data = encodeParameters(['address','uint256[]','uint256[]'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#Distributor_setToken_out_queue').val( queue.encodeABI() );
    $('#Distributor_setToken_out_run').val( run.encodeABI() );
}

async function StableHermesStaking_addRewardToken(){
    const master = $('#StableHermesStaking').val();
    const eta = $('#timestamp').val();

    const val = $('#addRewardToken_rewardToken').val();
    const signature = 'addRewardToken(address)';
    const params = [val];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#addRewardToken_out_queue').val( queue.encodeABI() );
    $('#addRewardToken_out_run').val( run.encodeABI() );
}

async function StableHermesStaking_removeRewardToken(){
    const master = $('#StableHermesStaking').val();
    const eta = $('#timestamp').val();

    const val = $('#removeRewardToken_rewardToken').val();
    const signature = 'removeRewardToken(address)';
    const params = [val];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#removeRewardToken_out_queue').val( queue.encodeABI() );
    $('#removeRewardToken_out_run').val( run.encodeABI() );
}

async function StableHermesStaking_setDepositFeePercent(){
    const master = $('#StableHermesStaking').val();
    const eta = $('#timestamp').val();

    const val = $('#setDepositFeePercent_depositFeePercent').val();
    const signature = 'setDepositFeePercent(uint256)';
    const params = [val];
    const data = encodeParameters(['uint256'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setDepositFeePercent_out_queue').val( queue.encodeABI() );
    $('#setDepositFeePercent_out_run').val( run.encodeABI() );
}

async function setFeeTo(){
    const master = $('#HermesFactory').val();
    const eta = $('#timestamp').val();

    const val = $('#setFeeTo_feeTo').val();
    const signature = 'setFeeTo(address)';
    const params = [val];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setFeeTo_out_queue').val( queue.encodeABI() );
    $('#setFeeTo_out_run').val( run.encodeABI() );
}

async function setFeeToSetter(){
    const master = $('#HermesFactory').val();
    const eta = $('#timestamp').val();

    const val = $('#setFeeTo_feeTo').val();
    const signature = 'setFeeToSetter_feeToSetter(address)';
    const params = [val];
    const data = encodeParameters(['address'], params);

    const value = 0;
    const queue = await timelock.methods.queueTransaction(master, value, signature, data, eta);
    const run = await timelock.methods.executeTransaction(master, value, signature, data, eta);

    $('#setFeeToSetter_out_queue').val( queue.encodeABI() );
    $('#setFeeToSetter_out_run').val( run.encodeABI() );
}
