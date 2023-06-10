"use client";
import React, { useEffect, useState } from "react";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { EverscaleStandaloneClient } from "everscale-standalone-client";
import logos from "./logos.jpg";
import Image from "next/image";
export default function Navbar({ venomConnect }) {
  const [venomProvider, setVenomProvider] = useState();
  const [standaloneProvider, setStandAloneProvider] = useState();
  const [address, setAddress] = useState();

  const getAddress = async (provider) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };
  // Any interaction with venom-wallet (address fetching is included) needs to be authentificated
  const checkAuth = async (_venomConnect) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };
  // Method for getting a standalone provider from venomConnect instance
  const initStandalone = async () => {
    const standalone = await venomConnect?.getStandalone();
    setStandAloneProvider(standalone);
  };
  // Handling click of login button. We need to call connect method of out VenomConnect instance, this action will call other connect handlers
  const onLogin = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };
  // This handler will be called after venomConnect.disconnect() action
  // By click logout. We need to reset address and balance.
  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };
  // When our provider is ready, we need to get address and balance from.
  const onProviderReady = async (provider) => {
    const venomWalletAddress = provider
      ? await getAddress(provider)
      : undefined;
    if (venomWalletAddress) {
      const firstChar = venomWalletAddress.charAt(0);
      const lastFourChars = venomWalletAddress.slice(-4);
      const middleChars = "...";
      const displayedAddress = `${firstChar}${middleChars}${lastFourChars}`;
      setAddress(displayedAddress);
    } else {
      setAddress(venomWalletAddress);
    }
  };
  useEffect(() => {
    // connect event handler
    const off = venomConnect?.on("connect", onConnect);
    if (venomConnect) {
      initStandalone();
      checkAuth(venomConnect);
    }
    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [venomConnect]);

  /*
  const getAddress = async (provider) => {
    const providerState = await provider?.getProviderState?.();

    return providerState?.permissions.accountInteraction?.address.toString();
  };

  const checkAuth = async (_venomConnect) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };
  const initStandalone = async () => {
    const standalone = await venomConnect?.getStandalone();
    setStandAloneProvider(standalone);
  };
  const onLogin = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  const onConnect = async (provider) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };
  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };
  const onProviderReady = async (provider) => {
    const venomWalletAddress = provider
      ? await getAddress(provider)
      : undefined;

    setAddress(venomWalletAddress);
  };

  useEffect(() => {
    // connect event handler
    const off = venomConnect?.on("connect", onConnect);
    if (venomConnect) {
      initStandalone();
      checkAuth(venomConnect);
    }
    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [venomConnect]);
*/

  return (
    <div className="flex  py-2 w-full bg-slate-500  justify-around items-center">
      <div className="flex items-center gap-2">
        <Image
          src={logos}
          alt="logo"
          width={20}
          height={20}
          className="w-20 h-20"
        />{" "}
        <h1 className="font-mono font-bold text-4xl text-white">Antidote</h1>
      </div>
      <nav className="space-x-10 flex items-center  text-white text-xl font-mono font-medium">
        <a href="/">Home</a>
        <a href="/about">About</a>

        <a href="BuyToken">buy,$ANTI</a>

        {address ? (
          <div className="">
            {" "}
            <button
              onClick={onDisconnect}
              className="bg-red-600 px-8   rounded-md"
            >
              {" "}
              <p className=" text-sm">{address}</p>
              Disconnect
            </button>
          </div>
        ) : (
          <button
            className="pr-6 pl-6 p-3 bg-blue-600 rounded-md"
            onClick={onLogin}
          >
            Connect wallet
          </button>
        )}
      </nav>
    </div>
  );
}
