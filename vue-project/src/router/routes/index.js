export default [
  {
    path: '/',
    component: require('views/index/index.vue').default,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: require('views/home/index.vue').default,
        // component: resolve => require(['views/home/index.vue'], resolve),
      },
    ],
  },
]