/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, useState} from 'react'
import {useQuery} from 'react-query'
import {
  createResponseContext,
} from '../../../_formula1Page/helpers/crud-helper/helpers'
import {
    initialQueryResponse,
  } from '../../../_formula1Page/helpers/crud-helper/models'
import { PropsWithChildren } from 'react';
import { getDrivers } from './_requests';
import { DriverModel } from './_model';

const QueryResponseDriverContext = createResponseContext<DriverModel>(initialQueryResponse)
const QueryResponseDriversProvider: FC<PropsWithChildren> = ({children}) => {
  const [query, setQuery] = useState<string>("/drivers")


  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${query}`,
    () => {
      return getDrivers()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <QueryResponseDriverContext.Provider value={{isLoading: isFetching, refetch, response, query}}>
      {children}
    </QueryResponseDriverContext.Provider>
  )
}

const useQueryResponseDrivers = () => useContext(QueryResponseDriverContext)

const useQueryResponseDriversData = () => {
  const {response} = useQueryResponseDrivers()
  if (!response) {
    return []
  }

  return response || []
}

const useQueryResponseDriversLoading = (): boolean => {
  const {isLoading} = useQueryResponseDrivers()
  return isLoading
}

export {
  QueryResponseDriversProvider,
  useQueryResponseDrivers,
  useQueryResponseDriversData,
  useQueryResponseDriversLoading,
}
