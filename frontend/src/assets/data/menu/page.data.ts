import { Page, PageIcon } from 'src/app/shared/models';

export const pages: Page[] = [
  new Page('Carrier', 'carrier'),
  new Page('Chequer', 'chequer'),
  new Page('Company', 'company'),
  new Page('Location', 'location'),
  new Page('Material', 'material'),
  new Page('Price', 'price'),
  new Page('Provider', 'provider'),
  new Page('Travel', 'travel'),
  new Page('Truck', 'truck'),
  new Page('User', 'user'),
  new Page('Work', 'work'),
  new Page('Result', 'result'),
];


export const pagesIcon: PageIcon[] = [
  new PageIcon('Carrier', 'carrier', 'airline_seat_recline_normal'),
  new PageIcon('Chequer', 'chequer', 'how_to_reg'),
  new PageIcon('Company', 'company', 'location_city'),
  new PageIcon('Location', 'location', 'my_location'),
  new PageIcon('Material', 'material', 'dns'),
  new PageIcon('Price', 'price', 'monetization_on'),
  new PageIcon('Provider', 'provider', 'supervised_user_circle'),
  new PageIcon('Travel', 'travel', 'rv_hookup'),
  new PageIcon('Truck', 'truck', 'local_shipping'),
  new PageIcon('User', 'user', 'assignment_ind'),
  new PageIcon('Work', 'work', 'group_work'),
  new PageIcon('Result', 'result', 'insert_chart'),
];