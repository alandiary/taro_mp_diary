export default {
  pages: [
    'pages/index/index',
    'pages/profile/index'
  ],
  tabBar: {
    custom: 'false',
    color: '#98FB98',
    selectedColor: '#90EE90',
    backgroundColor: '#FFFF00',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '主页',
        iconPath: './assets/images/icons8-scream-50.png',
        selectedIconPath: './assets/images/icons8-scream-50.png',
      }, {
        pagePath: 'pages/profile/index',
        text: 'Profile',
        iconPath: './assets/images/icons8-bt21-shooky-50.png',
        selectedIconPath: './assets/images/icons8-bt21-shooky-50.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
