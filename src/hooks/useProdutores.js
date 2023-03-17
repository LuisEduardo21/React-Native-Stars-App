import {useEffect, useState} from 'react';

import {caregarProdutores} from '../services/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState('');

  useEffect(() => {
    const ret = caregarProdutores();
    setTitulo(ret.titulo);
    setLista(ret.lista);
  }, []);

  return [titulo, lista];
}
