import React from 'react'
import { Box } from '../../components'
import Header from '../../components/Header'
import StoryList from '../../components/Story/list'

export function Feed() {
  return (
    <Box background="light">
      <Header title={'Explore'} />
      <StoryList />
    </Box>
  )
}
