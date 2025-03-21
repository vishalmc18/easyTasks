import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.Model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/users/' + this.user.avatar;
  }

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
