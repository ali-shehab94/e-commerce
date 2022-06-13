//AXIOS
$("#add-product-btn").on('click', function(){
let data = new FormData();
data.append('name', $("#name").val());
data.append('description', $("#description").val());
data.append('price', $("#price").val());
data.append('category', $("#category").val());


axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/post_products',
    headers: new Headers({
        'authorization': 'bearer' + localStorage.getItem('user_token')
    }),
    data: data
})
.then(function (response) {
    if (response){
    alert(response.data.message);
    }else {
    console.log(response.status)
    }
})
});