'use client'
import localFont from "next/font/local";
import PublicHeader from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "../components/provider/ThemeProvider";
import DashboardHeader from "../components/layout/AdminHeader";
import Image from "next/image";
import SideNav from "../components/layout/SideNav";
import { Layout, Rocket, GitBranch, Zap, Cpu, Network, Search, Globe, Shield, LayoutDashboard } from "lucide-react";
import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [activeTab, setActiveTab] = useState("Home");

  const sidebarItems = [
    { name: "Home", icon: LayoutDashboard, route: "/dashboard" },
    // { name: "Sites", icon: Layout, route: "/dashboard/sites" },
    { name: "Deploy", icon: Rocket, route: "/dashboard/deployments" },
    // { name: "Manage Websites", icon: GitBranch, route: "/dashboard/managesites" },
    // { name: "Tokens", icon: Zap, route: "/dashboard/tokens" },
    { name: "AI Website", icon: Cpu, route: "/dashboard/aiwebsite" },
    { name: "Decentralized CDN", icon: Network, route: "/dashboard/decentralizedcdn" },
    { name: "Search Engine", icon: Search, route: "/dashboard/searchengine" },
    { name: "Example Websites", icon: Globe, route: "/dashboard/samplesites" },
    { name: "Smart Contracts", icon: Shield, route: "/dashboard/smartcontracts" },
  ];
  

  return (
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
       <div className="bg-black flex">
       <SideNav
        items={sidebarItems}
        activeItem={activeTab}
        setActiveItem={setActiveTab}
       />
      <div className="w-full overflow-y-auto relative h-svh pt-16">
        <DashboardHeader/>
      {children}
      </div>
       </div>
       
      </ThemeProvider>
  );
}
