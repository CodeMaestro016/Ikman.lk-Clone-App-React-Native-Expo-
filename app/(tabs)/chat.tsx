
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ChatScreen() {
  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>My Chats</ThemedText>
  </View>
      <View style={styles.noChatsContainer}>
        <ThemedText type="defaultSemiBold" style={styles.noChats}>No conversations yet!</ThemedText>
      </View>
      <View style={styles.centerContent}>
        <View style={styles.illustrationRow}>
          <MaterialIcons name="chat-bubble" size={90} color="#FFD600" style={{ marginRight: -30, opacity: 0.92, zIndex: 1 }} />
          <MaterialIcons name="chat-bubble" size={90} color="#009970" style={{ marginLeft: -30, opacity: 0.85, zIndex: 0 }} />
        </View>
        <View style={{ height: 30 }} />
        <ThemedText style={styles.subText}>
          {`Click "Chat" on an ad or post your own ad to
start chatting.`}
        </ThemedText>
        <TouchableOpacity style={styles.browseBtn} activeOpacity={0.85}>
          <ThemedText style={styles.browseBtnText}>Browse ads</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postBtn} activeOpacity={0.85}>
          <ThemedText style={styles.postBtnText}>Post an ad!</ThemedText>
        </TouchableOpacity>
      </View>
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
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  noChatsContainer: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 0,
  },
  noChats: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
    textAlign: 'center',
  },
  subText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 30,
    textAlign: 'center',
  },
  browseBtn: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    paddingVertical: 14,
    marginBottom: 14,
    alignItems: 'center',
  },
  browseBtnText: {
    color: '#444',
    fontSize: 16,
    fontWeight: '600',
  },
  postBtn: {
    width: '85%',
    backgroundColor: '#FFD600',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  postBtnText: {
    color: '#222',
    fontSize: 16,
    fontWeight: '700',
  },
  illustrationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
