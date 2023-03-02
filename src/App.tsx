import React from 'react';
import logo from './logo.svg';
import './App.css';
import Strawhat from './Strawhat';

function App() {

  return (
    <div className="App">
      <Strawhat name={"Luffy"}nationality={"Mexican"}colors={"LuffyColors"} />
      <Strawhat name={"Zoro"}nationality={"Japanese"}colors={"ZoroColors"}/>
      <Strawhat name={"Sanji"}nationality={"American"}colors={"SanjiColors"}/>
        </div>
  );
}

export default App;
