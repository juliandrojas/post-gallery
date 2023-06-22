import React from 'react'
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import CardStructure from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Title />
        <CardStructure />
    </>
)
