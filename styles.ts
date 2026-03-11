import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  // Header
  header: {
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 28,
  },
  badgeRow: {
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#1E1B4B',
    borderWidth: 1,
    borderColor: '#4338CA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#A78BFA',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#F9FAFB',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
    textAlign: 'center',
    lineHeight: 20,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 8,
  },

  // Card
  card: {
    backgroundColor: '#161625',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 16,
  },
  label: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#0F0F1A',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '600',
  },
  unitBadge: {
    backgroundColor: '#1E1B4B',
    borderWidth: 1,
    borderColor: '#4338CA',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  unitText: {
    color: '#A78BFA',
    fontWeight: '700',
    fontSize: 14,
  },
  errorBox: {
    backgroundColor: '#1F0A0A',
    borderRadius: 10,
    padding: 12,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#7F1D1D',
  },
  errorText: {
    color: '#FCA5A5',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#4F46E5',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.3,
  },

  // Scale
  scaleCard: {
    backgroundColor: '#161625',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 16,
  },
  scaleTitle: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 14,
  },
  scaleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  scaleBar: {
    width: 4,
    height: 20,
    borderRadius: 2,
  },
  scaleRange: {
    color: '#9CA3AF',
    fontSize: 12,
    width: 80,
    fontVariant: ['tabular-nums'],
  },
  scaleLabel: {
    color: '#D1D5DB',
    fontSize: 13,
    fontWeight: '500',
  },

  // Result
  imcCircle: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#0F0F1A',
  },
  imcValue: {
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1,
  },
  imcUnit: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
  },
  classLabel: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 24,
  },

  // Progress bar
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1F2937',
    overflow: 'visible',
    marginBottom: 8,
    marginHorizontal: 6,
  },
  progressGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 4,
    backgroundColor: '#374151',
  },
  progressThumb: {
    position: 'absolute',
    top: -5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#0F0F1A',
    borderWidth: 3,
    marginLeft: -9,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    marginTop: 4,
  },
  progressLabelText: {
    color: '#4B5563',
    fontSize: 10,
    fontWeight: '600',
  },

  // Info cards
  infoRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#161625',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  infoValue: {
    color: '#F9FAFB',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  infoKey: {
    color: '#6B7280',
    fontSize: 11,
    marginTop: 4,
    fontWeight: '600',
    letterSpacing: 1,
  },

  // Back
  backButton: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 15,
  },
});