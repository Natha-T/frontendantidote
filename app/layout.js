import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antidote ",
  description:
    "Antidote, $ANTI is the first memecoin that will drive through people's hearts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        {children}
        <Footer />
      </body>
    </html>
  );
}
