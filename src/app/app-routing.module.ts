import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'data',
    pathMatch:'full'
  },
  {
    path:'data',
    loadChildren:() => import('./grid/grid.module').then(m=>m.GridModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
