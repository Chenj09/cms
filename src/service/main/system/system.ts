import cjRequest from '../../index'

import type { IData } from '@/service/types'

export function getPageListData(url: string, queryInfo: string) {
  return cjRequest.post<IData>({
    url: url,
    data: queryInfo
  })
}
