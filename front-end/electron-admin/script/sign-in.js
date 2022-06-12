const sign_in_button = document.getElementById('sign-in');
console.log("4kifak")
$("#sign-in").on('click', function(){
    console.log('hi')

    let data = new FormData();
    data.append('email', $("#email").val());
    data.append('password', $("#password").val());
    
    axios ({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/no_auth/login',
    data: data,
    })

    .then(function (response) {
        if (response.data.authorisation.token){
            var user_token = response.data.authorisation.token;
            var user_id = response.data.user.id;
            var user_name = response.data.user.name;
            var user_type = response.data.user.user_type;
        }else {
            console.log(response.data);
        }
        if (user_type ==0){
            alert("Don't mess around bro :), go to our website please")
        }else if (user_type == 1) {
            localStorage.clear();
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("user_name", user_name);
            localStorage.setItem("user_token", user_token);
            alert(`Welcome Admin: ${user_name}!`);
            // window.location.replace("../pages/my-favorites.html")
        }
            
    })
});