let snak = document.getElementById("snak")
let gun = document.getElementById("gun")
let water = document.getElementById('water')




let Result = document.getElementById("Result")
let computerReply = document.getElementById('computerReply')

snak.addEventListener('click', () => {

    let comp_rad = Math.floor(3 * Math.random());

    let allvalue = ['Snake', 'Water', 'Gun']

    compAns = allvalue[comp_rad]
    computerReply.innerText = compAns

    if (compAns == "Snake") {
        
        Result.innerText = "It's a tie!";

    } else if (compAns == "Water") {

        Result.innerText = "You win";

    } else if (compAns == "Gun") {
        Result.innerText = "Computer win";
    }

})
gun.addEventListener('click', () => {

    let comp_rad = Math.floor(3 * Math.random());

    let allvalue = ['Snake', 'Water', 'Gun']

    compAns = allvalue[comp_rad]
    computerReply.innerText = compAns

    if (compAns == "Gun") {
        
        Result.innerText = "It's a tie!";

    } else if (compAns == "Snake") {

        Result.innerText = "You win";

    } else if (compAns == "Water") {
        Result.innerText = "Computer win";
    }

})
water.addEventListener('click', () => {

    let comp_rad = Math.floor(3 * Math.random());

    let allvalue = ['Snake', 'Water', 'Gun']

    compAns = allvalue[comp_rad]
    computerReply.innerText = compAns

    if (compAns == "Water") {
        
        Result.innerText = "It's a tie!";

    } else if (compAns == "Gun") {

        Result.innerText = "You win";

    } else if (compAns == "Snake") {
        Result.innerText = "Computer win";
    }

})

