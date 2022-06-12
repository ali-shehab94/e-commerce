axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/my_faves'
   })
   
   .then(function (response) {
       mydata = response.data;
       console.log(mydata);
       parseData(mydata.products);
   })
   
   function parseData(obj) {
       for (var data of obj) {
           console.log(data);
           let id = data.id;
           let name = data.name;
           let description = data.description;
           let price = data.price;
           let category = data.category_id;
           console.log(data.name);
           console.log(data.description);
           console.log(price);
           console.log(category);
           let productDisplay = document.getElementById("sliderId");
           let product = document.createElement("div");
           productDisplay.appendChild(product);
            product.innerHTML +=    `<div id="product">
                                       <div class="product">
                                           <div class="product-img">
                                               <img src="assets/images/vacuum-cleaner.jpg" alt="vacuum">
                                           </div>
                                           <br>
                                           <div>
                                               <h3>${name}</h3>
                                               <p>${description}</p>
                                               <p>${price}</p>
                                               <p>${category}</p>
                                               <button class="favorite" id>Add to Favorites 💜</button>
                                           </div>
                                       </div>
                                   </div>`  ;
        

       }
   }