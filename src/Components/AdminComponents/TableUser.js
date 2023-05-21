import React from 'react';

const TableUser = ({ user }) => {
    const { createDate, email, name, photo, role } = user;
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img class="w-10 h-10 rounded-full" src={photo} alt="Jese" />
                <div class="pl-3">
                    <div class="text-base font-semibold">{name}</div>

                </div>
            </th>
            <td class="px-6 py-4">
                {role}
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{createDate.slice(0, 10)}
                </div>
            </td>
            <td class="px-6 py-4">
                {email}
            </td>
        </tr>
    );
};

export default TableUser;