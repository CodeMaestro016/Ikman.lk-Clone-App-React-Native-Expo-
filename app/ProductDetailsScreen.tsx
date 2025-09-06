import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, ScrollView, StyleSheet } from 'react-native';

const dummyProducts = [
  {
    id: '1',
    title: 'ASUS TUF Gaming F15 (2023)',
    price: 'Rs.290,999.00',
    image: 'https://dlcdnwebimgs.asus.com/gain/1d7ff1ce-d5ed-4184-bbfa-2cee7150b1fc/w800',
    description: 'Powerful gaming laptop with Intel 13th Gen i7, RTX 4060, and 144Hz display.',
  },
  {
    id: '2',
    title: 'Toyota Land Cruiser LC300 ZX 2025 SUV',
    price: 'Rs.107,000,000.00',
    image: 'https://riyasewana.com/thumb/thumbtoyota-land-cruiser-221373122901.jpg',
    description: 'Luxury SUV with advanced off-road capabilities, latest tech, and premium comfort.',
  },
  {
    id: '3',
    title: 'Rottweiler DOG Puppies',
    price: 'Rs 35,000.00',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQluj_kwoC29Ip9I8hoI0b2n-MzPkybWmUpyyEmTMj8LbtT4GqJJm_48A6qeTUjw39-vrwXheTJyoiMUjZVaYN1x84_vw9Bwho6UnJeuByxDg',
    member: true,
    verified: true,
    time: 'Just now',
  },
  {
    id: '4',
    title: 'ASUS STRIX FALCHION NX WIRELESS',
    price: 'Rs.52,000.00',
    image: 'https://www.nanotek.lk/storage/products/1560/twGImzNaDszlzDjwIapMyxPa5z426wQpJOB27P7j.webp',
    member: false,
    verified: true,
    time: 'Just now',
  },
  {
    id: '5',
    title: 'iPhone 16 Pro Max',
    price: 'Rs.530,439.00',
    image: 'https://idealz.lk/wp-content/uploads/2024/10/iPhone-16-Pro-Max-Natural.jpg',
    member: true,
    verified: true,
    time: '2 min ago',
  },
  {
    id: '6',
    title: 'Honda Dio 2019 Scooter',
    price: 'Rs 420,000',
    image: 'https://i.ikman-st.com/honda-dio-2018-for-sale-kurunegala-1880/e20c95f7-689d-4273-9e71-20bd0300a6a4/620/466/fitted.jpg',
    member: false,
    verified: true,
    time: '5 min ago',
  },
  {
    id: '7',
    title: 'Dell PRO 34" P3424WE IPS Curved USB-C Hub',
    price: 'Rs 277,000.00',
    image: 'https://www.nanotek.lk/storage/products/1575/2uukas26SmxYlP9A5dAxYEF28Yvv8CFL7VSLPfpu.webp',
    member: true,
    verified: true,
    time: '10 min ago',
  },
  {
    id: '8',
    title: 'Skmei W41 | Silver White Brown',
    price: 'Rs.5,890.00',
    image: 'https://anix.lk/wp-content/uploads/2024/04/anix.lk_.Skmei_.9058.brown_.leather.men_-200x230.png',
    member: false,
    verified: true,
    time: '15 min ago',
  },
];

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = dummyProducts.find(p => p.id === id);

  if (!product) {
    return <ThemedView><ThemedText>Product not found</ThemedText></ThemedView>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <ThemedText style={styles.title}>{product.title}</ThemedText>
      <ThemedText style={styles.price}>{product.price}</ThemedText>
      <ThemedText style={styles.description}>{product.description}</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  price: { fontSize: 18, fontWeight: '700', color: '#009970', marginBottom: 16 },
  description: { fontSize: 15, lineHeight: 22, color: '#444' },
});
