import { useEffect, useState } from "react";

const UseIsAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`https://rate-movie-server-safwanbin2.vercel.app/users/isAdmin?email=${email}`)
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