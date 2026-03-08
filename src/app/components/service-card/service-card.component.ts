import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() accent: 'primary' | 'gold' = 'primary';
  @Input() icon: 'individual' | 'couple' | 'family' | 'teen' | 'default' = 'default';
}
