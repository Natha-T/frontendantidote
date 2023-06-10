export const initVenomConnect = async () => {
  return new VenomConnect({
    theme: "light",
    checkNetworkId: 1002,
    providersOptions: {
      venomwallet: {
        walletWaysToConnect: [
          {
            package: ProviderRpcClient,

            packageOptions: {
              fallback:
                VenomConnect.getPromise("venomwallet", "extension") ||
                (() => Promise.reject()),
              forceUseFallback: true,
            },
            packageOptionsStandalone: {
              fallback: () =>
                EverscaleStandaloneClient.create({
                  connection: {
                    id: 1002,
                    group: "venom_devnet",
                    type: "jrpc",
                    data: {
                      endpoint: "https://jrpc-devnet.venom.foundation/rpc",
                    },
                  },
                  initInput: path.resolve(
                    __dirname,
                    "/node_modules/venom-connect/nekoton_wasm_bg.wasm"
                  ),
                }),
              forceUseFallback: true,
            },

            id: "extension",
            type: "extension",
          },
        ],
        defaultWalletWaysToConnect: ["mobile", "ios", "android"],
      },
    },
  });
};
