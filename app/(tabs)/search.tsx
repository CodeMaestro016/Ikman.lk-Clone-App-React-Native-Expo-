import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const categories = [
  { icon: 'smartphone', label: 'Mobiles' },
  { icon: 'desktop-windows', label: 'Electronics' },
  { icon: 'directions-car', label: 'Vehicles' },
  { icon: 'home', label: 'Property' },
  { icon: 'weekend', label: 'Home & Garden' },
  { icon: 'pets', label: 'Animals' },
  { icon: 'build', label: 'Services' },
  { icon: 'business', label: 'Business & Industry' },
  { icon: 'work', label: 'Jobs' },
  { icon: 'sports-soccer', label: 'Hobby, Sport & Kids' },
  { icon: 'watch', label: 'Fashion & Beauty' },
  { icon: 'shopping-cart', label: 'Essentials' },
  { icon: 'school', label: 'Education' },
  { icon: 'agriculture', label: 'Agriculture' },
  { icon: 'flight-takeoff', label: 'Work Overseas' },
  { icon: 'category', label: 'Other' },
  { icon: 'star', label: 'Favorites' },
  { icon: 'local-offer', label: 'Deals' },
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  // filter categories based on search text
  const filteredCategories = categories.filter(cat =>
    cat.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header & Search Bar */}
      <View style={styles.header}>
        <View style={styles.searchBarRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            placeholderTextColor="#888"
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity style={styles.searchBtn} activeOpacity={0.8}>
            <MaterialIcons name="search" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Location Row */}
        <View style={styles.locationRow}>
          <MaterialIcons name="location-on" size={22} color="#009970" style={{ marginRight: 6 }} />
          <ThemedText style={styles.locationText}>All of Sri Lanka</ThemedText>
          <TouchableOpacity style={{ marginLeft: 120 }}>
            <ThemedText style={styles.changeLocation}>Change location</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Category Grid */}
        <View style={styles.grid}>
          {Array.from({ length: Math.ceil(filteredCategories.length / 3) }).map((_, rowIdx) => (
            <View style={styles.gridRow} key={rowIdx}>
              {filteredCategories.slice(rowIdx * 3, rowIdx * 3 + 3).map((cat) => (
                <TouchableOpacity key={cat.label} style={styles.card} activeOpacity={0.85}>
                  <MaterialIcons
                    name={cat.icon as any}
                    size={38}
                    color="#009970"
                    style={{ marginBottom: 8 }}
                  />
                  <ThemedText style={styles.cardLabel}>{cat.label}</ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#009970',
    paddingTop: 44,
    paddingBottom: 18,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 0 ,
    borderBottomRightRadius: 0,
    elevation: 4,
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 28,
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
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
  },
  locationText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
  changeLocation: {
    color: '#1976d2',
    fontSize: 15,
    fontWeight: '500',
  },
  grid: {
    marginTop: 4,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  card: {
    width: '32%',
    aspectRatio: 1,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  cardLabel: {
    fontSize: 13,
    color: '#222',
    fontWeight: '500',
    textAlign: 'center',
  },
});

