import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const chain = defineChain(baseSepolia);

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
