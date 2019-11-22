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
  materialid: 'terrain',
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

export const iconsObject = {
  name: 'folder_shared',
  fullname: 'folder_shared',
  mine: 'home_work',
  providerid: 'supervised_user_circle',
  username: 'assignment_ind',
  destiny: 'directions',
  origin: 'trip_origin',
  password: 'visibility_off',
  latitude: 'language',
  length: 'trending-flat',
  status: 'offline_pin',
  email: 'email',
  image: 'image',
  value: 'filter_9_plus',
  ruc: 'business',
  address: 'house',
  phonenumber: 'phone',
  carrierid: 'airline_seat_recline_normal',
  local: 'location_city',
  firstprice: 'attach_money',
  aditionalprice: 'monetization_on',
  capacity: 'storage',
  mark: 'atm',
  plaque: 'font_download',
  extension: 'unfold_more',
  capacityextension: 'table_chart'
};



