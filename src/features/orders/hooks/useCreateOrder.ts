import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

import { createOrder } from '../services/orderService'
import { queryKeys } from '../../../lib/queryKeys'
export const useCreateOrder = () => {

  const queryClient =
    useQueryClient()

  return useMutation({

    mutationFn: createOrder,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders,
      })

    },
  })
}