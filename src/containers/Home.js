import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput
} from 'react-native'

import Carousal from './Carousal'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  componentWillMount() {
    const { width, height } = Dimensions.get('window')
    this.setState({
      value: {
        width: parseInt(width - 32)
      }
    })
  }

  constructor() {
    super()
    this.state = {
      width: undefined,
      height: undefined,
      error: undefined,
      value: { width: 300, height: 210 }
    }
  }

  _submit = () => {
    const { width, height } = Dimensions.get('window')

    if (this.state.width !== undefined && this.state.height !== undefined) {
      if (this.state.width < width - 32 && this.state.height < height - 32) {
        return this.setState({
          value: {
            width: parseInt(this.state.width),
            height: parseInt(this.state.height)
          },
          error: undefined
        })
      }
      this.setState({
        error: 'Width and/or Height are more than device support'
      })
    }
    this.setState({
      error: 'Something is wrong. Did you put width > device resolution?'
    })
  }

  render() {
    const { width, height } = Dimensions.get('window')
    const message = `Resolution must below ${parseInt(width - 32)} x ${parseInt(
      height - 32
    )}`

    return (
      <ScrollView style={{ backgroundColor: '#dcdcdc' }}>
        <StatusBar hidden />
        <View style={styles.screenArea}>
          <Carousal
            width={this.state.value.width}
            height={this.state.value.height}
          />
          <View>
            <View style={styles.inputArea}>
              <View style={{ width: '45%' }}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Width'}
                  onChangeText={text => this.setState({ width: text })}
                  value={this.state.text}
                  keyboardType={'numeric'}
                />
              </View>
              <View style={{ width: '45%' }}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Height'}
                  onChangeText={text => this.setState({ height: text })}
                  value={this.state.text}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
            <Button onPress={this._submit} title="Re-Size" color="#c2185b" />
          </View>
          {this.state.error === undefined ? (
            null
          ) : (
            <Text style={{ color: 'purple', fontSize: 18 }}>
              {this.state.error}
            </Text>
          )}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  screenArea: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 16
  },
  inputArea: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  textInput: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    borderWidth: 1
  }
})
