import React from 'react'

type Props = {
  size?: number
  color?: string
}

const SearchIcon = ({ size = 4, color = 'gray-500' }) => {
  return (
    <svg className={`w-${size} h-${size} text-${color}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  )
}

export default SearchIcon