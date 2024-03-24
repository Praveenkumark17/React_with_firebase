import React from 'react'
import Mycolor from './Mycolor'
import Theme from './Theme'
import { ConfigProvider } from 'antd'

function Thememain() {
  return (
    <ConfigProvider theme={Theme()}>
        <Mycolor/>
    </ConfigProvider>
  )
}

export default Thememain;