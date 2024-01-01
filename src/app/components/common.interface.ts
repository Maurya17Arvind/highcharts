export interface ChartOptions {
  series: ChartData[]
  title: {
    text: string,
    align: string
  }
  tooltip: {
    valueSuffix: string
  }
  xAxis: {
    categories: string[]
  }
  yAxis: {
    title: {
      text: string
    }
  }
}

export interface Param{
  id:string
}
export interface MultipleChartData {
  id: number;
  companyName: string;
  totalMembers: number;
  registaionNo: number;
  logo: string;
  description: string;
  data: ChartData[];
}

export interface ChartData {
  type: string;
  name: string;
  data: number[];
  color?: string;
  marker?: ChartMarker;
}

export interface ChartMarker {
  lineWidth: number;
  lineColor: string;
  fillColor: string;
}
