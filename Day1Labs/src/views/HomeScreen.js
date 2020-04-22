import React, { Component } from "react";
import { View, Image, Alert } from "react-native";
import { Container, Header } from "../components/dummy/Layout";
import { Button } from "../components/dummy;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
  }

  render() {
    const { button } = this.state;

    return (
      <View style={{flex:1}}>
          <Header title="Supinfo" />
          <Header title="Supinfo2" />
          <Header title="Supinfo3" />
          <Image
            style={{width: 200, height: 200}}
            source={{uri : 'https://cdn.radiofrance.fr/s3/cruiser-production/2016/04/ff59ff0f-efaf-4234-96c9-2113ddf171f0/838_ob_4a7c36_croissant.jpg'}}
          />

          {button ? (
            <Button
              title="Button TRUE"
              backgroundColor="green"
              color="black"
              onPress={() => this.setState({ button: false })}
            />
          ) : (
            <Button
              title="Button FALSE"
              backgroundColor="yellow"
              color="red"
              onPress={() => this.setState({ button: true })}
            />
          )}
      </View>
    );
  }
}
