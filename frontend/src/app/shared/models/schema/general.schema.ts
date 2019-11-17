import { ICarrier } from './carrier.schema';
import { ICompany } from './company.schema';
import { ILocation } from './location.schema';
import { IPrice } from './price.schema';
import { ITravel } from './travel.schema';
import { IUser } from './user.schema';
import { IChequer } from './chequer.schema';
import { IDistance } from './distance.schema';
import { IMaterial } from './material.schema';
import { IProvider } from './provider.schema';
import { ITruck } from './truck.schema';
import { IWork } from './work.schema';


export class DataGeneral {
  carrier: ICarrier[];
  chequer: IChequer[];
  company: ICompany[];
  distance: IDistance[];
  location: ILocation[];
  material: IMaterial[];
  price: IPrice[];
  provider: IProvider[];
  travel: ITravel[];
  truck: ITruck[];
  user: IUser[];
  work: IWork[];
}
