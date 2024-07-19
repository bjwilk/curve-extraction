import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// import { Link } from 'react-router-dom'; // Import Link if using react-router-dom

const SendUnlocked = () => {
  const [withdrawalStatus, setWithdrawalStatus] = useState('Monitoring...');
  const [transactionInfo, setTransactionInfo] = useState("")

//   useEffect(() => {
//     const privateKey1 = import.meta.env.REACT_APP_PRIVATE_KEY_1; // Ensure your .env variable is prefixed with REACT_APP_
//     const infuraApiKey = import.meta.env.REACT_APP_INFURA_ID;
//     // const infuraUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;

//     // const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

//     const votingEscrowAbi = [
//       "function locked__end(address _addr) view returns (uint256)",
//       "function locked(address _addr) view returns (int128 amount, uint256 end)",
//       "function withdraw() external",
//     ];
//     const votingEscrowAddress = "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2";

//     const votingEscrowContract = new ethers.Contract(
//       votingEscrowAddress,
//       votingEscrowAbi,
//       provider
//     );

//     const wallet = new ethers.Wallet(privateKey1, provider);

//     const addressToWatch = import.meta.env.VITE_ADDRESS_1;

//     let count = 0;

//     const isLockExpired = async (address) => {
//       const currentTimestamp = Math.floor(Date.now() / 1000);
//       const lockEndTime = await votingEscrowContract.locked__end(address);
//       return currentTimestamp >= lockEndTime;
//     };

//     const monitorLockStatus = async () => {
//       try {
//         while (count === 0) {
//           const lockExpired = await isLockExpired(addressToWatch);
//           if (lockExpired) {
//             setWithdrawalStatus('Withdrawal initiated');
//             const signedTransaction = await wallet.sendTransaction({
//               to: votingEscrowAddress,
//               data: votingEscrowContract.interface.encodeFunctionData("withdraw", []),
//             });
//             count++;
//             setTransactionInfo(signedTransaction.hash)
//             console.log("Withdrawal transaction hash:", signedTransaction.hash);
//           }
//           await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay.  Adjust if needed
//         }
//       } catch (error) {
//         console.error("Error:", error.message);
//         monitorLockStatus(); // Restart monitoring on error
//       }
//     };

//     monitorLockStatus();

//     return () => {
//       // Cleanup logic if necessary
//     };

//   }, []); // Empty dependency array to run once on mount

  return (
    <div className="send-unlocked-container">
      <h1>Send Unlocked</h1>
      <p>WithDrawl Status: {withdrawalStatus}</p>
      <p>Transaction Details: </p>
    </div>
  );
};

export default SendUnlocked;
