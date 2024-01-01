import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultipleChartData } from '../common.interface';
import { muiltipleChart } from '../data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  public companies:MultipleChartData[] = muiltipleChart;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  public getChar(id: number) {
    this.route.navigate([`chart/${id}`]);
  }

  public getVisualization(id: number) {
    this.route.navigate([`visualized/${id}`]);
  }
}
