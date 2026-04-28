// backend/register.js

import { getSigner } from "./config.js";
import { LOGIC_ID } from "./constants.js";
import pkg from "js-polo";
const { POLO } = pkg;

async function main() {
  try {
    const wallet = await getSigner();

    console.log("📝 Registering Member...");

    const polo = new POLO();
    const calldata = polo.encode({
      initial_tokens: 100
    });

    const interaction = {
      fuel_price: "0x1",
      fuel_limit: "0x10000",

      sender: {
        id: wallet.address
      },

      ix_operations: [
        {
          type: 12, // LogicInvoke
          payload: {
            logic_id: LOGIC_ID,
            callsite: "Register",
            calldata: "0x" + Buffer.from(calldata).toString("hex")
          }
        }
      ]
    };

    const signed = await wallet.signInteraction(interaction);
    const txHash = await wallet.sendInteraction(signed);

    console.log("📨 TX Hash:", txHash);

    const receipt = await wallet.provider.getInteractionReceipt(txHash);

    console.log("✅ Registration Successful!");
    console.log(JSON.stringify(receipt, null, 2));

  } catch (error) {
    console.error("❌ Register Error:", error.message);
  }
}

main();
