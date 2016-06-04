import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <img className="logo" src="../../../images/artwalk-1.png"/>
            </div>
        )
    }
}

const styles = StyleSheet.create({

});

export default Logo;
