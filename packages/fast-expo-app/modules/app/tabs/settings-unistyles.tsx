import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Container } from '@/components/container';

export default function TabTwoScreen() {
  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.title}>This is the settings screen</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
}));
