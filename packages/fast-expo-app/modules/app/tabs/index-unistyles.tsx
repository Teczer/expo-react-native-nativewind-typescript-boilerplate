import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ExternalLink } from '@/components/external-link';
import { Container } from '@/components/container';

export default function TabOneScreen() {
  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Text with custom font (SpaceMono x Unistyles)</Text>
        <View style={styles.divider} />
        <View style={styles.linkContainer}>
          <ExternalLink href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
            <Text style={styles.linkText}>
              Tap here if your app doesn't automatically update after making changes
            </Text>
          </ExternalLink>
        </View>
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
  subtitle: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: theme.colors.foreground,
    marginTop: 16,
  },
  divider: {
    height: 1,
    width: '80%',
    marginVertical: 32,
    backgroundColor: theme.colors.border,
  },
  linkContainer: {
    marginTop: 8,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  linkText: {
    textAlign: 'center',
    color: theme.colors.primary,
  },
}));
