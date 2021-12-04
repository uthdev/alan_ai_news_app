import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

type IArticles =  {
  i: number;
  title?: string;
  description?: string;
  publishedAt: string;
  source: {
    name: string;
  }
  url?: string;
  urlToImage?: string;
}


const alanKey = '437f19a85103a18bf29e5c5cb6b387f62e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const [newsArticles, setNewsArticles] = useState<IArticles[]>([] as IArticles[])
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }: { command: string, articles: IArticles[]}) => {
        if(command === 'newHeadlines') {
          console.log(articles)
          setNewsArticles(articles)
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>Alan AI News Applications</h1>
      <NewsCards articles={newsArticles}/>
    </div>
  )
}

export default App
