import { useEffect, useState } from "react";

const UseIsAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/users/isAdmin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false);
            })
            .catch(err => console.error(err));
    }, [email, isAdminLoading]);
    return [isAdmin, isAdminLoading];
}

export default UseIsAdmin;