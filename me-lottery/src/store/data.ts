import { confPrizeTemplate } from '@/__conf/__conf'
import { confImageDefaultList } from '@/__conf/conf_image_def'
import { confMusicDefaultList } from '@/__conf/conf_music_def'
import { confPersonDefaultList } from '@/__conf/conf_person_def'
import { confPrizeDefaultList } from '@/__conf/conf_prize_def'
import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'

export const defaultPersonList = confPersonDefaultList;
export const defaultMusicList = confMusicDefaultList;
export const defaultImageList = confImageDefaultList;
export const defaultPrizeList = confPrizeDefaultList;

export const defaultCurrentPrize = <IPrizeConfig> JSON.parse(JSON.stringify(confPrizeDefaultList[0]))
export const defaultTemporaryPrize = <IPrizeConfig> confPrizeTemplate;

export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 93, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 65, 66, 67, 84, 101, 100, 99, 32, 33]
