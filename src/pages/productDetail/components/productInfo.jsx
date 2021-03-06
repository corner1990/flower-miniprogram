import React from 'react'
import { View, Text } from '@tarojs/components'
// import { AtIcon } from 'taro-ui'
// import Addr from '../../../components/address'
import './index.scss'
/**
 * @desc 花礼信息
 */
const ProductInfo = props => {
  // let [addr, setAddr] = useState('')
  let {
    info: {
      base_info={}
    }
  } = props
  
  // const addrChnage = selectAddr => {
  //   setAddr(selectAddr)
  //   console.log('addr', selectAddr)
  // }
  return (<View className='ProductProductInfo'>
    <View className='ProductName'>{base_info.product_name}</View>
    <View className="ProductInfoBox">
      <View className='ProductPrice'>
        <Text className='currency'>&yen;</Text>
        {base_info.format_sale_price}
      </View>
      <View className='ProductSale'>
        <Text className='text'>{base_info.sale}</Text>
        人购买
      </View>
    </View>
    <View className='OperationWrap'>
      {/* <Addr change={addrChnage} /> */}
      {/* <View className='OperationCard'>
        <View className='OperationTitle'>配送区域</View>
        <View className='OperationVal'>
          <Text className={(addr ? '' : 'Placehoder' )}>{(addr ? addr : '请选择行政区域')}</Text>
          <AtIcon value='chevron-down' size='20' color='#d8d8d8'></AtIcon>
        </View>
      </View>
      <View className='OperationCard'>
        <View className='OperationTitle'>送达时间</View>
        <View className='OperationVal'>
          2020.08.12
          <AtIcon value='chevron-down' size='20' color='#d8d8d8'></AtIcon>
        </View>
      </View> */}
    </View>
  </View>)
}

export default ProductInfo
