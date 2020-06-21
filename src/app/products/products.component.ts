import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  title="Online Products";
  searchText;
  products = [
    { id: 1, productname: 'Potato', Price: 'Rs.35','limit' : 4,quantity: 0,img: 'assets/potato.jpg'},
    { id: 2, productname: 'Onions' , Price: 'Rs.65','limit' : 4,quantity: 0,img: 'assets/onion.jpg'},
    { id: 3, productname: 'Tomato' ,Price: 'Rs.45','limit' : 4,quantity: 0,img: 'assets/tomato.jpg'},
    { id: 4, productname: 'Carrot' , Price: 'Rs.35','limit' : 4,quantity: 0,img: 'assets/carrot.jpg' },
    { id: 5, productname: 'Dates' , Price: 'Rs.55','limit' : 4,quantity: 0,img: 'assets/dates.jpg'},
    { id: 6, productname: 'Orange' , Price: 'Rs.65','limit' : 4,quantity: 0,img: 'assets/orange.jpg'},
    { id: 7, productname: 'Grapes' , Price: 'Rs.35','limit' : 4,quantity: 0,img: 'assets/grapes.jpg'},
    { id: 8, productname: 'Dragon-fruit' , Price: 'Rs.25','limit' : 4,quantity: 0,img: 'assets/dragon-fruit.jpg'},
    { id: 9, productname: 'Capsium-green' ,Price: 'Rs.35','limit' : 4,quantity: 0,img: 'assets/capsicum-green.jpg'},
    { id: 10, productname: 'Dairy-milk' , Price: 'Rs.95','limit' : 4,quantity: 0,img: 'assets/dairy-milk.jpg'},
    { id: 11, productname: 'Papaya' , Price: 'Rs.25','limit' : 4,quantity: 0,img: 'assets/papaya.jpg'},
    { id: 12, productname: 'Dark-fantasy' , Price: 'Rs.25','limit' : 4,quantity: 0,img: 'assets/dark-fantasy.jpg'}
  ];
  Price: any;

  addtocart(idd){
    var proo=this.products.filter(function(value,index)
    {
      return value.id==idd
    })
    console.log(proo)
      proo.forEach(function(value,index){
    var x="<tr>"+
    "<td style='padding:0px 30px'>"+value.productname+"<td>"+
    "<td style='padding:0px 30px'>"+value.Price+"<td>"+
    "<td style='padding:0px 30px'>"+value.quantity+"</td>"
    "</tr>"
    //document.getElementById("xyz").innerHTML=x;
    var row = document.getElementById("xyz");
    var y = row.insertRow(0);
    y.innerHTML = x;
   });
    }
   

  increase_quantity(temp_package){
    if(temp_package.limit == temp_package.quantity){
      return alert("Can't add more")
    }else{
      temp_package.quantity++
      
    }
  }
  
  decrease_quantity(temp_package){
      if(temp_package.quantity == 0){
        return alert("can't be in minus")
      }
      temp_package.quantity--
     
  }
  }
  


 