import { useMemo, useReducer, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Starts from '../../../components/Stars';
import { IProdutor } from '../../../types/IProdutor';

const distanciaMetros = (distancia: number) => {
    return `${distancia}m`;
};

const Produtor = ({ nome, imagem, distancia, estrelas }: IProdutor) => {
    const [selected, invertSelection] = useReducer(selected => !selected, false);

    const distanciaEmMetros = useMemo(()=> distanciaMetros(distancia),[distancia]);

    return (
        <TouchableOpacity style={styles.card} onPress={invertSelection}>
            <Image source={imagem} accessibilityLabel={nome} style={styles.image} />
            <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>{nome}</Text>
                    <Starts
                        quantidadeOriginal={estrelas}
                        editavel={selected}
                        grande={selected}
                    />
                </View>
                <Text style={styles.distancia}>{distanciaEmMetros}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 6,
        flexDirection: 'row',

        //Android
        elevation: 4,

        //IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },
});

export default Produtor;
