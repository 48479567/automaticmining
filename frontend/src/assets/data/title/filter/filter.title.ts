import { FilterToggle, FilterToggleIcon } from 'src/app/shared/models';

export const filtersSources: FilterToggleIcon[] = [
  new FilterToggleIcon('Products', 'product', 'web_asset'),
  new FilterToggleIcon('Personal', 'personal', 'person'),
  new FilterToggleIcon('Sets', 'sets', 'group_work'),
  new FilterToggleIcon('Sales', 'sales', 'shopping_cart'),
  new FilterToggleIcon('Stock', 'stock', 'all_inbox'),

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

