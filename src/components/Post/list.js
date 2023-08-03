import React from 'react'
import { Box, ScrollView, Text } from '../../components'
import Post from '.'

const PostList = () => {
  return (
    <Box>
      {Array.from(Array(40))?.map((item) => (
        <Post />
      ))}
    </Box>
  )
}

export default PostList
