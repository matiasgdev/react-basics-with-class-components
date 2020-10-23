import { useState, useMemo } from 'react'

export default function useSearchBadges(badges) {
  const [query, setQuery ] = useState('')
  const [filteredBadges, setFilteredBadges] = useState(badges)

  useMemo(() => {
    const results = badges.filter(badge => {
      const name = `${badge.firstName} ${badge.lastName}`
      return name.toLowerCase().includes(query.toLowerCase())
    })

    setFilteredBadges(results)
  }, [badges, query])

  return { query, setQuery, filteredBadges }
}