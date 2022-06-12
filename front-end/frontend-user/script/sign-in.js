
//AXIOS
$("#sign-in").click(function(){
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

        localStorage.clear();
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("user_name", user_name);
            localStorage.setItem("user_token", user_token);
            alert(`Welcome ${user_name} You are now signed in`);
            window.location.replace("../pages/my-favorites.html")
    })
});

// function handleResponse(data){
//     if (data.response == "User Not Found"){
//         alert("User Not Found");
//     }
//     else if (data.response == "Logged in"){
//         //Check for admin
//         if(data.is_admin==1){
//             alert("Redirecting admin")
//             window.location.replace("http://localhost/foodhub-grp-project-frontend/pages/admin.html");
//         }else{
//             user_id = data.user_id;
//             user_first_name = data.first_name;
//             console.log(user_id, user_first_name);
//             // Save to local Storage
//             ;
//         }
//     }
// }