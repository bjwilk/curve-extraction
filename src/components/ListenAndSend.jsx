import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const ListenAndSend = () => {
  const [transfer, setTransfer] = useState(false);
  const [amountSent, setAmountSent] = useState(null)

    // useEffect(() => {
    //   const infuraApiKey = import.meta.env.REACT_APP_INFURA_ID; // Ensure .env variables are prefixed with REACT_APP_
    //   const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infuraApiKey}`);
    //   const privateKey1 = import.meta.env.REACT_APP_PRIVATE_KEY_1; // Private key of account 1

    //   const account1 = import.meta.env.VITE_ADDRESS_1;
    //   const account2 = import.meta.env.VITE_ADDRESS_2;

    //   const wallet = new ethers.Wallet(privateKey1, provider);

    //   const ERC20_ABI = [
    //     "function name() view returns (string)",
    //     "function symbol() view returns (string)",
    //     "function totalSupply() view returns (uint256)",
    //     "function balanceOf(address) view returns (uint)",
    //     "function transfer(address to, uint amount) returns (bool)",
    //     "event Transfer(address indexed from, address indexed to, uint amount)",
    //   ];

    //   const amountToSend = ethers.utils.parseUnits('4', 18); //(18 decimals). 
    //   const crvAddress = "0xD533a949740bb3306d119CC777fa900bA034cd52"; // CRV address
    //   const contract = new ethers.Contract(crvAddress, ERC20_ABI, wallet);

    //   const main = async () => {
    //     // Listen for the Transfer event
    //     contract.on("Transfer", async (from, to, amount, event) => {
    //       console.log('Amount transferred:', amount)
    //       console.log('Type of amount:', typeof amount)
    //       if (to.toLowerCase() === account1.toLowerCase()) {
    //           setTransfer(true)
    //               console.log(typeof amount)
    //               setAmountSent(ethers.utils.formatEther(amount))
    //         console.log(
    //           `Tokens transferred to account1: ${amount} ${new Date().toLocaleString()}`
    //         );

    //         // Transfer the received tokens to account2
    //         try {
    //           // Sign and send token transfer transaction
    //           const tx = await contract.transfer(account2, amountToSend);
    //           console.log("Token transfer transaction sent:", tx.hash);
    //           await tx.wait(); // Wait for transaction to be mined
    //           console.log("Token transfer transaction mined");
    //         } catch (error) {
    //           console.error("Error sending token transfer transaction:", error);
    //         }
    //       }
    //     });
    //   };

    //   main();

    //   // Cleanup function to unsubscribe from event listeners
    //   return () => {
    //     contract.removeAllListeners(); // Remove all event listeners when component unmounts
    //   };

    // }, []); // Empty dependency array to run once on mount

  return (
    <div className="listen-and-send-container">
      <h1>Listen and Send</h1>
      {transfer ? (
        <p>Transfer sent: {amountSent} crv tokens sent to safe wallet</p>
      ) : (
        <p>Listening for token transfer events...</p>
      )}
    </div>
  );
};

export default ListenAndSend;
