import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function Countdown() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const infuraApiKey = import.meta.env.VITE_INFURA_ID;
    const infuraUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;

    const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

    const votingEscrowAbi = [
      "function locked__end(address _addr) view returns (uint256)",
      "function locked(address _addr) view returns (int128 amount, uint256 end)",
      "function withdraw() external",
    ];
    const votingEscrowAddress = "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2";

    const votingEscrowContract = new ethers.Contract(
      votingEscrowAddress,
      votingEscrowAbi,
      provider
    );

    const addressToWatch = import.meta.env.VITE_ADDRESS_1;

    async function checkUnlockTime(address) {
        try {
            const { end } = await votingEscrowContract.locked(address);
            const unlockTime = new Date(end * 1000); // Convert end to a Date object
            
            const currentTime = new Date();
            const timeDifference = unlockTime - currentTime; // Difference in milliseconds
            
            const hoursUntilUnlock = timeDifference / (1000 * 60 * 60); // Convert milliseconds to hours
            console.log(hoursUntilUnlock)
            setTime(hoursUntilUnlock) // This may take a min to load on screen
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
    

    setInterval(() => {
        checkUnlockTime(addressToWatch);
    }, 60000);// Adjust time to your needs
  }, []);

  return (
    <>
      <div>
        <label>Count Down: </label>
        <input type="text" value={time} readOnly /><span> hrs</span>
      </div>
    </>
  );
}

export default Countdown;
