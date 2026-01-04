
import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'

export const confDataUrl = 'https://to2026.xyz'

export const confPrizeTemplate = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: '',
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
}

export const confCardTheme = {
    bg: 'rgb(235, 65, 101)',// '#ff79c6',
    text: '#ffffff',
    bgLuky: '#ffeb3c', // '#ECB1AC',
    bgHightLight: 'rgb(254, 216, 53)', // '#1b66c9'
}