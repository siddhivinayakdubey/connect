import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    backgroundColor: '#080808',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
},
headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 0, //Todo: To be handled with the image coming from API
    marginTop: 5,
    
  },
  headingText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    height: 20,
  },
  headingBaseText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    height: 20,
  },
  dateTimeText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '100',
    width: 205,
    height: 50
  },
  dateTimeBaseText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '100',
    width: 205,
    height: 50
  },
  textContainer: {
    justifyContent: 'space-between',
    marginTop: 10
  },
  textBaseContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20
  },
  user: {
    resizeMode: 'contain',
    height: 50,
    width: 100
  },

  banner: {
    width: 'auto',
    height: 150,
    marginTop: -10
  }

});

export default styles;
