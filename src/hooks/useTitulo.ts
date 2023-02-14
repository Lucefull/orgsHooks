import {useEffect, useState} from 'react';
import {carregaProdutores} from '../services/carregaDados';

export const useTitulo = () => {
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titutlo);
  }, []);

  return titulo;
};
