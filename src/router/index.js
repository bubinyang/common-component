/*
 * @Descripttion:
 * @version:
 * @Author: BBY
 * @Date: 2020-11-12 18:34:53
 * @LastEditTime: 2020-12-07 11:01:14
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
// import Home from '../views/Home.vue'
// import layout from '@/views/layout'

Vue.use(VueRouter);

const ruleRouters = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 布局demo
  {
    path: '/layoutDemo',
    name: 'layoutDemo',
    component: () => import('@/views/layoutDemo/index.vue'),
    children: [
      {
        path: '/layoutDemo',
        component: () => import('@/views/layoutDemo/index.vue')
      }

    ]
  },

  // 导入excel
  {
    path: '/excelImport',
    name: 'excelImport',
    component: () => import('@/views/excelDemo/index.vue'),
    children: [
      {
        path: '/layoutDemo',
        component: () => import('@/views/layoutDemo/index.vue')
      }

    ]
  },

  // 树型组件
  {
    path: '/treeMenu',
    name: 'TreeMenu',
    component: () => import('@/views/treeDemo/index.vue'),
    children: [
      {
        path: '/layoutDemo',
        component: () => import('@/views/treeDemo/index.vue')
      }

    ]
  },

  // 轮番demo
  {
    path: '/swiperDemo',
    name: 'SwiperDemo',
    component: () => import('@/views/swiperDemo/index.vue'),
    children: [
      {
        path: '/layoutDemo',
        component: () => import('@/views/swiperDemo/index.vue')
      }

    ]
  },
  // 旋转
  {
    path: '/rotate',
    name: 'Rotate',
    component: () => import('@/views/rotate/index.vue'),
    children: [
      {
        path: '/rotate',
        component: () => import('@/views/rotate/index.vue')
      }

    ]
  },
  // 四宫格拖拽大小

  {
    path: '/fourGrid',
    name: 'FourGrid',
    component: () => import('@/views/fourGridLayout/index.vue'),
    children: [
      {
        path: '/rotate',
        component: () => import('@/views/fourGridLayout/index.vue')
      }

    ]
  },
  // 点击某个元素，展示弹出框，弹出框位置根据内容框决定位置
  {
    path: '/setDialogPosition',
    name: 'SetDialogPosition',
    component: () => import('@/views/setDialogPosition/index.vue'),
    children: [
      {
        path: '/setDialogPosition',
        component: () => import('@/views/setDialogPosition/index.vue')
      }

    ]
  },

  // 登录页动态效果demo
  {
    path: '/animationFactory',
    name: 'AnimationFactory',
    component: () => import('@/views/animationFactory/index.vue'),
    children: [
      {
        path: '/animationFactory',
        component: () => import('@/views/animationFactory/index.vue')
      }

    ]
  },
  // zx切换
  {
    path: '/zxDemo',
    name: 'ZxDemo',
    component: () => import('@/views/zhuangxianDemo/index.vue'),
    children: [
      {
        path: '/zxDemo',
        component: () => import('@/views/zhuangxianDemo/index.vue')
      }

    ]
  },
  // ifram预览界面
  {
    path: '/editIframe',
    name: 'Iframe',
    component: () => import('@/views/editIframe/index.vue'),
    children: [
      {
        path: '/editIframe',
        component: () => import('@/views/editIframe/index.vue')
      }

    ]
  },
  // 组件和方法列表
  {
    path: '/toolList',
    name: 'ToolList',
    component: () => import('@/views/toolList/index.vue'),
    children: [
      {
        path: '/toolList',
        component: () => import('@/views/toolList/index.vue')
      }

    ]
  },
  // 组件和方法详情页面
  {
    path: '/toolListDetail/:id',
    name: 'ToolListDetail',
    component: () => import('@/views/toolList/detail/index.vue')
  },
  // 测试
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue'),
    children: [
      {
        path: '/toolList',
        component: () => import('@/views/test/index.vue')
      }

    ]
  }

];

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [...ruleRouters]
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 路由重复禁止报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
