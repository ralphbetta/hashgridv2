import React from 'react'
import { ThemeProvider } from '../components/provider/ThemeProvider'
import HeroSection from './components/Hero'
import ClientSection from './components/Cient'
import OffereSection from './components/Offeres'
import ServiceSection from './components/Service'
import EditorSection from './components/Editor'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import { BackgroundBeamsDemo } from './components/Hero2'

const HomePage = () => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
       <div>
        {/* <HeroSection/> */}
        <BackgroundBeamsDemo/>
        {/* <OffereSection/> */}
        <ServiceSection/>
        {/* <ClientSection/> */}
        <Feature/>
        <EditorSection/>
        <Pricing/>
       </div>
    </ThemeProvider>
  )
}

export default HomePage