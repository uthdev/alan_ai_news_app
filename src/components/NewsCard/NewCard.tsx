import React, { useState, useEffect, createRef, RefObject } from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './styles'
export interface ICardProps {
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

const NewCard = ({description, publishedAt, source, title, url, urlToImage, activeArticle,  i}: ICardProps) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    const node = ref.current;
    if(node) {
      return window.scroll(0, node.offsetTop - 50);
    }
  }
  useEffect(() => {
    setElRefs((refs) => Array(20).fill(undefined).map((_, j) => refs[j] || createRef()));
  }, [])

  useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle])
    }
  }, [i, activeArticle, elRefs ])
  return (
    <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || 'http://www.thetidenewsonline.com/wp-content/uploads/2020/07/news-on-go.jpg'} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewCard
