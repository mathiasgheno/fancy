import * as React from 'react';
import { IFancy } from "./Types";
import { Paragrafo } from './StyledComponents';

const Fancy: React.FC<IFancy> = (props) => {
  return (
    <div>
      <h1>{props.texto} é o melhor</h1>
      <Paragrafo>Teste</Paragrafo>
    </div>
  )
};

export default Fancy;