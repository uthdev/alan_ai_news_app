import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

type IArticles =  {
  i: number;
  title?: string;
  description?: string;
  publishedAt: string;
  source: {
    name: string;
  }
  url: string;
  urlToImage?: string;
  activeArticle: number;
}


const alanKey = '437f19a85103a18bf29e5c5cb6b387f62e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const classes = useStyles()
  const [newsArticles, setNewsArticles] = useState<IArticles[]>([] as IArticles[])
  const [activeArticle, setActiveArticle] = useState(-1)

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }: Record<string, any>) => {
        if(command === 'newHeadlines') {
          console.log(articles)
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if(command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if(command === 'open') {
          const parsedNumber: number = number.length > 2 ? wordsToNumbers(number, {fuzzy: true }) : number
          const article = articles[parsedNumber - 1];
          if(parsedNumber > 20) {
            alanBtn({key: alanKey}).playText('Please try that again');
          } else if(article) {
            window.open(articles[parsedNumber].url, '_blank');
            alanBtn({key: alanKey}).playText('Opening...')
          }
        }
      }
    })
  },)
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src='https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg' className={classes.alanLogo} alt="alan logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App
