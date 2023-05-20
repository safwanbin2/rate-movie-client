const saveUser = (email, name, photo, role, date) => {
    const newUser = {
        "email": email,
        "name": name,
        "photo": photo,
        "role": role,
        "createDate": date
    }
    fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(err => {
            console.error(err);
        })
}

export default saveUser;