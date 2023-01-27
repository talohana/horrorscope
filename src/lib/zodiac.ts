import { IconType } from 'react-icons';
import {
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacLibra,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo,
} from 'react-icons/tb';

export interface Zodiac {
  name: string;
  icon: IconType;
}

export const zodiacs: Zodiac[] = [
  { name: 'Aquarius', icon: TbZodiacAquarius },
  { name: 'Pisces', icon: TbZodiacPisces },
  { name: 'Aries', icon: TbZodiacAries },
  { name: 'Taurus', icon: TbZodiacTaurus },
  { name: 'Gemini', icon: TbZodiacGemini },
  { name: 'Cancer', icon: TbZodiacCancer },
  { name: 'Leo', icon: TbZodiacLeo },
  { name: 'Virgo', icon: TbZodiacVirgo },
  { name: 'Libra', icon: TbZodiacLibra },
  { name: 'Scorpio', icon: TbZodiacScorpio },
  { name: 'Sagittarius', icon: TbZodiacSagittarius },
  { name: 'Capricorn', icon: TbZodiacCapricorn },
];
