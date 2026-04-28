// backend/deploy.js

import { getSigner } from "./config.js";
import fs from "fs";
import pkg from "js-polo";
const { POLO } = pkg;

// ✅ Load JSON manually
const bytecode = JSON.parse(
  fs.readFileSync(new URL("./bytecode.json", import.meta.url))
);

async function main() {
  try {
    const wallet = await getSigner();

    console.log("🚀 Deploying VotingDAO...");
    console.log("👤 Wallet:", wallet.address);

    // Encode calldata for Init(name String, quorum_min U64)
    const polo = new POLO();
    const calldata = polo.encode({
      name: "MOI Participant DAO",
      quorum_min: 3
    });

    // ── Create Interaction ─────────────────────────────
    const interaction = {
      fuel_price: "0x1",
      fuel_limit: "0x100000",

      sender: {
        id: wallet.address
      },

      ix_operations: [
        {
          type: 11, // LogicDeploy
          payload: {
            manifest: bytecode,
            callsite: "Init",
            calldata: "0x" + Buffer.from(calldata).toString("hex")
          }
        }
      ]
    };

    console.log("✍️ Signing interaction...");
    const signed = await wallet.signInteraction(interaction);

    console.log("📤 Sending interaction...");
    const txHash = await wallet.sendInteraction(signed);

    console.log("📨 TX Hash:", txHash);
    console.log("⏳ Waiting for receipt...");

    const receipt = await wallet.provider.getInteractionReceipt(txHash);

    console.log("✅ DAO DEPLOYED SUCCESSFULLY!");
    console.log(JSON.stringify(receipt, null, 2));

  } catch (error) {
    console.error("❌ DEPLOY FAILED:", error.message);
  }
}

main();
