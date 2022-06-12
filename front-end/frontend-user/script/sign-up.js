//AXIOS
$("#sign-up-btn").click(function(){
let data = new FormData();
data.append('name', $("#name").val());
data.append('email', $("#email").val());
data.append('password', $("#password").val());


axios({
method: 'post',
url: 'http://127.0.0.1:8000/api/no_auth/register',
data: data,
})
.then(function (response) {
    if (response){
    alert(response.data.message);
    window.location.href = "sign-in.html";
    }else {
    console.log(response.status)
    }
})
});