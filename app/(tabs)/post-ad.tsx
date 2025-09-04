
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const categories = [
  { icon: 'directions-car', label: 'Cars', color: '#009970' },
  { icon: 'two-wheeler', label: 'Motorbikes', color: '#1976d2' },
  { icon: 'smartphone', label: 'Mobile Phones', color: '#00bcd4' },
  { icon: 'home', label: 'Property', color: '#e57373' },
  { icon: 'weekend', label: 'Home & Garden', color: '#43a047' },
  { icon: 'work', label: 'Jobs', color: '#1976d2' },
];

export default function PostAdScreen() {
  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>Post an ad</ThemedText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeBox}>
          <ThemedText style={styles.welcomeText}>Welcome Avishka Piyumal!</ThemedText>
          <ThemedText style={styles.subText}>Choose an option below to post an ad</ThemedText>
        </View>
        <View style={styles.grid}>
          {categories.map((cat, i) => (
            <TouchableOpacity key={cat.label} style={styles.card} activeOpacity={0.85}>
              <MaterialIcons name={cat.icon as any} size={38} color={cat.color} style={{ marginBottom: 8 }} />
              <ThemedText style={styles.cardLabel}>{cat.label}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.dropdownRow} activeOpacity={0.8}>
          <ThemedText style={styles.dropdownText}>Sell in other categories</ThemedText>
          <MaterialIcons name="chevron-right" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownRow} activeOpacity={0.8}>
          <ThemedText style={styles.dropdownText}>Look for something</ThemedText>
          <MaterialIcons name="expand-more" size={24} color="#888" />
        </TouchableOpacity>
        <View style={styles.bottomLinks}>
          <TouchableOpacity>
            <ThemedText style={styles.linkText}>Posting allowance</ThemedText>
          </TouchableOpacity>
          <ThemedText style={styles.linkDivider}>|</ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.linkText}>Posting rules</ThemedText>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 18,
    paddingBottom: 32,
  },
  welcomeBox: {
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 2,
    color: '#222',
  },
  subText: {
    fontSize: 15,
    color: '#666',
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  card: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    elevation: 1,
  },
  cardLabel: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
    textAlign: 'center',
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    gap: 18,
  },
  linkText: {
    color: '#1976d2',
    fontSize: 15,
    fontWeight: '500',
  },
  linkDivider: {
    color: '#1976d2',
    fontSize: 18,
    marginHorizontal: 8,
    fontWeight: '400',
  },
});
