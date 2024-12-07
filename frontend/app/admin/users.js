import React, { useMemo } from 'react';

export default function UsersTab({ searchTerm, usersData }) {
    const filteredUsers = useMemo(() => {
        return usersData.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phoneNumber.includes(searchTerm)
        );
    }, [searchTerm, usersData]);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse table-auto">
                <thead>
                    <tr className="bg-primary text-white">
                        <th className="py-2 px-4 border text-left">Name</th>
                        <th className="py-2 px-4 border text-left">Email</th>
                        <th className="py-2 px-4 border text-left">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr
                            key={index}
                            className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                        >
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}