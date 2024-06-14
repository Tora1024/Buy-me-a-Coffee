import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client, chain } from "../src/app/client";

export const BuyMeACoffee = () => {
  const account = useActiveAccount();

  if (account) {
    return (
      <div
        style={{
          border: "1px solid #252525",
          padding: "2rem",
          borderRadius: "6px",
          width: "500px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <ConnectButton client={client} chain={chain} />
        </div>
      </div>
    );
  } else {
    return <div>no account</div>;
  }
};
