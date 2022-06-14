import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/models/product.interface';
import { DataStoreService } from 'src/app/services/data-store.service';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.services';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<ProductData[]>;
  constructor(private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.cartItems$ = this.dataStore.cartItems$;
  }

  clearCart() {
    this.dataStore.clearCart();
  }
}
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    firstname: '',
    lastname:'',
    address: '',
    city:'',
    postalcode:'',
    country:'',
    creditcardnumber:'',
    Expiry:'',
    CVC:'',
    Nameoncard:''
  });

    constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
    ) {}


onSubmit(): void {
  // Process checkout data here
  this.items = this.cartService.clearCart();
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.checkoutForm.reset();
}
}
