# VotingDAO-MOI
A participation-based DAO built on MOI where voting power depends on user engagement instead of token ownership.

## Problem Statement

Traditional DAOs (such as those on Ethereum) rely on token-based voting:

* 1 token = 1 vote
* Wealth concentration leads to centralization
* No measure of actual contribution or engagement

This results in unfair governance where inactive but wealthy participants dominate decisions.

---

## Our Solution

We built a Participation-Based DAO on MOI, where voting power is determined by:

* User participation
* Voting activity
* Proposal contributions

Instead of wealth, engagement defines influence, making governance more fair and democratic.

---

## Why MOI?

MOI introduces a participant-centric model, unlike traditional blockchains:

* State is tied to participants (not contracts)
* Context-aware interactions
* Dynamic validation of actions

---

## Core Concept

### Participant State (Cocolang)

```coco
state actor:
    token_balance        U64
    participation_score  U64
    proposals_created    U64
    votes_cast           U64
    is_member            Bool
```

---

### Voting Power Logic

```text
vote_weight = (token_balance + participation_score) / 2
```

This ensures:

* Active users gain influence
* Passive token holders lose dominance

---

## Architecture Overview

```text
User (Wallet)
    ↓
MOI Interaction (JSON-RPC)
    ↓
DAO Logic (Cocolang)
    ↓
Participant State (Tesseract)
    ↓
Voyage Explorer (UI)
```

---

## Tech Stack

* MOI (Cocolang + Interactions)
* js-moi-sdk
* JSON-RPC / WebSocket
* Node.js
* Voyage (MOI Explorer & Wallet)

---

## Project Structure

```text
VotingDAO-MOI/
├── backend/
│   ├── config.js
│   ├── deploy.js
│   ├── vote.js
│   ├── contribute.js
│   ├── getScore.js
│   ├── constants.js
│   └── bytecode.json
│
├── logic/
│   └── dao.coco
│
├── .env.example
├── package.json
├── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/VotingDAO-MOI.git
cd VotingDAO-MOI
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment

Create a `.env` file:

```env
PRIVATE_KEY=your_private_key_here
```

Do not share your private key.

---

### 4. Deploy DAO

```bash
npm run deploy
```

---

### 5. Run interactions

```bash
npm run create
npm run vote
npm run score
```

---

## How Participant-Centric State is Used

Unlike Ethereum:

* No global contract storage
* State lives in participant context (tesseract)

This enables:

* Dynamic reputation-based voting
* Identity-driven governance
* Real-time state updates

---

## Example Flow

1. User joins DAO and receives initial tokens
2. User creates a proposal and gains participation score
3. User votes and increases engagement score
4. Voting power increases based on activity

---

## MOI Integration

* Voyage Explorer for interaction tracking
* JSON-RPC for backend communication
* Context-aware execution using MOI engine

---

## Team Members

* Kishore Kumar
* (Add your teammates)

---

## Key Highlights

* Participation-based governance
* Fair voting system
* Built fully on MOI
* Uses contextual participant state
* Not token-dominated

---

## Future Improvements

* Frontend dashboard
* Reputation decay model
* Delegated voting system
* Advanced proposal tracking

---

## Conclusion

This project demonstrates how MOI enables a new generation of DAOs where governance is fair, transparent, and participation-driven, moving beyond traditional token-based systems.
