import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FlexLayoutModule, TopBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title: string = 'Angular Sandbox';
}
