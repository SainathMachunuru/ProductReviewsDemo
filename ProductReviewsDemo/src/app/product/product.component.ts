import { Component, OnInit } from '@angular/core';
import {Review} from '../review/review.model';
import { Subscription } from '../../../node_modules/rxjs';
import { ProductReviewService } from '../shared/product-review-service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  reviews: Review[];
  subscription:Subscription;
  rating:number;
 
  constructor(private productReviewService:ProductReviewService) { }

  ngOnInit() {
    this.subscription = this.productReviewService.reviewsChanged
      .subscribe(
        (reviews: Review[]) => {
          this.reviews = reviews;
        }
      );
   this.reviews = this.productReviewService.getReviews();
   console.log(this.reviews);
  }

  setStarTable(record:any,data:any){  
    this.rating=data+1;  
    var tableList = this.reviews.find(function (obj: any) { return obj.Id === record.Id });  
    for(var i=0;i<=4;i++){  
      if(i<=data){  
        tableList.rating[i]=false;  
      }  
      else{  
        tableList.rating[i]=true;  
      }  
    }  
  }

}
