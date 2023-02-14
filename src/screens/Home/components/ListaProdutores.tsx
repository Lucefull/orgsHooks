import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { useListaProdutoresOrdenado } from "../../../hooks/useListaProdutoresOrdenados";
import { useTitulo } from "../../../hooks/useTitulo";

import Produtor from "./Produtor";

type Props = {
    Topo?: JSX.Element
}

export const ListaProdutores = ({ Topo }: Props) => {

    const titulo = useTitulo();
    const [sort, setSort] = useState<'nome' | 'estrelas' | 'distancia'>('nome');
    // const lista = useListaProdutores();
    const lista = useListaProdutoresOrdenado(sort);

    const TopoLista = () => {
        return <>
            {Topo}
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.pickerTitle}>Ordenar por</Text>
            <Picker onValueChange={setSort} selectedValue={sort} >
                <Picker.Item label="Nome" value={'nome'} />
                <Picker.Item label="Estrelas" value={'estrelas'} />
                <Picker.Item label="Distancia" value={'distancia'}/>
            </Picker>

        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
    />
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    },
    pickerTitle: {
        marginTop: 5,
        marginBottom: -10,
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})