import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Điều kiển',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Sản phẩm',
    icon: '',
    link: '/pages/all-product',
  },
  {
    title: 'Nhân viên',
    icon: '',
    link: '/pages/all-staff',
  },
  {
    title: 'Trang quản lý',
    group: true,
  },
  {
    title: 'Quản lý sản phẩm',
    link: '/pages/manage',
  },
  {
    title: 'Quản lý nhân viên',
    icon: '',
    link: '/pages/manage-nv',
  },
  {
    title: 'Trang thêm',
    group: true,
  },
  {
    title: 'Thêm sản phẩm',
    icon: '',
    link: '/pages/plus',
  },
  {
    title: 'Thêm nhân viên',
    icon: '',
    link: '/pages/plus-nv',
  },

];
