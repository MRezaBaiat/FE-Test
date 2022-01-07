import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  baseBoard: {
    fontSize: 20,
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: 20,
    padding: 10,
    borderRadius: 15
  },
  box: {
    flexDirection: 'row',
    width: '100%'
  },
  input: {
    flexGrow: 1,
    height: 50,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#d3d3d3',
    borderRadius: 1,
    marginLeft: 5,
    marginRight: 5,
    padding: 7
  },
  switch_icon: {
    width: 30,
    height: 30
  },
  switch_container: {
    borderRadius: 100,
    borderColor: '#d3d3d3',
    borderWidth: 0.8,
    padding: 7,
    marginTop: 5,
    marginBottom: 15
  },
  exchangeBtn: {
    backgroundColor: 'red',
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 15
  },
  errorTxt: {
    color: 'red'
  }
});
