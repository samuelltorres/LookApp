import React from 'react'
import { Box, Text, Title, Cover, Touchable, Spacer } from '../index'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../../styles/theme.json'

const Post = () => {
  return (
    <Box hasPadding fluid>
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
        <Touchable width="70px" height="30px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>

      <Cover
        image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width="100%"
        height="190px"
        spacing="10px 0px"
        radius="7px"
      />

      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map((item) => (
            <Cover
              circle
              width="30px"
              height="30px"
              border={`1px solid ${colors.light}`}
              spacing="0px -15px 0px 0px"
              image="https://bonnierpublications.com/app/uploads/2022/05/woman-1.jpg"
            />
          ))}
          <Text variant="small" spacing="0px 25px">
            Liked by 10,098
          </Text>
        </Box>

        <Box row justify="flex-end">
          <Touchable width="24px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable width="24px" spacing="0 15px 0 15px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />

      <Text color="dark">
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        ‘Slow Fashion’
      </Text>
    </Box>
  )
}

export default Post
