const user_id = (localStorage.getItem('user_id'));
console.log(localStorage.getItem('user_token'))

axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/no_auth/get_products'
   })
   
   .then(function (response) {
       var mydata = response.data;
       console.log(mydata);
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
           let category = data.category;
           console.log(data.name)
           console.log(data.description);
           console.log(price)
           console.log(category)
           let productDisplay = document.getElementById("my-favorites");
           productDisplay.innerHTML += `<div class="favorite-product" id="${id}">
           <img src="assets/images/vacuum-cleaner.jpg" alt="fav">
           <h3>${name}</h3>
           <p>${description}</p>
           <p>$${price}</p>
           <p>${category}</p>
           <button class="favorite-btn" id="favorite" onClick= "favorite(this)" >Favorite This 💜</button>
       </div>`

       }
    }

    let favorite = (e) => {
        let favorited_product = e.parentElement.id
        let data = new FormData();
        data.append('product_id', favorited_product);
        data.append('user_id', user_id)
        console.log(favorited_product, user_id)
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/favorite_this',
            header: new Headers({
                'authorization': 'bearer ' + localStorage.getItem('user_token')
            }),
            data: data
            })
        .then(function (response) {
            if (response){
                console.log("response: ", response);
            }else {
                console.log("no response")
            }
        })
    }
// $("#favorite")
//     let data = new FormData();
//     data.append('product_id', $("#name").val());
//     data.append('email', $("#email").val());
//     data.append('password', $("#password").val());
//    axios({
//     method: 'post',
//     url: 'http://127.0.0.1:8000/api/favorite_this',
//     data: data
//    })
//    .then(function (response) {
//     if (response){
//     alert(response.data.message);
//     window.location.href = "sign-in.html";
//     }else {
//     console.log(response.status)
//     }
// })
