import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Hero} from './components/hero/hero';
import { About } from './components/about/about';
import { Menu} from './components/menu/menu';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Hero,
    About,
    Menu,
    Gallery,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}