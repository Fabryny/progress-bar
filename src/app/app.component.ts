import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isAddTimerVisible:boolean = false;
  isEndTimerAlertVisible: boolean = false;
  time:number =0; 
  timers:Array<number> = [];
  constructor(){
    this.timers = [3, 20, 10]
  }
  
  logCountDownEnd(){
    console.log("has finshed")
  }

  showAddTimer(){
    this.isAddTimerVisible = true;
  }
  hideAddTimer(){
    this.isAddTimerVisible = false;
  }
  showEndTimerAlert(){
    this.isEndTimerAlertVisible = true;
  }
  hideEndTimerAlert(){
    this.isEndTimerAlertVisible = false;
  }
  submitAddTimer(){
    this.timers.push(this.time)
    this.hideAddTimer();
  }

  teste(){
    const element = document.getElementById('teste');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
