import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'review', pathMatch: 'full'},
    {path: 'review', component: ReviewComponent},
    {path: 'product', component: ProductComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {
}
