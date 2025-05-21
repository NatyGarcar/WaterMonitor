import { StyleSheet } from 'react-native';

const St = StyleSheet.create({
  dataContainer: {
    //flex: 1,
    padding: 16,
    margin: 8,
    backgroundColor: '#1B263B',
    borderRadius: 16,
    shadowColor: "#0D1B2A",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowRadius: 1,
  },
  dataTitle: {
    color: '#E0E1DD',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 18,
    textAlign: 'left',
  },
  staticData: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default St;