import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // สร้าง array หน้า เช่น [1, 2, 3, ..., totalPages]
  // ตัวอย่างง่าย ๆ แสดงแค่ 3 หน้า หรือปรับให้แสดงทั้งหมดได้
  // ตัวอย่างนี้จะสร้างเลขหน้าตั้งแต่ 1 ถึง totalPages
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  return (
    <div className="flex items-center space-x-2">
      {/* ปุ่มลูกศรซ้าย */}
      <button
        className="p-2 rounded-md hover:bg-gray-200"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ปุ่มหมายเลข */}
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`w-10 h-10 rounded-lg font-medium ${
            num === currentPage
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-black hover:bg-gray-400'
          }`}
        >
          {num}
        </button>
      ))}

      {/* ปุ่มลูกศรขวา */}
      <button
        className="p-2 rounded-md hover:bg-gray-200"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
