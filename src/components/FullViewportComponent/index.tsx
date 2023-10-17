import React from 'react'

type FullViewportComponentProps = {
    hildren: React.ReactElement, 
    centerContent: boolean
}

const FullViewportComponent = ({children, centerContent} : { children: React.ReactElement, centerContent: boolean}) => {
  return (
    <div className={`w-full h-screen ${centerContent? 'flex items-center justify-center' : ''}`}>
        {children}
    </div>
  )
}

export default FullViewportComponent