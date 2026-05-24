import { useQuery } from '@tanstack/react-query'
import { getProductById } from '../services/productService'
import { getProducts } from '../services/productService'
import { queryKeys } from '../../../lib/queryKeys'
export const useProduct = (
  id: number
) => {
  return useQuery({
    queryKey: queryKeys.product(id),

    queryFn: () =>
      getProductById(id),

    enabled: !!id,
  })
}
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })
}