import { createContext, useContext, useReducer } from 'react'

const QuoteContext = createContext()

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case 'ADD_PREFERENCE':
      // Check if preference already exists
      const exists = state.preferences.some(pref => pref.id === action.payload.id)
      if (exists) {
        return state
      }
      return {
        ...state,
        preferences: [...state.preferences, action.payload]
      }
    case 'REMOVE_PREFERENCE':
      return {
        ...state,
        preferences: state.preferences.filter(pref => pref.id !== action.payload)
      }
    case 'CLEAR_PREFERENCES':
      return {
        ...state,
        preferences: []
      }
    case 'CLEAR_QUOTE':
      return {
        ...state,
        items: [],
        preferences: []
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      }
    default:
      return state
  }
}

const initialState = {
  items: [],
  preferences: [],
  isModalOpen: false
}

export function QuoteProvider({ children }) {
  const [state, dispatch] = useReducer(quoteReducer, initialState)

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const addPreference = (material) => {
    dispatch({ type: 'ADD_PREFERENCE', payload: material })
  }

  const removePreference = (id) => {
    dispatch({ type: 'REMOVE_PREFERENCE', payload: id })
  }

  const clearPreferences = () => {
    dispatch({ type: 'CLEAR_PREFERENCES' })
  }

  const clearQuote = () => {
    dispatch({ type: 'CLEAR_QUOTE' })
  }

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' })
  }

  return (
    <QuoteContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      addPreference,
      removePreference,
      clearPreferences,
      clearQuote,
      toggleModal
    }}>
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuote = () => {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider')
  }
  return context
}