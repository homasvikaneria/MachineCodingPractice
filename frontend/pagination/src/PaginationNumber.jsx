// pagination/src/PaginationNumber.jsx
import React from 'react'

function PaginationNumber({ currentPage, setCurrentPage, totalPages }) {

  const renderPages = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 rounded border text-sm font-medium
            ${
              currentPage === i
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
            }
          `}
        >
          {i}
        </button>
      )
    }
    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border border-gray-300 bg-gray-100
                   hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {renderPages()}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border border-gray-300 bg-gray-100
                   hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}

export default PaginationNumber
