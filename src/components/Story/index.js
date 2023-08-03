import React from 'react'
import { Box, Text, Touchable, Cover } from '../'
import { colors } from '../../styles/theme.json'

const Story = () => {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px">
      <Cover
        width="100%"
        height="100%"
        image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between">
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://bonnierpublications.com/app/uploads/2022/05/woman-1.jpg"
          />

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              MariaJoaquina
            </Text>
            <Text variant="small" color="light">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  )
}

export default Story
