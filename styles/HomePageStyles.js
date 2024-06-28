import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    backgroundColor: 'black',
    flex: 1
  },
  iconContainer: {
    flexDirection: 'row'
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '20'

  },
  topText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
    height: 50
  },
  user: {
    resizeMode: 'contain',
    height: 50,
    width: 100
  },
  input: {
    height: 30,
    borderColor: '#3b3b3b',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#222222',
    marginEnd: 40
  },

});

export default styles;
