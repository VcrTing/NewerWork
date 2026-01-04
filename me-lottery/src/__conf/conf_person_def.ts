
import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'


const __personList = <IPersonConfig[]> [
]

export const confPersonDefaultList = __personList.map((e: IPersonConfig) => {
  e.isWin = false;
  e.prizeName = [ ];
  e.prizeId = [ ];
  e.prizeTime = [ ];
  return e;
})