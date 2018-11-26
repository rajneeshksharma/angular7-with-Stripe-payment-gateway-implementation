import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allDone = false;
  pay = [{
    money:200, value:20000
  },
  {
    money:300, value:30000
  },
  {
    money:400, value:40000
  }];
  newpay : Number;

  openCheckout(event) {
     this.newpay = event.target.value ;
    var user=this;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_***********', // your pk test key from stripe 
      locale: 'auto',
      token: function (token: any) {
        console.log(token);
        user.allDone = true;
      }
    });

    handler.open({
      name: 'test Stripe Payment',
      description: 'Stripe',
      amount: this.newpay,
      currency: 'inr'
    });

  }
}
