let users = [];

function notifyUserAdded() {
    let alert = document.getElementById('alert-success');
    alert.classList.remove('alert');
    alert.classList.add('alert-success');

    setTimeout(() => {
        alert.classList.remove('alert-success');
        alert.classList.add('alert');
    }, 2000);
}

function notifyUserExist() {
    let alert = document.getElementById('alert-danger');
    alert.classList.remove('alert');
    alert.classList.add('alert-danger');

    setTimeout(() => {
        alert.classList.remove('alert-danger');
        alert.classList.add('alert');
    }, 2000);
}

function addUsers(userInput) {
    let checkUser = users.filter((user) => {
        return user.email == userInput.email;
    });

    if (checkUser.length == 0) {
        users.push(userInput);
        notifyUserAdded();
    } else {
        notifyUserExist();
    }
    // users.push(userInput);
}

function displayUsers() {
    let usersContainer = document.getElementById("users");
    usersContainer.innerHTML = " ";
    users.map((a) => {
        let userDiv = document.createElement("div");
        userDiv.classList.add("user");
        let nameSpace = document.createElement("p");
        nameSpace.innerText = a.name;
        let emailSpace = document.createElement("p");
        emailSpace.innerText = a.email;

        usersContainer.appendChild(userDiv);
        userDiv.appendChild(nameSpace);
        userDiv.appendChild(emailSpace);
    });
}

function add() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    let user = {
        name: name.value,
        email: email.value,
    };

    addUsers(user);

    // users.push(user);

    displayUsers();
} 