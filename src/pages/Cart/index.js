import React, { useState } from 'react'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'

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
    </>
  )
}
