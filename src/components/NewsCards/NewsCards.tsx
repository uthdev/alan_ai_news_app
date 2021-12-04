import React from 'react';
import { Grid, Grow, Typography, } from '@material-ui/core'

import useStyles from './styles'
import NewsCard, { ICardProps }from '../NewsCard/NewCard'

export interface ICardsProps {
  articles: ICardProps[]
}

const NewsCards = ({ articles }: ICardsProps) => {
  const classes = useStyles()
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map(({description, publishedAt, source, title, url, urlToImage, }, i)=> (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
            <NewsCard
              i={i}
              description={description}
              publishedAt={publishedAt}
              source={source}
              title={title}
              url={url}
              urlToImage={urlToImage}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards;
