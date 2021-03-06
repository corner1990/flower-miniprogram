import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import Tabbar from '../../components/tabbar'
import Home from './home/home' // 首页
import Found from './found/found' // 发现
import User from './user' // 我的页面
import MyOrders from './orders/orders'
// import Article from './article' // 文章列表页
import './index.scss'

const mapState = state => state.global
class Index extends Component {
  state = {
    // tab只有三个，当下标大于2的组件在内页跳转的时候需要在global中配置当前组件的坐标到对应的tab active 中
    // 如Endorsement下标为3, 我需要他展示我的，那么我需要3 配置到{ title: '我的', iconType: 'user', active: [ 2, 3]} 中
    components: [Home, Found, User, MyOrders]
  }
  componentWillMount () { 
    
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onLoad() {
    Taro.showShareMenu({
      withShareTicket:true,
      menus:['shareAppMessage','shareTimeline']
    })
  }
  // onShareAppMessage() {
  //   let res = {
  //     title: 'product_name',
  //     path: '/pages/productDetail/index',  // 自定义的分享路径，点击分享的卡片之后会跳转这里定义的路由
  //     imageUrl: 'http://ipxmall.oss-cn-zhangjiakou.aliyuncs.com/ipxmall/e7ac283d6dd0dd1b000423d6d123aec8' // 图片路径
  //   }
  //   console.log('res', res)
  //   return res;
  // }
  render () {
    let { tabIndex } = this.props
    let { components } = this.state
    let Com = components[tabIndex]
    
    return (
      <View className='layout'>
        <Com />
        <Tabbar />
      </View>
    )
  }
}

export default connect(mapState)(Index)
