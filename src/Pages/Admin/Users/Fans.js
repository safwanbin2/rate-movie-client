import React from 'react';
import TableUser from '../../../Components/AdminComponents/TableUser';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading';
const Fans = () => {
    const { data: fans, isLoading } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/list?role=fan`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-xl font-semibold my-6'>Fans that are crazy about movies: </h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Creation
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fans.map(fan => <TableUser
                                    key={fan._id}
                                    user={fan}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Fans;