import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {ReviewComponent} from './review/review.component'
import {ProductComponent} from './product/product.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'review',pathMatch:'full'},
    {path: 'review',component: ReviewComponent},
    {path: 'product',component: ProductComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}