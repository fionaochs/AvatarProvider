import React from 'react';
import Header from '../Header/Header';
import CharactersView from '../../Containers/CharactersViewer';
import { EarthFireProvider } from '../../Hooks/EarthFireProvider';

export default function App() {
  return (
    <>
      <EarthFireProvider>
        <Header/>
        <CharactersView/>
      </EarthFireProvider>
    </>
  );
}

