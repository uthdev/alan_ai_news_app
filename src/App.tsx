import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
const alanKey = '437f19a85103a18bf29e5c5cb6b387f62e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }: Record<string, unknown>) => {
        if(command === 'newHeadlines') {
          console.log(articles)
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>Alan AI News Applications</h1>
    </div>
  )
}

export default App
