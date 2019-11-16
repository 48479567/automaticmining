import { SelectOption } from '../form/question-base';

export interface ObjectRef {
  carrierid: SelectOption[];
  chequerid: SelectOption[];
  companyid: SelectOption[];
  distance: SelectOption[];
  location: SelectOption[];
  materialid: SelectOption[];
  priceid: SelectOption[];
  providerid: SelectOption[];
  travelid: SelectOption[];
  truck: SelectOption[];
  userid: SelectOption[];
  workid: SelectOption[];
}

export const typesObject = {
  name: 'text',
  mine: 'text',
  providerid: 'text',
  username: 'text',
  destiny: 'text',
  origin: 'text',
  password: 'password',
  latitude: 'number',
  length: 'number',
  status: 'text',
  email: 'email',
  image: 'text',
  value: 'number',
  ruc: 'text',
  address: 'text',
  phonenumber: 'text',
  carrierid: 'text',
  local: 'text',
  firstprice: 'number',
  aditionalprice: 'number',
  capacity: 'number',
  mark: 'text',
  plaque: 'text',
  extension: 'text',
  capacityextension: 'number'
};



