import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: true
        };
    }

    render() {
        const { button } = this.state
        return (
            <View style={{ flex: 1, justifyContent: "space-between" }} >
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor="green"
                />

                <Image 
                    style={{width: 400, height:400, alignSelf: 'center',}}
                    source={{uri : "https://france3-regions.francetvinfo.fr/provence-alpes-cote-d-azur/sites/regions_france3/files/styles/top_big/public/assets/images/2019/06/13/le_rappeur_marseillais_jul._-4290778.jpg?itok=ZlQL9vY9"}}
                />
                {
                    button ? <Button
                        title="Outline button"
                        type="outline"
                        onPress={() => this.setState({ button: false })}
                    />
                        : <Button
                            title="Solid Button"
                        />

                }
            </View>
        );
    }
}
