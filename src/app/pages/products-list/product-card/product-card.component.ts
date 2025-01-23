import { Component, ElementRef, inject, input,ViewChild ,} from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
   <div class="bg-white shadow-md border rounded-lg flex flex-col gap-6 relative p-6">
<div class="mx-auto">
   <img [src]="product().image" alt="{{product().title}}" class="w-[200px] h-[300px] object-cover rounded-lg" />
 <div class="flex flex-col mt-2">
  <span class="text-md font-bold">
    {{product().title}}
  </span>
  <span class="text-sm ">
    {{'$'+product().price}}
  </span>
  <app-primary-button label="إضافة الي السلة" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
 </div>
 <span class=" absolute top-2 right-3 text-sm font-bold"
 [class]=" product().stock ? 'text-green-500' : 'text-red-500'">
@if (product().stock) {
{{product().stock}} left


}@else {
 Out Of Stock

}
 </span>
   <div>
  </div>

  `,
  styles: `
   .info-widget {
        width: 31.75%;
        border: 1px solid black;
        display: inline-block;
      }
      .custom-slider-main{
    display: flex;
    overflow: hidden;    
    scroll-behavior: smooth;
}

      .middle {
        float: left;
        width: 90%;
        overflow: auto;
        /*will change this to hidden later to deny scolling to user*/
        white-space: nowrap;
      }`
})
export class ProductCardComponent {
cartService = inject(CartService);
  product=input.required<Product>();


}
