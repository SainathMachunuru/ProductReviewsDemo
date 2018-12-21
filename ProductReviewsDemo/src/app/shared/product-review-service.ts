import {Review} from '../review/review.model'
import { Subject } from 'rxjs';
import {Injectable } from '../../../node_modules/@angular/core';
@Injectable()
export class ProductReviewService{
    reviewsChanged = new Subject<Review[]>();
    productReviews:Review[] = [
        new Review(
          "This is fabulous",
          "computer",
          new Date(),
          [false,false,false,false,false],
          "sample description1"
          ),
          new Review(
          "This is avarage",
          "computer",
          new Date(),
          [false,false,true,true,true],
          "sample description2"
          )
      
      ];

      public onAddReviewToProduct(review:Review){
          this.productReviews.push(review);
          this.reviewsChanged.next(this.productReviews.slice());
      }
      public getReviews(){
          return this.productReviews.slice();
      }

}
