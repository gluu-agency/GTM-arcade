import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const ConnectBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  // Connect Wallet Button
                  <div className="connect-button absolute top-0 right-0 ">
                    <div className=" absolute flex items-center gap-3 right-6   text-white ">
                      <button
                        onClick={openConnectModal}
                        className="connect-button-text"
                        type="button"
                      >
                        Connect Wallet
                      </button>
                      <div className="circle"></div>
                    </div>
                  </div>
                );
              }

              if (chain.unsupported) {
                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <div className="connect-button absolute top-0 right-0 ">
                      <button
                        onClick={openChainModal}
                        className="text-white font-[700]  text-[1.25rem] font-[D-DIN]  "
                        type="button"
                      >
                        {account.displayName}
                      </button>
                      <div className="green-circle"></div>
                    </div>
                  </div>
                );
              }

              return (
                //After connection button
                <div style={{ display: "flex", gap: 12 }}>
                  <div className="connect-button absolute top-0 right-0 ">
                    <button
                      onClick={openAccountModal}
                      className="text-white font-[700]  text-[1.25rem] font-[D-DIN]  "
                      type="button"
                    >
                      {account.displayName}
                    </button>
                    <div className="green-circle"></div>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectBtn;
