
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const dummyProducts = [
  {
    id: '1',
    title: 'ASUS TUF Gaming F15 (2023)',
    price: 'Rs.290,999.00',
    image: 'https://dlcdnwebimgs.asus.com/gain/1d7ff1ce-d5ed-4184-bbfa-2cee7150b1fc/w800',
    member: true,
    verified: true,
    time: 'Just now',
  },
  {
    id: '2',
    title: 'Toyota Land Cruiser LC300 ZX 2025 SUV',
    price: 'Rs.107,000,000.00',
    image: 'https://riyasewana.com/thumb/thumbtoyota-land-cruiser-221373122901.jpg',
    member: true,
    verified: false,
    time: '5 min ago',
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

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'data:image/png;base64,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' }}
            style={{ width: 32, height: 32, marginRight: 8 }}
            resizeMode="contain"
          />
          <ThemedText style={styles.logoText}>ikman</ThemedText>
        </View>

        
        <TouchableOpacity>
          <MaterialIcons name="bookmark-border" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Filter Row */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="place" size={20} color="#009970" />
          <ThemedText style={styles.filterText}>Location</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="category" size={20} color="#009970" />
          <ThemedText style={styles.filterText}>Category</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="tune" size={20} color="#009970" />
        </TouchableOpacity>
      </View>
      {/* Product Grid */}
      <FlatList
        data={dummyProducts}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/cars/${item.id}`)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ padding: 8 }}>
              <ThemedText style={styles.cardTitle} numberOfLines={2}>{item.title}</ThemedText>
              <ThemedText style={styles.cardPrice}>{item.price}</ThemedText>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                {item.member && (
                  <View style={styles.badgeMember}>
                    <MaterialIcons name="star" size={14} color="#fff" />
                    <ThemedText style={styles.badgeText}>MEMBER</ThemedText>
                  </View>
                )}
                {item.verified && (
                  <View style={styles.badgeVerified}>
                    <MaterialIcons name="verified" size={14} color="#1976d2" />
                    <ThemedText style={styles.badgeTextBlue}>VERIFIED SELLER</ThemedText>
                  </View>
                )}
              </View>
              <ThemedText style={styles.timeText}>{item.time}</ThemedText>
            </View>
          </TouchableOpacity>
        )}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#009970',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 44,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 4,
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  resultText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 28,
    marginHorizontal: 16,
    marginTop: -22,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#222',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  searchBtn: {
    backgroundColor: '#FFD600',
    borderRadius: 24,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: -8,
    elevation: 2,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: 2,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 1,
    minWidth: 90,
    justifyContent: 'center',
  },
  filterText: {
    color: '#009970',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 6,
  },
  gridContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    flex: 1,
    marginHorizontal: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#eee',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  cardPrice: {
    fontSize: 15,
    color: '#009970',
    fontWeight: '700',
    marginBottom: 2,
  },
  badgeMember: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD600',
    borderRadius: 4,
    paddingHorizontal: 6,
    marginRight: 6,
    height: 20,
  },
  badgeVerified: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    borderRadius: 4,
    paddingHorizontal: 6,
    height: 20,
  },
  badgeText: {
    color: '#444',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 3,
  },
  badgeTextBlue: {
    color: '#1976d2',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 3,
  },
  timeText: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
});
