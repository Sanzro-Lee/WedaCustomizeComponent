Component({
  properties: {
    src: {
      type: String,
      value: '',
    },
  },
  data: {
    business: [
      {
        //B端tab数据
        title: '首页',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/home_tabbar.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/home_tabbar_checked.png',
      },
      {
        title: '库存管理',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/buy_tabbar.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/buy_tabbar_checked.png',
      },
      {
        title: '发布',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/publish_normo.png',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/publish_normo.png',
      },
      {
        title: '客户管理',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/customer_normol.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/customer_focus.png',
      },
      {
        title: '我的',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/me_tabbar.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/me_tabbar_checked.png',
      },
    ],
    consumer: [
      {
        //C端tab数据
        title: '首页',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/home_tabbar.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/home_tabbar_checked.png',
      },
      {
        title: '买车',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/buy_tabbar.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/buy_tabbar_checked.png',
      },
      {
        title: '我的',
        icon: 'https://img.58cdn.com.cn/images/car/activitypic/weichebao/me_tabbar.png',
        selectedIcon:
          'https://img.58cdn.com.cn/images/car/activitypic/weichebao/me_tabbar_checked.png',
      },
    ],
  },
  methods: {
    triggerCustomEvent(e) {
      this.triggerEvent('customevent', e);
    },
  },
});
