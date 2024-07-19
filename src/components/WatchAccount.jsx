import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import SendUnlocked from './SendUnlocked';
import ListenAndSend from './ListenAndSend';
import Countdown from './Countdown'



const WatchAccount = () => {
  const [ethBalance1, setEthBalance1] = useState(null);
  const [ethBalance2, setEthBalance2] = useState(null);
  const [logs1, setLogs1] = useState([]);
  const [logs2, setLogs2] = useState([]);

  useEffect(() => {
    const infuraApiKey = import.meta.env.VITE_INFURA_ID; // Ensure you use the right env variable prefix
    const addressToWatch1 = import.meta.env.VITE_ADDRESS_1;
    const addressToWatch2 = import.meta.env.VITE_ADDRESS_2;
    // const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${infuraApiKey}`);
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infuraApiKey}`)


    const watchAccountActivity = async () => {
      try {
        let previousEthBalance1;
        let previousEthBalance2;

        while (true) {
          // Get account1 ETH balance
          const ethBalance1 = await provider.getBalance(addressToWatch1);
          if (ethBalance1.toString() !== previousEthBalance1) {
            setEthBalance1(ethers.utils.formatEther(ethBalance1));
            previousEthBalance1 = ethBalance1.toString();
          }

          // Get account2 ETH balance
          const ethBalance2 = await provider.getBalance(addressToWatch2);
          if (ethBalance2.toString() !== previousEthBalance2) {
            setEthBalance2(ethers.utils.formatEther(ethBalance2));
            previousEthBalance2 = ethBalance2.toString();
          }

          // Get logs for account1
          const logs1 = await provider.getLogs({ address: addressToWatch1, topics: [] });
          setLogs1(logs1);

          // Get logs for account2
          const logs2 = await provider.getLogs({ address: addressToWatch2, topics: [] });
          setLogs2(logs2);

          // Add a delay between checks
          await new Promise((resolve) => setTimeout(resolve, 1000));// Adjust time to suit your needs
        }
      } catch (error) {
        console.error("Error watching account activity:", error.message);
      }
    };

    watchAccountActivity();

    // Cleanup function to stop watching activity when component unmounts
    // return () => {
    //   // Implement cleanup logic if needed
    // };
  }, []);

  return (
    <div>
      <h1>Watch Account Activity</h1>
      <div>
        <h2>Account 2</h2>
        <p>ETH Balance: {ethBalance1 !== null ? `${ethBalance1} ETH` : 'Loading...'}</p>
        <h3>Logs:</h3>
        <pre>{logs1.length > 0 ? JSON.stringify(logs1, null, 2) : 'No logs'}</pre>
      </div>
      <div>
        <h2>Account 3</h2>
        <p>ETH Balance: {ethBalance2 !== null ? `${ethBalance2} ETH` : 'Loading...'}</p>
        <h3>Logs:</h3>
        <pre>{logs2.length > 0 ? JSON.stringify(logs2, null, 2) : 'No logs'}</pre>
      </div>
      <div>------------------------------------------------------------------</div>
      <Countdown />
      <div>------------------------------------------------------------------</div>

      <SendUnlocked />
      <ListenAndSend />
    </div>
  );
};

export default WatchAccount;
