import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import LandingScreen from "./components/LandingPage/HomeScreen";
import Home from "./page";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "CSE Sathyabama Alumni",
  description: "For Students of Sathyabama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  integrity="sha384-mrcw6zmfylzcla8nl+ntuvf0sa7msxsp1uyjomp4yleunsfap+jcxn/twtiaxvxm" crossOrigin="anonymous"></script>
        <title>
          SathyabamaAlumni
        </title>
      </head>
      <body>
        {children}
        
      </body>
     
    </html>
  );
}
