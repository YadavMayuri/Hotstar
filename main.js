// card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nextBtns = [...document.querySelectorAll('.next-btn')];

cardContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width

    nextBtns[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth + 200;
    })
}
)

//register page

function register(event) {
    event.preventDefault();
    // alert("function called")
    var name = document.getElementById("username").value
    // console.log(name, "name here")
    var email = document.getElementById("useremail").value
    // console.log(email);
    var password = document.getElementById("userpassword").value
    // console.log(password)
    var confirmpassword = document.getElementById("userconfirmpassword").value
    // console.log(confirmpassword);

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("Users")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                    }
                    Ls.push(userdata);
                    localStorage.setItem("Users", JSON.stringify(Ls))
                    alert("Registration Successful")
                    window.location.href="./login.html";
                    document.getElementById("username").value = ""
                    document.getElementById("useremail").value = ""
                    document.getElementById("userpassword").value = ""
                    document.getElementById("userconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }
            else {
                alert("password not match");
            }

        } else {
            alert("password should  include 8 or more characters");
        }
    } else {
        alert("please fill all fields");
    }

}


// login page

function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("Users"));
    var currentUser;

    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser=Ls[i];

        }
    }
    if (flag == true) {
        localStorage.setItem("hotstarCurrentUser", JSON.stringify(currentUser))
        alert("login successfull")
        window.location.href="./multiple-products-page.html";

    }
    else {
        alert("credentials not matched")
    }

}



function logout() {
    alert("Logout successful.")
    localStorage.removeItem("hotstarCurrentUser")
    window.location.reload()


}










