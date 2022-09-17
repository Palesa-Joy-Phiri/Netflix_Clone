const users = ["Londeka", "Kristen", "Palesa"];

const member = document.querySelector(".member");

const newuser = document.querySelector(".newuser");

const newbies = () => {
    users.map((curElem) => {
        member.insertAdjacentHTML ('afterbegin', '<button class="names"> <span> ${curElem} </span></button>');
});
};



newuser.addEventListener("click", ( ) => {
    let userName = prompt ("Please enter your name");

        if (userName != null && !users.includes(userName)) {
            users.push(userName);
            console.log(users);
        }else{
            alert("User name already exits");
        }
});