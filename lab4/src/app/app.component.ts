import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GreetingComponent} from './greeting/greeting.component'
import {DatetimeComponent} from './datetime/datetime.component'
import {QuarterlyGoalsComponent} from './quarterly-goals/quarterly-goals.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent, DatetimeComponent, QuarterlyGoalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab4';
}
