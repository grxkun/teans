import React, { useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';

const App = () => {
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');

    const web3 = new Web3(Web3.givenProvider);

    const connectWallet = async () => {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts);
    };

    const registerName = async () => {
        try {
            const response = await axios.post('http://localhost:3000/register', { name, account });
            alert(`Name registered! Transaction hash: ${response.data.transactionHash}`);
        } catch (error) {
            alert(`Error: ${error.response.data.error}`);
        }
    };

    const getNameOwner = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/owner/${name}`);
            setOwner(response.data.owner);
        } catch (error) {
            alert(`Error: ${error.response.data.error}`);
        }
    };

    return (
        <div>
            <h1>Tea Name Service</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            <div>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={registerName}>Register Name</button>
                <button onClick={getNameOwner}>Get Name Owner</button>
            </div>
            {owner && <p>Owner: {owner}</p>}
        </div>
    );
};

export default App;
