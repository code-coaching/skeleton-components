import { Component } from '@angular/core';
import { Avatar } from 'lib';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [LucideAngularModule, Avatar],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  imgSrc =
    'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
  verticalImgSrc =
    'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=64&h=128&auto=format&fit=crop';
  horizontalImgSrc =
    'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
}
