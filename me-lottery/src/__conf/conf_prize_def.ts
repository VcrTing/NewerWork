
import type { IPersonConfig, IPrizeConfig, Separate } from '@/types/storeType'
import { locationPrizeImg } from './conf_image_def'

const originUrl = 'https://to2026.xyz'


const generatePrize = (
    idx: number, name: string, url: string, 
    count: number, separateCountList: Separate[]
) => {
    const imglink = locationPrizeImg(idx)
    let countList = [ ]
    if (separateCountList.length <= 0) {
        countList.push({
            id: '1', count, isUsedCount: 0
        })
    }
    else {
        countList = separateCountList;
    }
    console.log(countList)
    const res = <IPrizeConfig>{
        id: '00' + idx, sort: idx,
        name, desc: name,
        picture: { id: '' + idx, name, url: url ? url : imglink },
        count, isUsedCount: 0,
        separateCount: { enable: true, countList },
        isShow: true, isUsed: false, isAll: false, frequency: 1
    }
    console.log(res)
    return res;
}


const __confPrizeDefaultList = <IPrizeConfig[]>[
    generatePrize(1, '9.星星人盲盒', '', 3, [ ]),
    generatePrize(2, '9.TAMBURINS护手霜', '', 3, [ ]),
    generatePrize(3, '8.小野盲盒', '', 6, [
        { id: '1', count: 3, isUsedCount: 0 },
        { id: '2', count: 3, isUsedCount: 0 },
    ]),
    generatePrize(4, '7.Adidas帽子', '', 1, [ ]),
    generatePrize(5, '7.New Era帽子', '', 1, [ ]),
    generatePrize(6, '6.柯达盲盒小相机', '', 5, [ ]),
    generatePrize(7, '5.montbell背包-黑色', '', 1, [ ]),
    generatePrize(8, '5.montbell背包-白色', '', 1, [ ]),
    generatePrize(9, '5.montbell收纳背包', '', 1, [ ]),
    generatePrize(10, '4.北面单肩包1（金先生赞助）', '', 1, [ ]),
    generatePrize(11, '4.北面单肩包2（金先生赞助）', '', 1, [ ]),
    generatePrize(12, '3.DIOR唇蜜', '', 1, [ ]),
    generatePrize(13, '3.CHANEL口红', '', 3, [ ]),
    generatePrize(14, '2.始祖鸟背包1（金先生赞助）', '', 1, [ ]),
    generatePrize(15, '2.始祖鸟背包2（金先生赞助）', '', 1, [ ]),
    generatePrize(16, '1.三宅一生包包1', '', 1, [ ]),
    generatePrize(17, '1.三宅一生包包2', '', 1, [ ]),
    generatePrize(18, '1.三宅一生包包3', '', 1, [ ]),
    generatePrize(19, '神秘大奖(调休4小时)', '', 3, [ ]),
    generatePrize(20, '神秘大奖(调休8小时)', '', 2, [ ]),
    generatePrize(21, '神秘大奖(调休16小时)', '', 1, [ ])
]

const __confPrizeDefaultList_DEF = <IPrizeConfig[]>[
    generatePrize(1, '三等奖', `${originUrl}/resource/image/image3.png`, 3, [ ]),
    generatePrize(2, '二等奖', `${originUrl}/resource/image/image2.png`, 2, [ ]),
    generatePrize(3, '一等奖', `${originUrl}/resource/image/image1.png`, 1, [ ]),
    generatePrize(4, '超级大奖', `${originUrl}/resource/image/image4.png`, 1, [ ]),
    generatePrize(5, '特别奖', `${originUrl}/resource/image/image5.png`, 1, [ ]),
]

export const confPrizeDefaultList = __confPrizeDefaultList;