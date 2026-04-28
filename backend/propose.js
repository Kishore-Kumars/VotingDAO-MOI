// backend/propose.js

import { getSigner } from "./config.js";
import { LOGIC_ID } from "./constants.js";
import pkg from "js-polo";
const { POLO } = pkg;

async function main() {
  try {
    const wallet = await getSigner();

    console.log("📢 Creating Proposal...");

    const polo = new POLO();
    const calldata = polo.encode({
      title: "Increase Developer Rewards",
      desc: "Proposal to increase the participation score reward for creating proposals."
    });

    const interaction = {
      fuel_price: "0x1",
      fuel_limit: "0x10000",

      sender: {
        id: wallet.address,
      },

      ix_operations: [
        {
          type: 12, // LogicInvoke
          payload: {
            logic_id: LOGIC_ID,
            callsite: "Propose",
            calldata: "0x" + Buffer.from(calldata).toString("hex")
          }
        }
      ]
    };

    const signed = await wallet.signInteraction(interaction);
    const response = await wallet.sendInteraction(signed);

    console.log("📤 TX Hash:", response);
    console.log("⏳ Waiting for receipt...");

    const receipt = await wallet.provider.getInteractionReceipt(response);

    console.log("✅ Proposal Created successfully!");
    console.log(JSON.stringify(receipt, null, 2));

  } catch (error) {
    console.error("❌ Propose Error:", error.message);
  }
}

main();
