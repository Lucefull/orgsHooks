import { Component, ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../../assets/logo.png';

import { carregaTopo } from '../../../services/carregaDados';

export class Topo extends Component {

    state = {
        topo: {
            boasVindas: '',
            legenda: ''
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    componentDidMount(): void {
        this.atualizaTopo();
    }

    render(): ReactNode {
        return (
            <View style={styles.header}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.welcome}>{this.state.topo.boasVindas}</Text>
                <Text style={styles.legend}>{this.state.topo.legenda}</Text>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    legend: {
        fontSize: 16,
        lineHeight: 26,
    },
});
