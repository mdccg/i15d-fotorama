import { createContext, ReactNode, useEffect, useState } from 'react'
import { Photo } from '../models/Photo'

type UserContextType = {
  criteria: string
  setCriteria: (newState: string) => void
  query: string
  setQuery: (newState: string) => void
  photos: Photo[]
  setPhotos: (newState: Photo[]) => void
  page: number
  setPage: (newState: number) => void
  perPage: number
  setPerPage: (newState: number) => void
  totalPages: number
  setTotalPages: (newState: number) => void
}

const initialState: UserContextType = {
  criteria: localStorage.getItem('criteria') || 'relevant',
  setCriteria: () => {},
  query: localStorage.getItem('query') || '',
  setQuery: () => {},
  photos: [],
  setPhotos: () => {},
  page: 1,
  setPage: () => {},
  perPage: 16,
  setPerPage: () => {},
  totalPages: 0,
  setTotalPages: () => {},
}

export const UserContext = createContext<UserContextType>(initialState)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [criteria, setCriteria] = useState(initialState.criteria)
  const [query, setQuery] = useState(initialState.query)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(16)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    localStorage.setItem('criteria', criteria)
    localStorage.setItem('query', query)
  }, [criteria, query])

  return (
    <UserContext.Provider
      value={{
        criteria,
        setCriteria,
        query,
        setQuery,
        photos,
        setPhotos,
        page,
        setPage,
        perPage,
        setPerPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
