import { MultipleChartData } from "./common.interface";

export const muiltipleChart:MultipleChartData[] = [
  {
    id: 1,
    companyName: 'Reliance Industries',
    totalMembers: 200,
    registaionNo: 205,
    logo: 'assets/image-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia magni odit non ipsa? Voluptas, natus quia! Possimus mollitia sed quisquam et tempora! Alias dolorem aspernatur inventore aut molestias facilis!',
    data: [
      {
        type: 'column',
        name: '2020',
        data: [59, 45, 65, 200, 150],
        color: '#FFAEBC',
      },
      {
        type: 'column',
        name: '2021',
        data: [24, 95, 72, 220, 185],
      },
      {
        type: 'column',
        name: '2022',
        data: [58, 88, 75, 180, 140],
      },
      {
        type: 'spline',
        name: 'Average',
        data: [47, 35, 70.66, 239.33, 175.66],
        marker: {
          lineWidth: 2,
          lineColor: '#FFEBB7',
          fillColor: 'white',
        },
      },
    ],
  },
  {
    id: 2,
    companyName: 'Adani Power',
    totalMembers: 150,
    registaionNo: 150,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia magni odit non ipsa? Voluptas, natus quia! Possimus mollitia sed quisquam et tempora! Alias dolorem aspernatur inventore aut molestias facilis!',
    logo: 'assets/image-2.png',
    data: [
      {
        type: 'column',
        name: '2020',
        data: [200, 83, 65, 50, 184],
      },
      {
        type: 'column',
        name: '2021',
        data: [180, 79, 72, 67, 167],
      },
      {
        type: 'column',
        name: '2022',
        data: [290, 88, 75, 56, 176],
      },
      {
        type: 'spline',
        name: 'Average',
        data: [320, 83.33, 70.66, 80, 180],
        marker: {
          lineWidth: 2,
          lineColor: '#FFEBB7',
          fillColor: 'white',
        },
      },
    ],
  },
  {
    id: 3,
    companyName: 'Tata group',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia magni odit non ipsa? Voluptas, natus quia! Possimus mollitia sed quisquam et tempora! Alias dolorem aspernatur inventore aut molestias facilis!',
    totalMembers: 158,
    registaionNo: 100,
    logo: 'assets/image-3.jpeg',
    data: [
      {
        type: 'column',
        name: '2020',
        data: [59, 83, 65, 228, 184],
      },
      {
        type: 'column',
        name: '2021',
        data: [24, 79, 72, 240, 167],
      },
      {
        type: 'spline',
        name: 'Average',
        data: [47, 83.33, 70.66, 239.33, 175.66],
        marker: {
          lineWidth: 2,
          lineColor: '#FFEBB7',
          fillColor: 'white',
        },
      },
    ],
  },
];
