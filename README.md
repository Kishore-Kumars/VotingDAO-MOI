# VotingDAO-MOI
A participation-based DAO built on MOI where voting power depends on user engagement instead of token ownership.

## Problem Statement
Traditional DAOs rely on token-based voting (1 token = 1 vote), leading to centralization by wealthy but inactive participants.

## Our Solution
A Participation-Based DAO on MOI, where voting power is:
`vote_weight = token_balance + participation_score`

Active users earn score by proposing and voting, increasing their influence over time.

---

## Tech Stack
* **MOI Protocol**: Participant-centric blockchain.
* **Cocolang**: Logic language for MOI.
* **js-moi-sdk**: Interaction with MOI network.
* **JSON-RPC**: Backend communication.

---

## Project Structure
```text
VotingDAO-MOI/
├── backend/
│   ├── bytecode.json    # Logic manifest
│   ├── config.js       # Provider & Signer setup
│   ├── constants.js    # Logic ID storage
│   ├── deploy.js       # Deployment script
│   ├── register.js     # Join DAO script
│   ├── propose.js      # Create proposal script
│   ├── vote.js         # Voting script
│   └── getScore.js     # Fetch weight script
├── logic/
│   └── dao.coco        # Cocolang logic source
├── frontend/
│   └── index.html      # SDK-integrated dashboard
└── .env.example
```

---

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Create a `.env` file based on `.env.example` and add your private key.

### 3. Deploy DAO
```bash
npm run deploy
```
Copy the `logic_id` from the receipt and paste it into `backend/constants.js`.

### 4. Run interactions (CLI)
```bash
node backend/register.js
node backend/propose.js
node backend/vote.js
```

### 5. Frontend
Open `frontend/index.html` in your browser. Enter your private key and the Logic ID to interact with the DAO.

---

## How it Works
1. **Join**: Members register and receive initial tokens.
2. **Propose**: Creating a proposal costs nothing but earns **+10 participation score**.
3. **Vote**: Voting earns **+5 participation score**.
4. **Weight**: Your influence is the sum of your tokens and your earned score.
