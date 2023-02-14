import React from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { useListaProdutores } from "../../../hooks/useListaProdutores";
import { useTitulo } from "../../../hooks/useTitulo";

import Produtor from "./Produtor";

type Props ={
    Topo?: JSX.Element
}

export const ListaProdutores= ({Topo}: Props) => {

    const titulo = useTitulo();
    const lista = useListaProdutores();

    const TopoLista = () => {
        return <>
            {Topo}
            <Text style={styles.titulo}>{titulo}</Text>
        </>         
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) =><Produtor {...item}/>}
        keyExtractor={({nome})=> nome}
        ListHeaderComponent={TopoLista}
    />
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight:'bold',
        color: '#464646'
    }
})