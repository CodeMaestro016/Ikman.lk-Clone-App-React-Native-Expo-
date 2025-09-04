// Define interfaces for type safety
interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Cars', icon: 'car' },
  { id: '2', name: 'Electronics', icon: 'laptop' },
  { id: '3', name: 'Jobs', icon: 'briefcase' },
  { id: '4', name: 'Property', icon: 'home' },
];

export const products: { [key: string]: Product[] } = {
  '1': [
    { id: '1-1', title: 'Toyota Corolla 2018', price: 'Rs 4,500,000', image: 'https://via.placeholder.com/150', description: 'Well-maintained sedan with low mileage.' },
    { id: '1-2', title: 'Honda Civic 2020', price: 'Rs 6,000,000', image: 'https://via.placeholder.com/150', description: 'Premium condition, full options.' },
  ],
  '2': [
    { id: '2-1', title: 'Logitech G502 Mouse', price: 'Rs 15,000', image: 'https://via.placeholder.com/150', description: 'Gaming mouse with customizable buttons.' },
    { id: '2-2', title: 'Samsung TV 55"', price: 'Rs 85,000', image: 'https://via.placeholder.com/150', description: '4K Smart TV, excellent condition.' },
  ],
  '3': [
    { id: '3-1', title: 'Software Developer', price: 'Rs 100,000/month', image: 'https://via.placeholder.com/150', description: 'Full-time role, remote option available.' },
    { id: '3-2', title: 'Marketing Manager', price: 'Rs 120,000/month', image: 'https://via.placeholder.com/150', description: 'Experienced candidate needed.' },
  ],
  '4': [
    { id: '4-1', title: 'House for Sale', price: 'Rs 15,000,000', image: 'https://via.placeholder.com/150', description: '3-bedroom house in Colombo.' },
    { id: '4-2', title: 'Land Plot', price: 'Rs 2,500,000', image: 'https://via.placeholder.com/150', description: '500 sqm residential land.' },
  ],
};

