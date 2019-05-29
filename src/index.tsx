import * as React from 'react';

interface IFancy {
    texto: string;
}

export const Fancy: React.FunctionComponent<IFancy> = (props) => {
    return (
        <h1>{props.texto} é o melhor</h1>
    )
};
