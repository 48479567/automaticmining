export class DataChartReportModel {
  constructor(
    public data: any[],
    public backgroundColor: string[],
    public label: string
  ) { }

}

export class ChartReportModel {
  constructor(
    public data: DataChartReportModel[],
    public label: string[]
  ) { }

}


