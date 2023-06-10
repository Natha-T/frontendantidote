"use client";
import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Advantages from "../components/advantages";
import About from "../components/about";
import { VenomConnect } from "venom-connect";
import { initVenomConnect } from "../components/connect/config";
import { useEffect, useState } from "react";
export default function Vault() {
  const [venomConnect, setVenomConnect] = useState();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className=" bg-gray-700">
      <Navbar venomConnect={venomConnect} />
      <Header />
      <Advantages />
      <About />
    </div>
  );
}
