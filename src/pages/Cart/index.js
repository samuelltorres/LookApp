import React, { useState } from 'react'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Product from '../../components/Product'

import { ScrollView, Box, Spacer, Title, Text, Button } from '../../components'

export function Cart() {
  const [tab, setTab] = useState('cart')

  return (
    <>
      <Header goBack title="Cart" />
      <Tabs
        tabs={[
          { label: 'Cart', value: 'cart' },
          { label: 'Payment', value: 'payment' }
        ]}
        active={tab}
        onChange={(value) => setTab(value)}
      />
      <ScrollView hasPadding background="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 458765342</Title>
        <Spacer size="20px" />

        {tab === 'cart' && (
          <>
            {Array.from(Array(3))?.map((item) => (
              <Product
                cover="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                brand="Raf Simons"
                title="Large striped cardigan"
                price="$ 1080"
                selected
              />
            ))}
            <Spacer size="30px" />

            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Order:</Text>
              <Text color="dark">$445.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Discount:</Text>
              <Text color="success">$-44.50</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Delivery:</Text>
              <Text color="dark">$10.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark" bold>
                Total order:
              </Text>
              <Text color="dark" bold>
                $410.50
              </Text>
            </Box>

            <Spacer size="30px" />

            <Button block onPress={() => setTab('payment')}>
              <Text color="light">Place order</Text>
            </Button>
          </>
        )}
        {tab === 'payment' && (
          <>
            <Title>Payment</Title>
          </>
        )}
      </ScrollView>
    </>
  )
}
