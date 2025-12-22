// pagination/src/PaginationData.jsx
import React from 'react'

const PaginationData = ({ currentData }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 rounded-md">
        <thead className="bg-emerald-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-sm">ID</th>
            <th className="px-4 py-2 text-left text-sm">First Name</th>
            <th className="px-4 py-2 text-left text-sm">Last Name</th>
            <th className="px-4 py-2 text-left text-sm">Gender</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((data) => (
            <tr
              key={data.id}
              className="even:bg-gray-100 hover:bg-emerald-50"
            >
              <td className="px-4 py-2 text-sm">{data.id}</td>
              <td className="px-4 py-2 text-sm">{data.firstName}</td>
              <td className="px-4 py-2 text-sm">{data.lastName}</td>
              <td className="px-4 py-2 text-sm">{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PaginationData
