const formData = {
    name: "Steve",
    email: "steve@steve.com",
};

const init =  {
method:'POST',
headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
},
body: JSON.stringify(formData),
};

function submitData(Name,email) {
    return fetch('http://localhost:3000/users', init)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.append(object.id);
        })
        .catch(function (error) {
            alert("Invalid Name-Email combination!");
            document.body.append(error.message);
        });
};
submitData('charlie','ye.com');