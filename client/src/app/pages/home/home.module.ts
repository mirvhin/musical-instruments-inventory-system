import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { shared_modules } from 'src/app/shared/shared-module';
import { ItemsIndexComponent } from './items-index/items-index.component';
import { ItemsCreateComponent } from './items-create/items-create.component';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemService } from 'src/app/services/item.service';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { SoldIndexComponent } from './sold-index/sold-index.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
      },
      {
        path: 'items/create',
        component: ItemsCreateComponent
      },
      {
        path: 'items/:id',
        component: ItemsViewComponent
      },
      {
        path: 'items',
        component: ItemsIndexComponent
      },
      {
        path: 'sold',
        component: SoldIndexComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ItemsIndexComponent,
    ItemsCreateComponent,
    ItemsViewComponent,
    SoldIndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    SharedComponentsModule,
    ...shared_modules
  ],
  providers: [
    ItemService
  ]
})
export class HomeModule { }
