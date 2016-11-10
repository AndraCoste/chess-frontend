import {Component, OnInit, EventEmitter} from '@angular/core';


const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

@Component({
  selector: 'tdr-date-picker',
  templateUrl: './tdr-date-picker.component.html',
  styleUrls: ['./tdr-date-picker.component.less'],
  outputs: ['changed']
})
export class TdrDatePickerComponent implements OnInit {

  private years: any[];
  private months: {index: number, name: string}[];
  private days: any[] = [];
  private selected: any = {year: 1995, month: 2, day: 14};


  public changed: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.years = [];
    for (var i = 1980; i < 2015; i++) {
      this.years.push(i);
    }

    this.months = [];
    for (var i = 0; i < 12; i++) {
      this.months.push({index: i + 1, name: months[i]});
    }

    this.updateDaysArray();
  }

  ngOnInit() {
    this.dateChanged(null);
  }

  updateDaysArray() {
    var crtMonthLength = this.daysInMonth(this.selected.year, this.selected.month);
    // console.log(crtMonthLength);
    if (this.days.length != crtMonthLength) {
      this.days = [];
      for (var i = 1; i <= crtMonthLength; i++) {
        this.days.push(i);
      }
      if (this.selected.day > this.days.length) {
        this.selected.day = this.days.length;
      }
    }
  }

  stChanged($event) {
    setTimeout(() => {
      // console.log(this.selected);
      this.updateDaysArray();
      this.dateChanged($event);
    });
  }

  dayChanged($event) {
    setTimeout(() => {
      this.dateChanged($event);
    });
  }

  dateChanged($event) {
    var dt = new Date(this.selected.year, this.selected.month - 1, this.selected.day);
    // console.log(this.selected);
    // console.log(dt);
    this.changed.next(dt);
  }

  selectedYear(year): void {
    this.selected.year = year;
    this.stChanged(null);
  }

  selectedMonths(month): void {
    this.selected.month = month;
    this.stChanged(null);
  }

  selectedDay(day): void {
    this.selected.day = day;
    this.stChanged(null);
  }

  private daysInMonth(year, month) {
    var date = new Date(year, month, 0);
    return date.getDate();
  }
}
