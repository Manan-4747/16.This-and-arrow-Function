// const user = {
//     username: "Manan",
//     price: 999,

//     WelcomeMessage: function() {
//         console.log(`${this.username}, Welcome to website`);
//     }
// }

// user.WelcomeMessage()

// user.username = "Jay"
// user.WelcomeMessage()


// function one(){
//     console.log(this);
// }
// one()


const cold = function () {
    let username = "Manan"
    console.log(this.username);
}
cold ()

