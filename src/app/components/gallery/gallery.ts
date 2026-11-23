// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gallery',
//   standalone: true,
//   imports: [],
//   templateUrl: './gallery.html',
//   styleUrl: './gallery.scss'
// })
// export class Gallery {
//   images = [
//     {
//       src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=85',
//       alt: 'Premium grilled steak',
//       title: 'The Perfect Steak'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85',
//       alt: 'Elegant restaurant interior',
//       title: 'Our Atmosphere'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=85',
//       alt: 'Grilled ribeye steak',
//       title: 'Made to Perfection'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85',
//       alt: 'Fine dining table setting',
//       title: 'Every Detail Matters'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=85',
//       alt: 'Golden French fries',
//       title: 'Golden & Crispy'
//     },

//   ];
// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  images = [
    {
      src: '/images/gallery/steak-02.jpeg',
      alt: 'Steak Frites Cafe Interior',
      title: 'Our Atmosphere'
    },
    {
      src: '/images/gallery/steak-01.jpeg',
      alt: 'Steak Frites Cafe Seating Area',
      title: 'A Place to Enjoy'
    },
    {
      src: '/images/gallery/steak-03.jpeg',
      alt: 'Steak Frites Cafe Interior Design',
      title: 'Every Detail Matters'
    },
    {
      src: '/images/gallery/steak-04.jpeg',
      alt: 'Steak Frites Cafe Ambience',
      title: 'Your Perfect Experience'
    },
    {
      src: '/images/gallery/steak-01.jpeg',
      alt: 'Steak Frites Cafe',
      title: 'Welcome to Our Cafe'
    }
  ];
}
