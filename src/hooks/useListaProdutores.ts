import {useEffect, useState} from 'react';
import {carregaProdutores} from '../services/carregaDados';
import {IProdutor} from '../types/IProdutor';

export const useListaProdutores = () => {
  const [lista, setLista] = useState<IProdutor[]>([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setLista(retorno.lista);
  }, []);

  return lista;
};
