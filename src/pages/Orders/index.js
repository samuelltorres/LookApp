import React from 'react'

import Header from '../../components/Header'
import OrderList from '../../components/Order/list'

export function Orders() {
  return (
    <>
      <Header title="Your Orders" />
      <OrderList />
    </>
  )
}
