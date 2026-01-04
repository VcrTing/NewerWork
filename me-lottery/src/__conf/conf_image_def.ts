

const originUrl = 'https://to2026.xyz'

// 图片放进 public 文件夹里面
const imgfolder = 'prizeimg'

const __dealimgname = (idx: number, n: string) => {
    return {
        id: idx, url: n ? n.replace('/public/', '') : ''
    }
}

const confImagePrizeList = [
    __dealimgname(1, '/public/prizeimg/9-星星人.jpg'),
    __dealimgname(2, '/public/prizeimg/9-护手霜.jpg'),
    __dealimgname(3, '/public/prizeimg/8-小野盲盒.jpg'),
    __dealimgname(4, '/public/prizeimg/7-adidas帽子.jpg'),
    __dealimgname(5, '/public/prizeimg/7-NewEra帽子.jpg'),
    __dealimgname(6, '/public/prizeimg/6-柯达盲盒小相机.jpg'),
    __dealimgname(7, '/public/prizeimg/5-montbell背包-黑色.jpg'),
    __dealimgname(8, '/public/prizeimg/5-montbell背包-白色.jpg'),
    __dealimgname(9, '/public/prizeimg/5-montbell收纳背包.jpg'),
    __dealimgname(10, '/public/prizeimg/4-北面单肩包1.jpg'),
    __dealimgname(11, '/public/prizeimg/4-北面单肩包2.jpg'),
    __dealimgname(12, '/public/prizeimg/3-DIOR蜜唇.jpg'),
    __dealimgname(13, '/public/prizeimg/3-CHANEL口红.jpg'),
    __dealimgname(14, '/public/prizeimg/2-始祖鸟背包1.jpg'),
    __dealimgname(15, '/public/prizeimg/2-始祖鸟背包2.jpg'),
    __dealimgname(16, '/public/prizeimg/1-三宅一生包包1.jpg'),
    __dealimgname(17, '/public/prizeimg/1-三宅一生包包2.jpg'),
    __dealimgname(18, '/public/prizeimg/1-三宅一生包包3.jpg'),
    __dealimgname(19, '/public/prizeimg/0-礼盒.jpg'),
    __dealimgname(20, '/public/prizeimg/0-礼盒.jpg'),
    __dealimgname(21, '/public/prizeimg/0-礼盒.jpg'),
]
const confImagePrizeListLen = confImagePrizeList.length

export const locationPrizeImg = (idx: number) => {
    for (let j= 0; j< confImagePrizeListLen; j++ ) {
        const it = confImagePrizeList[j];
        if (idx == it.id) return it.url
    }
    return undefined;
}

export const confImageDefaultList = [
    {
        id: '0',
        name: '一等奖',
        url: `${originUrl}/resource/image/image1.png`,
    },
    {
        id: '1',
        name: '二等奖',
        url: `${originUrl}/resource/image/image2.png`,
    },
    {
        id: '2',
        name: '三等奖',
        url: `${originUrl}/resource/image/image3.png`,
    },
    {
        id: '3',
        name: '超级奖',
        url: `${originUrl}/resource/image/image4.png`,
    },
    {
        id: '4',
        name: '特别奖',
        url: `${originUrl}/resource/image/image5.png`,
    },
]