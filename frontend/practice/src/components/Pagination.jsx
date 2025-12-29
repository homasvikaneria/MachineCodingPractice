// frontend/practice/src/components/Pagination.jsx
import React, { use, useEffect, useState } from "react";

function Pagination() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    const perPage = 5;

    useEffect(() => {
        const fetchapi = async () => {
            const response = await fetch("https://dummyjson.com/users")
            const result = await response.json()
            setUsers(result.users);
        };
        fetchapi()

    }, []);
    const totalPages = Math.ceil(users.length / perPage);
    const start = (page - 1) * perPage;
    const currentUsers = users.slice(start, start + perPage);

    return (
        <div>
            {currentUsers.map((u) => (
                <p key={u.id}>{u.firstName}</p>
            ))}

            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Prev
            </button>
            <p>{page}</p>

            {/* {Array(totalPages)
                .fill(0)
                .map((_, i) => (
                    <button key={i} onClick={() => setPage(i + 1)}>
                        {i + 1}
                    </button>
                ))} */}

            <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
            >
                Next
            </button>
        </div>
    );
}
export default Pagination;

