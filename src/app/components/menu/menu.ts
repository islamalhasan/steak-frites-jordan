import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tag?: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  activeCategory = 'All';

  categories = ['All', 'Steaks', 'Sides'];

  menuItems: MenuItem[] = [
    {
      name: 'Classic Steak Frites',
      description: 'Grilled steak served with golden crispy fries and our signature sauce.',
      price: 18,
      category: 'Steaks',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=85',
      tag: 'SIGNATURE'
    },
    {
      name: 'Ribeye Steak',
      description: 'Juicy ribeye steak, expertly grilled and served with seasoned fries.',
      price: 22,
      category: 'Steaks',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=85'
    },
    {
      name: 'Grilled Steak Plate',
      description: 'Tender grilled steak with a delicious side and house dressing.',
      price: 20,
      category: 'Steaks',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=85'
    },
    
    {
      name: 'Golden French Fries',
      description: 'Freshly prepared golden fries, perfectly crispy and lightly seasoned.',
      price: 4,
      category: 'Sides',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=85'
    }
  ];

  get filteredItems(): MenuItem[] {
    if (this.activeCategory === 'All') {
      return this.menuItems;
    }

    return this.menuItems.filter(
      item => item.category === this.activeCategory
    );
  }

  selectCategory(category: string): void {
    this.activeCategory = category;
  }
}