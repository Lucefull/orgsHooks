import React, { FC, JSXElementConstructor, useEffect, useState } from "react"
import { FlatList, StyleSheet, Text } from "react-native"

import { carregaProdutores } from "../../../services/carregaDados"
import { IProdutor } from "../../../types/IProdutor";
import Produtor from "./Produtor";

type Props ={
    Topo?: JSX.Element
}

export const ListaProdutores= ({Topo}: Props) => {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState<IProdutor[]>([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titutlo);
        setLista(retorno.lista);
    }, [])

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