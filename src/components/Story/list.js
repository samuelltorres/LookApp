import React from 'react'
import { Box, ScrollView, Text } from '../../components'
import Story from '.'

const StoryList = () => {
  return (
    <Box fluid height="260px">
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold color="dark">
          Stories
        </Text>
        <Text color="danger">Show All</Text>
      </Box>
      <ScrollView
        horizontal
        style={{
          paddingLeft: 20
        }}>
        {Array.from(Array(20))?.map((item) => (
          <Story />
        ))}
      </ScrollView>
    </Box>
  )
}

export default StoryList
