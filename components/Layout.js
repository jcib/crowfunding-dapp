// Aquí pondremos headers, footers que se reutilizarán en diversos componentes.
// Campaign List será child de Layout

import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head'; // mueve al header
import Header from './Header';

export default props => {
    return (
        <Container>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" 
                />
            </Head>

            <div>
                <Header />
                {props.children}
            </div>
        </Container>
    );



}