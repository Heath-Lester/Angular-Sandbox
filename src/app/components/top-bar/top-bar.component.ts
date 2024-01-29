import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, FlexLayoutModule],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
    @Input({ required: false }) title?: string;
}
