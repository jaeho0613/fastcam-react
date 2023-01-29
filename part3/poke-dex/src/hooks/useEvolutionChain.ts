import { UseQueryResult } from 'react-query/types/react/types';
import axios, { AxiosResponse } from 'axios';
import { EvolutionChainResponse } from '../types';
import { useQueries, useQuery } from 'react-query';

const useEvolutionChain = (url?: string): UseQueryResult<AxiosResponse<EvolutionChainResponse>, Error> =>
  useQuery(['evolution', {url}], () => url ? axios.get(url) : null)

export default useEvolutionChain;
