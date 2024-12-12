import { BarChart, Cpu, Globe, Network, Search, Zap } from 'lucide-react';
import React from 'react'

function ServiceSection() {

    const features = [
        {
            icon: Globe,
            title: "Decentralize Deployment",
            description:
                "Deploy and access your website forever for free on the blockchain.",
        },
        {
            icon: Zap,
            title: "Instant Preview & CI/CD",
            description:
                "Automatic deployments from GitHub with instant preview links and version control.",
        },
        {
            icon: Cpu,
            title: "AI Website Generator",
            description:
                "Generate a website using AI and deploy it directly to the blockchain.",
        },
        {
            icon: Search,
            title: "Decentralized Search Engine",
            description:
                "Our search engine has indexed all websites on the blockchain network.",
        },
        {
            icon: BarChart,
            title: "Analytics & Monitoring",
            description:
                "Real-time analytics dashboard and uptime monitoring for your decentralized websites.",
        },
        {
            icon: Network,
            title: "Decentralized CDN",
            description:
                "Utilize our decentralized content delivery network for faster and more reliable access.",
        },
    ];

    return (
        <div className='mt-[8%] mx-6 md:mx-0'>

            <h2 className='text-center md:text-5xl text-3xl font-bold mb-6'>Revolutionary Web3 Hosting Platform</h2>
            <p className="md:max-w-4xl mx-auto text-center md:text-xl mb-12 text-muted-foreground leading-[1.8]"> Actually, we&apos;re not so different from other coding platforms. But with AI, do you catch our drift? Exactly, that&apos;s the point.</p>

            <div className='grid md:grid-cols-3 md:max-w-6xl mx-auto gap-8'>{
            features.map((element, index) =>
                <div key={index} className='gradient-card-blue px-4 py-8 rounded-xl border border-primary/40'>
                    <element.icon className='w-12 h-12' />
                    <p className='text-2xl my-4 font-semibold'>{element.title}</p>
                    <p>{element.description}</p>
                </div>
            )}</div>

        </div>
    )
}

export default ServiceSection