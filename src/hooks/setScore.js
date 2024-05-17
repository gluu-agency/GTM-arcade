// In setScore.js
import { firestore } from "../firebase/init.js";
import { addDoc, collection } from "firebase/firestore";

// Function to add a user's score to a dynamically named Firestore collection
export async function addUserScoreToPartnerCollection(partnerName, gameId, wallet, gameScore) {
    try {
      const partnerScoresCollection = collection(firestore, partnerName);  // Collection named after the partner
      await addDoc(partnerScoresCollection, {
        gameId: gameId,
        walletAddress: wallet,
        gameScore: gameScore,
        timestamp: new Date()
      });
      console.log(`User score added successfully to the ${partnerName} collection`);
    } catch (error) {
      console.error("Error adding user score to partner collection: ", error);
    }
}
