import LogoLoop from '@/components/LogoLoop'
import { logoImgs } from '@/data/logodata'
import React from 'react'

const Trust_Section = () => {
  return (
    <div className=' w-full h-full py-30'>
        <LogoLoop
            logos={logoImgs}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
        />
    </div>
  )
}

export default Trust_Section