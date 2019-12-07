import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Home/Home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Menu/Menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Order/Order.module').then(m => m.OrderPageModule)
          }
        ]
      },
      {
        path: 'mypage',
        loadChildren: () => import('../mypage/mypage.module').then( m => m.MypagePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full'
  },
  { 
    path: 'select',
    loadChildren: () =>
     import('../select/select.module').then(m => m.SelectPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
