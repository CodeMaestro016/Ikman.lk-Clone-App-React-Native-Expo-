import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

const dummyProducts = [
  {
    id: '1',
    title: 'ASUS TUF Gaming F15 (2023)',
    price: 'Rs.290,999.00',
    image: 'https://dlcdnwebimgs.asus.com/gain/1d7ff1ce-d5ed-4184-bbfa-2cee7150b1fc/w800',
    member: true,
    verified: true,
    time: 'Just now',
    description: 'Powerful gaming laptop with Intel i7 13th Gen, RTX 4060, 16GB RAM, and 512GB SSD. Perfect for gamers and professionals.',
  },
  {
    id: '2',
    title: 'Toyota Land Cruiser LC300 ZX 2025 SUV',
    price: 'Rs.107,000,000.00',
    image: 'https://riyasewana.com/thumb/thumbtoyota-land-cruiser-221373122901.jpg',
    member: true,
    verified: false,
    time: '5 min ago',
    description: 'Luxury 2025 Land Cruiser ZX with advanced off-road capability, premium leather interior, and modern infotainment system.',
  },
  {
    id: '3',
    title: 'Rottweiler DOG Puppies',
    price: 'Rs 35,000.00',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQluj_kwoC29Ip9I8hoI0b2n-MzPkybWmUpyyEmTMj8LbtT4GqJJm_48A6qeTUjw39-vrwXheTJyoiMUjZVaYN1x84_vw9Bwho6UnJeuByxDg',
    member: true,
    verified: true,
    time: 'Just now',
    description: 'Healthy purebred Rottweiler puppies. Vaccinated and ready for adoption. Friendly and playful.',
  },
  {
    id: '4',
    title: 'ASUS STRIX FALCHION NX WIRELESS',
    price: 'Rs.52,000.00',
    image: 'https://www.nanotek.lk/storage/products/1560/twGImzNaDszlzDjwIapMyxPa5z426wQpJOB27P7j.webp',
    member: false,
    verified: true,
    time: 'Just now',
    description: 'Compact wireless mechanical keyboard with customizable RGB lighting and excellent battery life.',
  },
  {
    id: '5',
    title: 'iPhone 16 Pro Max',
    price: 'Rs.530,439.00',
    image: 'https://idealz.lk/wp-content/uploads/2024/10/iPhone-16-Pro-Max-Natural.jpg',
    member: true,
    verified: true,
    time: '2 min ago',
    description: 'Apple iPhone 16 Pro Max with A18 Bionic chip, Super Retina XDR display, and pro-level cameras.',
  },
  {
    id: '6',
    title: 'Honda Dio 2019 Scooter',
    price: 'Rs 420,000',
    image: 'https://i.ikman-st.com/honda-dio-2018-for-sale-kurunegala-1880/e20c95f7-689d-4273-9e71-20bd0300a6a4/620/466/fitted.jpg',
    member: false,
    verified: true,
    time: '5 min ago',
    description: 'Well-maintained Honda Dio scooter, 2019 model. Excellent mileage and smooth performance.',
  },
  {
    id: '7',
    title: 'Dell PRO 34" P3424WE IPS Curved USB-C Hub',
    price: 'Rs 277,000.00',
    image: 'https://www.nanotek.lk/storage/products/1575/2uukas26SmxYlP9A5dAxYEF28Yvv8CFL7VSLPfpu.webp',
    member: true,
    verified: true,
    time: '10 min ago',
    description: 'Ultra-wide curved monitor with 34-inch display, IPS panel, USB-C hub, and multitasking features.',
  },
  {
    id: '8',
    title: 'Skmei W41 | Silver White Brown',
    price: 'Rs.5,890.00',
    image: 'https://anix.lk/wp-content/uploads/2024/04/anix.lk_.Skmei_.9058.brown_.leather.men_-200x230.png',
    member: false,
    verified: true,
    time: '15 min ago',
    description: 'Elegant Skmei men’s watch with silver casing, white dial, and brown leather strap. Stylish and durable.',
  },
];

export default function HomeScreen() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeV76JQGujMJAlMSI_K6wjcDR7fWF5hqIsvA&s' }}
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
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectedProduct(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ padding: 8 }}>
              <ThemedText style={styles.cardTitle} numberOfLines={2}>
                {item.title}
              </ThemedText>
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
                    <ThemedText style={styles.badgeTextBlue}>VERIFIED</ThemedText>
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

      {/* Popup Modal */}
      <Modal
        visible={!!selectedProduct}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                <Image source={{ uri: selectedProduct.image }} style={styles.modalImage} />
                <ThemedText style={styles.modalTitle}>{selectedProduct.title}</ThemedText>
                <ThemedText style={styles.modalPrice}>{selectedProduct.price}</ThemedText>
                <ThemedText style={styles.modalTime}>{selectedProduct.time}</ThemedText>
                <ThemedText style={styles.modalDesc}>{selectedProduct.description}</ThemedText>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => setSelectedProduct(null)}
                >
                  <ThemedText style={{ color: '#fff', fontWeight: '600' }}>Close</ThemedText>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    elevation: 4,
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  filterRow: {
    flexDirection: 'row',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '90%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: 6,
  },
  modalPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#009970',
    marginBottom: 6,
  },
  modalTime: {
    fontSize: 13,
    color: '#777',
    marginBottom: 12,
  },
  modalDesc: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 14,
    lineHeight: 20,
  },
  closeBtn: {
    backgroundColor: '#009970',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
