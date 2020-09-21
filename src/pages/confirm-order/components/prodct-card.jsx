import React from 'react'
import { View, Image } from '@tarojs/components'

import './index.scss'

/**
 * @desc 商品card
 */
const ProductCard = () => {
  return (<View className='ProductCardWrap'>
    <Image
      src='https://ipxcdn.jfshare.com/ipxmall/6287ac0c5f1013aa1114029b46e44b9e'
      className='ProductImg'
    />
    <View className='ProductInfoWrap'>
      <View className='ProductName'>北极星12支-玫瑰礼盒stardust collection</View>
      <View className='ProductSkuInfo'>
        <View className='ProductPrice'>
          &yen;
          999.00
        </View>
        <View className='ProductCount'>x1</View>
      </View>
    </View>
  </View>)
}

export default ProductCard