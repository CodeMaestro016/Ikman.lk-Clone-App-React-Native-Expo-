import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>Account</ThemedText>
        <TouchableOpacity>
          <MaterialIcons name="chevron-right" size={28} color="#fff" style={{ transform: [{ rotate: '90deg' }] }} />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <ThemedText type="subtitle" style={styles.userName}>Avishka Piyumal</ThemedText>
      </View>

      {/* Menu List */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.menuList}>
        <MenuItem icon="local-offer" label="My Ads" />
        <MenuItem icon="store" label="My membership" />
        <MenuItem icon="star" label="Favorites" />
        <MenuItem icon="bookmark" label="Saved searches" />
        <MenuItem icon="call" label="Phone Numbers" />

        <View style={styles.divider} />
        <MenuItem icon="insert-drive-file" label="My Profile" />

        <View style={styles.divider} />
        <MenuItem icon="shield" label="Stay safe" />
        <MenuItem icon="help-outline" label="FAQ" />
        <MenuItem icon="attach-money" label="How to sell fast?" />
        <MenuItem icon="more-horiz" label="More" />

        <View style={styles.divider} />
        <MenuItem icon="power-settings-new" label="Log out" color="#b00020" />
      </ScrollView>
    </ThemedView>
  );
}

function MenuItem({ icon, label, color = '#444' }: { icon: any; label: string; color?: string }) {
  return (
    <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
      <MaterialIcons name={icon} size={22} color={color} />
      <ThemedText style={[styles.menuLabel, { color }]}>{label}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#009970',
    paddingTop: 40,
    paddingBottom: 16,
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
  userInfo: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  menuList: {
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 18,
    fontWeight: '500',
  },
  divider: {
    height: 12,
    backgroundColor: 'transparent',
  },
});
