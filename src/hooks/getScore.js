import { firestore } from "../firebase/init.js";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Function to get top 10 user scores from multiple collections
export async function getTopScoresForPartners(eligiblePartners) {
  let allTopScores = [];

  for (const partner of eligiblePartners) {
    if (partner.partnerName) {
      const scoresCollection = collection(firestore, partner.partnerName); // Use partner name for the collection
      const scoresQuery = query(
        scoresCollection,
        orderBy("gameScore", "desc"),
        limit(10)
      );
      const scoresSnapshot = await getDocs(scoresQuery);

      const userScores = [];
      scoresSnapshot.forEach((doc) => {
        userScores.push(doc.data());
      });

      allTopScores.push({
        partner: partner.partnerName,
        topScores: userScores,
      });
    } 
  }

  return allTopScores; // Returns an array of objects with each partner's top scores
}

// Function to get a user's score from multiple partner collections
export async function getUserScoresFromPartners(walletAddress, partners) {
  let allScores = [];

  for (const partner of partners) {
    const scoresCollection = collection(firestore, partner); // Collection name dynamically set to the partner's name
    const scoresQuery = query(
      scoresCollection,
      where("walletAddress", "==", walletAddress),
      limit(1)
    );
    const scoresSnapshot = await getDocs(scoresQuery);

    const userScores = [];
    scoresSnapshot.forEach((doc) => {
      userScores.push(doc.data());
    });

    // Assuming we only want the highest score or the most recent score
    if (userScores.length > 0) {
      allScores.push({
        partner: partner,
        gameScore: userScores[0].gameScore,
      });
    } else {
      // Include the partner with a score of 0 if no score is found
      allScores.push({
        partner: partner,
        gameScore: 0,
      });
    }
  }
  console.log("All", allScores);
  return allScores; // Returns an array of objects with each partner's highest or latest score
}

// Function to delete a user's score from a specific partner's collection
export async function deleteSingleUserScore(walletAddress, partnerName) {
  const scoresCollection = collection(firestore, partnerName); // Use partnerName for the collection
  const scoresQuery = query(
    scoresCollection,
    where("walletAddress", "==", walletAddress)
  ); // Query documents with the specified walletAddress

  try {
    const scoresSnapshot = await getDocs(scoresQuery); // Retrieve the documents that match the query

    scoresSnapshot.forEach(async (doc) => {
      // Iterate through the documents
      await deleteDoc(doc.ref); // Delete each document
      console.log(
        `Document with ID ${doc.id} deleted successfully from ${partnerName} collection.`
      );
    });

    return true; // Return true indicating successful deletion
  } catch (error) {
    console.error(
      "Error deleting document from " + partnerName + " collection:",
      error
    );
    return false; // Return false indicating deletion failure
  }
}
