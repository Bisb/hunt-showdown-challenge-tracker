import { Component, inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settings = inject(SettingsService);
  offcanvasService = inject(NgbOffcanvas)
}
