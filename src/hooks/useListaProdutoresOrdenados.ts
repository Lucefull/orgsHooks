import {IProdutor} from './../types/IProdutor';

import {useListaProdutores} from './useListaProdutores';

export const useListaProdutoresOrdenado = (sortValue: 'distancia' | 'nome' | 'estrelas' ) => {
  const lista = useListaProdutores();

  lista.sort((a, b) => sortValue == 'nome' ? a.nome.localeCompare(b.nome) :  a[sortValue] - b[sortValue]);

  return lista;
};
