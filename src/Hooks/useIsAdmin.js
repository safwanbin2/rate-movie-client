import { useEffect, useState } from "react";

const UseIsAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/users/isAdmin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
            })
            .catch(err => console.error(err));
    }, [email])
    return isAdmin;
}

export default UseIsAdmin;