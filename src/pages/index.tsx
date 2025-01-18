import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Box from "@mui/material/Box";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Box>
      <Hero />
      <Nav />
    </Box>
  );
}
