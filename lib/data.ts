import { MenuItem } from '@/types';

// Sample menu items data
export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, fresh mozzarella, and aromatic basil leaves",
    price: 299,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "pizza",
    featured: true,
    popular: true
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Pizza topped with spicy pepperoni slices and melted mozzarella cheese",
    price: 349,
    image: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "pizza",
    popular: true
  },
  {
    id: "3",
    name: "Double Cheeseburger",
    description: "Two juicy beef patties with double cheese, crisp lettuce, and our special sauce",
    price: 249,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "burger",
    featured: true,
    popular: true
  },
  {
    id: "4",
    name: "Bacon Burger",
    description: "Premium beef patty with crispy bacon, melted cheddar, and smoky BBQ sauce",
    price: 279,
    image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "burger"
  },
  {
    id: "5",
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate milkshake topped with fresh whipped cream",
    price: 149,
    image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "drinks",
    featured: true
  },
  {
    id: "6",
    name: "Vanilla Ice Cream",
    description: "Smooth and creamy vanilla ice cream drizzled with chocolate sauce",
    price: 99,
    image: "https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg",
    category: "dessert",
    popular: true
  },
  {
    id: "7",
    name: "French Fries",
    description: "Golden and crispy french fries served with signature ketchup",
    price: 129,
    image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "sides"
  },
  {
    id: "8",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing, parmesan, and garlic croutons",
    price: 199,
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "salad"
  },
  {
    id: "9",
    name: "Iced Coffee",
    description: "Smooth cold brewed coffee served over ice with a splash of cream",
    price: 129,
    image: "https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "drinks"
  },
  {
    id: "10",
    name: "Chicken Sandwich",
    description: "Grilled chicken breast with fresh lettuce, tomato, and herb mayo",
    price: 199,
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "sandwich",
    featured: true,
    popular: true
  },
  {
    id: "11",
    name: "Craft Beer",
    description: "Premium local IPA craft beer with complex hoppy notes (16oz)",
    price: 249,
    image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "beer"
  },
  {
    id: "12",
    name: "Chocolate Brownie",
    description: "Warm fudgy brownie served with vanilla ice cream and chocolate drizzle",
    price: 179,
    image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "dessert"
  }
];

// Simulated API functions with artificial delay
export async function getAllMenuItems(): Promise<MenuItem[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return menuItems;
}

export async function getFeaturedItems(): Promise<MenuItem[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return menuItems.filter(item => item.featured);
}

export async function getPopularItems(): Promise<MenuItem[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return menuItems.filter(item => item.popular);
}

export async function getItemsByCategory(category: string): Promise<MenuItem[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
}

export async function getCategories(): Promise<string[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [...new Set(menuItems.map(item => item.category))];
}

export async function getItemById(id: string): Promise<MenuItem | undefined> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return menuItems.find(item => item.id === id);
}