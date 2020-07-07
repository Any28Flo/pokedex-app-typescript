import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// @ts-ignore
import {  Section, Container, Heading } from 'react-bulma-components';
import Registration from "./components/Registration/Registration";
function App(): JSX.Element {
  return (
    <div className="App">
        <Section>
            <Container breakpoint="fullhd">
                    <Heading size={5} renderAs="p" className="is-danger">Pokemon app</Heading>
                <Registration/>
            </Container>
        </Section>
    </div>
  );
}

export default App;
