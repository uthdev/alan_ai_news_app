import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

export interface ICardProps {
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

const NewCard = ({description, publishedAt, source, title, url, urlToImage, i}: ICardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={urlToImage || 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.thetidenewsonline.com%2F2020%2F07%2F10%2Fmissing-national-light-newspapers-journalist-mathew-onwuasoanya-found%2F&psig=AOvVaw2c8nu6j4cED4CQA3-IZ5PD&ust=1638636803461000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjT9fiLyPQCFQAAAAAdAAAAABAD'} />
        <div>
          <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography gutterBottom variant="h5">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewCard
