import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Item from './Item'

export default class Card extends React.Component {
  render() {
    const { item } = this.props
    return (
      <View
        style={[
          styles.screenArea,
          { width: this.props.width, height: this.props.height }
        ]}>
        <View style={styles.container2}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              padding: 5
            }}>
            {item.travelMode}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              padding: 5
            }}>
            PNR: {item.PNR}
          </Text>


        </View>
        <View style={{ padding: 8 }}>
          <View style={styles.container3}>
            <Item
              title={'Source'}
              value={item.fromCity}
              color={'#c2185b'}
              fontWeight={'bold'}
              valueFontSize={22}
            />
            <Item
              title={'Arrival'}
              value={item.toCity}
              color={'#c2185b'}
              fontWeight={'bold'}
              valueFontSize={22}
            />
          </View>

          <View style={styles.container3}>
            <Item
              title={'DATE'}
              value={item.date}
              color={'#c2185b'}
              valueFontSize={14}
              titleFontSize={14}
              fontWeight={'bold'}
            />
            <Item
              title={'Purpose'}
              value={item.purpose}
              color={'#c2185b'}
              titleFontSize={14}
              valueFontSize={14}
              fontWeight={'bold'}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenArea: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 7,
    shadowColor: '#555',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 2,
    margin: 1
  },
  container2: {
    width: '100%',
    padding: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#9c27b0'
  },

  container3: {
    marginBottom: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
