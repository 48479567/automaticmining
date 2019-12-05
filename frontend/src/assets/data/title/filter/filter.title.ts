import { FilterToggleIcon } from '../../../../../src/app/shared/models';

export const filtersSources: FilterToggleIcon[] = [
  new FilterToggleIcon('Distances', 'distance', 'web_asset'),
  new FilterToggleIcon('Prices', 'price', 'person'),
  new FilterToggleIcon('Travels', 'travel', 'group_work'),
  new FilterToggleIcon('Trucks', 'truck', 'shopping_cart'),

];

export const filtersCharts: FilterToggleIcon[] = [
  new FilterToggleIcon('Line', 'line', 'show_chart'),
  new FilterToggleIcon('Bar', 'bar', 'bar_chart'),
  new FilterToggleIcon('Radar', 'radar', 'track_changes'),
  new FilterToggleIcon('Pie', 'pie', 'pie_chart'),
  new FilterToggleIcon('Doughnut', 'doughnut', 'donut_small'),
  new FilterToggleIcon('Polar Area', 'polarArea', 'blur_circular'),
  new FilterToggleIcon('Bubble', 'bubble', 'bubble_chart'),
  new FilterToggleIcon('Scatter', 'scatter', 'flip_to_back'),
];

export const filterIcon: FilterToggleIcon[] = [
  new FilterToggleIcon('Grid', 'grid', 'grid_on'),
  new FilterToggleIcon('List', 'list', 'view_list'),
];

