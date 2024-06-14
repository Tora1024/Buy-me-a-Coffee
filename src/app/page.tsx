// import Image from "next/image";
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
// import thirdwebIcon from "@public/thirdweb.svg";
import { client, chain } from "./client";
import { BuyMeACoffee } from "../../components/BuyMeACoffee";
// import {  } from "@/app/chain";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        marginTop: "2rem",
      }}
    >
      <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="py-20">
          <h1>BUY ME A COFFEE</h1>

          <div>
            <ConnectEmbed client={client} chain={chain} />
          </div>
          <div className="flex justify-center mb-20">
            <ConnectButton client={client} chain={chain} />
          </div>
          <BuyMeACoffee />
        </div>
      </main>
    </div>
  );
}
