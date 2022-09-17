import { createContext } from 'react'
import { QueryResponseContextProps } from "./models";

export function createResponseContext<T>(initialState: QueryResponseContextProps<T>) {
    return createContext(initialState)
}

