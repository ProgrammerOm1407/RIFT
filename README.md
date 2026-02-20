Split-the-Bill dApp (Algorand Edition)
🚀 Project Overview
Split-the-Bill is a decentralized application built on the Algorand blockchain to simplify and automate expense sharing. Unlike traditional apps, it leverages on-chain smart contracts to ensure that every settlement is transparent, trustless, and immediate.

📝 Problem Statement
Track: Web3/Blockchain Open Innovation (Project 3: Split-the-Bill)
Social expense management often suffers from manual tracking errors and delayed payments. This project solves these issues by providing a collaborative financial interface where debts are settled directly on-chain via Algorand Testnet.

🔗 Submission Links
Live Demo URL: https://rift-bqro4vnb5-programmeroms-projects-9eafeac2.vercel.app

GitHub Repository: https://github.com/ProgrammerOm1407/RIFT.git

App ID (Testnet): 755804471

Testnet Explorer Link: View App on Lora (AlgoKit Explorer)

LinkedIn Demo Video: [INSERT YOUR LINKEDIN VIDEO URL HERE] (⚠️ Mandatory: Ensure you tag RIFT's official page)

🏗️ Architecture
The application uses a hybrid architecture to balance user experience with blockchain security:

Frontend (React/Next.js): Provides a modern dashboard for creating groups, adding expenses, and calculating debts.

Smart Contract (TEALScript): Acts as the source of truth for finalized debts and handles atomic payment transfers.

Wallet Integration (Pera/Defly): Securely signs transactions for settling balances directly between Algorand accounts.

Backend (Optional/Firebase): Stores group metadata and user-friendly descriptions.

🛠️ Tech Stack
Core: AlgoKit (Development Framework)

Smart Contracts: TEALScript / TypeScript

Frontend: React, Tailwind CSS, Lucide Icons

Deployment: Vercel (Frontend) & Algorand Testnet (Contracts)

⚙️ Installation & Setup
Clone the Repository:

Bash

git clone https://github.com/ProgrammerOm1407/RIFT.git
cd RIFT
Bootstrap AlgoKit:

Bash

algokit project bootstrap all
Run Development Server:

Bash

npm run dev
📖 Usage Guide
Create a Group: Add participants by their Algorand Testnet addresses.

Input Bills: Enter the amount, description, and who paid.

Automatic Calculation: View a real-time breakdown of who owes whom.

One-Click Settlement: Click the "Settle" button to trigger a Pera Wallet payment and clear the debt on-chain.

⚠️ Known Limitations
Currently limited to Algorand Testnet for demonstration purposes.

Requires a wallet with a minimum balance of ALGO for transaction fees.
