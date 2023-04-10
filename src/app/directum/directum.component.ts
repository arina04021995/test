import { Component, ViewChild } from '@angular/core';
import * as uuid from 'uuid';
import { backgroudColor, borderStyle, city, types, widget, width } from './wiget.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-directum',
  templateUrl: './directum.component.html',
  styleUrls: ['./directum.component.scss']
})
export class DirectumComponent {
  borderStyles = Object.values(borderStyle);
  widths = Object.values(width);
  backgroudColors = Object.values(backgroudColor);
  cities = Object.entries(city);
  wigets: widget[][] = [[],[],[]]
  wigetTypes = [
    {
      value: types.block,
      icon: 'border_style',
      text: 'Блок'
    },
    {
      value: types.weather,
      icon: 'brightness_low',
      text: 'Погоду'
    },
    {
      value: types.image,
      icon: 'add_photo_alternate',
      text: 'Изображение'
    },
  ];
  currentProperty: any;

  @ViewChild('drawer') drawer:any;
  constructor() {
  }

  drop(event: CdkDragDrop<widget[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  addWidget(column: number, wigetType: any) {
    switch ( wigetType.value ) {
      case types.block:
        this.addBlock(column);
          break;
      case types.weather:
        this.addWeather(column);
          break;
      case types.image:
        this.addImage(column);
          break;
      default: 
          break;
   }
  }
  

  addBlock(column: number) {
    this.wigets[column].push({
      uuid: uuid.v4(),
      properties: {
        borderStyle: borderStyle.solid,
        borderWidth: 1,
        backgroudColor: backgroudColor.white,
        width: width.full,
        text: ' ',
      },
      display: {
        borderStyle: true, 
        borderWidth: true, 
        backgroudColor: true, 
        width: true, 
        text: true},
      type: types.block,
    })
  }

  addImage(column: number) {
    this.wigets[column].push({
      uuid: uuid.v4(),
      properties: {
        borderStyle: borderStyle.solid,
        borderWidth: 1,
        backgroudColor: backgroudColor.white,
        width: width.full,
        text: ' ',
        url: '../../assets/default.png'
      },
      display: {
        borderStyle: true, 
        borderWidth: true, 
        width: true, 
        text: true,
        url: true},
      type: types.image,
    })
  }

  addWeather(column: number) {
    this.wigets[column].push({
      uuid: uuid.v4(),
      properties: {
        borderStyle: borderStyle.solid,
        borderWidth: 1,
        backgroudColor: backgroudColor.blue,
        width: width.full,
        city: city.Tyumen,
      },
      display: {
        borderStyle: true, 
        borderWidth: true, 
        backgroudColor: true, 
        width: true, 
        city: true},
      type: types.weather,
    })
  }

  changeProperties(uuid: string, column: number) {
    for (const i in this.wigets[column]) {
      if (this.wigets[column][i].uuid == uuid) {
        this.currentProperty = this.wigets[column][i];
      }
    }
    this.drawer.toggle();
  }

  delete(uuid: string, column: number) {
    for (const i in this.wigets[column]) {
      if(this.wigets[column][i].uuid == uuid) {
        this.wigets[column].splice(+i, 1);
      }
    }
  }
}
