import React from 'react'
import { Box, Text, Title, Cover, Touchable } from '../index'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../../styles/theme.json'

const Post = () => {
  return (
    <Box hasPadding>
      <Box row align="center">
        <Cover
          image="https://bonnierpublications.com/app/uploads/2022/05/woman-1.jpg"
          width="40px"
          height="40px"
          circle
        />
        <Box spacing="0 0 0 10px">
          <Text bold color="dark">
            Maria Joaquina
          </Text>
          <Text variant="small">5 mins ago</Text>
        </Box>
        <Touchable
          background="primary"
          width="70px"
          height="30px"
          align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
    </Box>
  )
}

export default Post
