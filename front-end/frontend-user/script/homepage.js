

// axios.get('http://127.0.0.1:8000/api/get_categories')
// .then((res) => console.log(res.headers))
// .catch((err) => console.log(err))


// axios.post('http://127.0.0.1:8000/api/get_products', {
//     name: "Samsung Smart TV",
//     description: "This TV is smarter that it's maker",
//     price: "800",
//     category_id: "5"
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

        //    product.innerHTML = '`<div id="product"><div class="product"><div class="product-img"><img src="assets/images/profile-pic-test.jpg" alt="vacuum">'
        //    `<div id="product">
        //         <div class="product">
        //             <div class="product-img">
        //                 <img src="assets/images/vacuum-cleaner.jpg" alt="vacuum">
        //             </div>
        //             <br>
        //             <div>
        //                 <h3>Product Name</h3>
        //                 <p>Description</p>
        //                 <p>Price</p>
        //                 <p>Category</p>
        //             </div>
        //         </div>
        //     </div>`     
           
           
           
           
           
        //    `<div id="product">
        //                                <div class="product">
        //                                    <div class="product-img">
        //                                        <img src="assets/images/vacuum-cleaner.jpg" alt="vacuum">
        //                                    </div>
        //                                    <br>
        //                                    <div>
        //                                        <h3>${name}</h3>
        //                                        <p>${description}</p>
        //                                        <p>${price}</p>
        //                                        <p>${category}</p>
        //                                        <button class="favorite" id>Add to Favorites 💜</button>
        //                                    </div>
        //                                </div>
        //                            </div>`  
   
       }
   }


   let slider = tns({
    container : ".slider",
    "slideBy" : 1,
    "speed": 400,
    "nav" : false,
    controlsContainer: "#controls",
    prevButton : ".previous",
    nextButton : ".next",
    responsive: {
        1600: {
            items: 4, 
            gutter: 20
        },
        1024: {
            items: 3, 
            gutter: 20
        },
        768: {
            items: 2, 
            gutter: 20
        },
        480: {
            items: 1, 
        }
        
    }
})
