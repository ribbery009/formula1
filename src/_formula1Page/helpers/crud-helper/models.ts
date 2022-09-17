export type QueryResponseContextProps<T> = {
    response?: Array<T> | undefined
    refetch: () => void
    isLoading: boolean
    query: string
}

export const initialQueryResponse = { refetch: () => { }, isLoading: false, query: '' }
