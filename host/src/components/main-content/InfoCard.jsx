import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {
  infoCardWrapper,
  infoCardLayout,
  infoCardHeader
} from '../../styles/styles'
import VideoContent from './info-card-content/VideoContent'
import ImageContent from './info-card-content/ImageContent'
import LikesWidget from './info-card-content/LikesWidget'
import PostInfoContent from './info-card-content/PostInfoContent'
import CardFooter from './info-card-content/CardFooter'
import LinkContent from './info-card-content/LinkContent'

const InfoCard = ({ item }) => {
  return (
    <Box sx={infoCardWrapper}>
      <LikesWidget likes={item.likes} />
      <Box sx={infoCardLayout}>
        <PostInfoContent item={item} />
        <Typography sx={infoCardHeader} variant='h6'>
          {item.desc}
        </Typography>
        {item.youtubeId && <VideoContent id={item.youtubeId} />}
        {item.image && <ImageContent image={item.image} />}
        {item.linkUrl && <LinkContent text={item.linkUrl} />}
        <CardFooter comments={item.comments} />
      </Box>
    </Box>
  )
}

export default InfoCard
