# GTMSpace - Web3 Game Hub

GTMSpace is a decentralized gaming platform built on the Web3 ecosystem. It serves as a hub where players can participate in various games, provided they hold a minimum of 1000 GTM tokens. The top 10 players are periodically rewarded, encouraging active participation and skill development

## Description

GTMSpace is a React.js application that leverages the power of Web3 technologies to create a unique and immersive gaming experience. Players can connect their compatible wallets (e.g., MetaMask) and participate in a wide range of games. The platform utilizes smart contracts to ensure transparency, fairness, and secure token transactions.

To incentivize players, GTMSpace employs a tokenized reward system. The top 10 performers in each game are periodically awarded with valuable prizes or GTM tokens. This gamification approach not only promotes healthy competition but also encourages active participation and skill development within the community.

## LINK

https://gtm-space-latest.vercel.app/

## Installation

To set up GTMSpace locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/GTMSpace.git
```

2. Navigate to the project directory:

```
cd GTMSpace
```

3. Install the required dependencies using npm:

```
npm install
```

4. Set up the Firebase database:

   - Create a new Firebase project in the Firebase console.
   - Enable the necessary Firebase services (e.g., Realtime Database, Authentication).
   - Copy the Firebase configuration details (API key, project ID, etc.) from the console.

5. Obtain an Alchemy key:

   - Sign up for an Alchemy account at https://www.alchemy.com/.
   - Create a new app and copy the HTTP provider URL (Alchemy key).

6. Configure the project:

   - Create a `.env` file in the project root directory.
   - Add the following environment variables, replacing the placeholders with your actual values:

   # Firebase configuration

   REACT_APP_FIREBASE_API_KEY=<Your_Firebase_API_Key>
   REACT_APP_AUTH_DOMAIN=<Your_Firebase_Auth_Domain>
   REACT_APP_PROJECT_ID=<Your_Firebase_Project_ID>
   REACT_APP_STORAGE_BUCKET=<Your_Firebase_Storage_Bucket>
   REACT_APP_MESSAGING_SENDER_ID=<Your_Firebase_Messaging_Sender_ID>
   REACT_APP_API_ID=<Your_Firebase_API_ID>
   REACT_APP_DATABASE_URL=<Your_Firebase_Database_URL>

   # Blockchain and network settings

   REACT_APP_IS_MAINNET=<Network_Identifier> # e.g., Sepolia, Mainnet
   REACT_APP_ALCHEMY_API=<Your_Alchemy_API_Key>
   REACT_APP_CONTRACT_ADDRESS_ARRAY=<Contract_Addresses_Separated_By_Commas>
   REACT_APP_REQUIRED_TOKENS_ARRAY=<Required_Tokens_Per_Contract_Separated_By_Commas>
   REACT_APP_PARTNER_LOGOS=<URLs_OF_Partner_Logos_Separated_By_Commas>
   REACT_APP_PARTNER_NAMES=<Partner_Names_Separated_By_Commas>

7. Start the development server:

```
npm run start
```

The application should now be running locally, and you can access it in your web browser at `http://localhost:3000`.

## Contributing

Contributions to GTMSpace are welcome! If you find any issues or have suggestions for improvements, please submit them via the project's issue tracker on GitHub. For major changes, it's recommended to open a discussion first before submitting a pull request.

## License

GTMSpace is released under the [MIT License](LICENSE).
