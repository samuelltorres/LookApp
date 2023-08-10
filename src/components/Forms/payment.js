import React, { useState, useRef, useEffect } from 'react'
import SegmentedPicker from 'react-native-segmented-picker'

import { Box, Input, Spacer, Text, Title, Touchable } from '../'

const PaymentForm = ({ onChange = () => {} }) => {
  const pickerRef = useRef(null)

  const [data, setData] = useState({
    holder_name: '',
    number: '',
    valid_date: '',
    cvv: ''
  })

  useEffect(() => {
    onChange(data)
  }, [data])

  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={(data) =>
          setData({
            ...data,
            valid_date: `${data.month}/${data.year}`
          })
        }
        options={[
          {
            key: 'month',
            items: [
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' }
            ]
          },
          {
            key: 'year',
            items: [{ label: 'Option 3', value: 'option_3' }]
          }
        ]}
      />
      <Box>
        <Title variant="small">Select and enter your payment details</Title>
        <Spacer />
        <Text>By continuing you agree to our Terms</Text>
        <Spacer size="20px" />

        <Input
          placeholder="Holder Name"
          value={data.holder_name}
          onChangeText={(holder_name) => setData({ ...data, holder_name })}
        />
        <Spacer size="15px" />
        <Input
          placeholder="Credit Card Number"
          value={data.number}
          onChangeText={(number) => setData({ ...data, number })}
        />
        <Spacer size="15px" />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input pointerEvents="none" editable={false} placeholder="09/2025" />
        </Touchable>
        <Spacer size="15px" />
        <Box row>
          <Box spacing="0 10px 0 0">
            <Input
              placeholder="CCV"
              value={data.cvv}
              onChangeText={(cvv) => setData({ ...data, cvv })}
            />
          </Box>
          <Box justify="center">
            <Text variant="small" spacing="11px 0">
              3 or 4 digits usually found on the signature strip
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PaymentForm
