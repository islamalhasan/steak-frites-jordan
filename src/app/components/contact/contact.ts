import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  phone = '+962788472398';

  phoneLink = 'tel:+962788472398';

  whatsappLink =
    'https://wa.me/962788472398?text=Hello%20Steak%20Frites%20Cafe';

  instagramLink =
    'https://www.instagram.com/steakfritescafe/';

  directionsLink =
    'https://maps.app.goo.gl/iG8hkW8yLongaRkP7?g_st=ac';

  openingHours = '12:00 PM – 12:00 AM';
}