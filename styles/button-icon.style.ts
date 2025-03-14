import { MyColors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const buttonWithIconStyle = StyleSheet.create({
  button: {
    borderRadius: 16,
    backgroundColor: MyColors.primary,
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 14,
    position: 'sticky',
    alignSelf: 'flex-end',
    marginRight: 12,
    shadowColor: '#fd6369', // Couleur de l'ombre
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
});
