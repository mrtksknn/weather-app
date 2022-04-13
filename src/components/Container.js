import React from 'react';
import Body from "./Body";
import Header from "./Header";

const Container = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Header />
      <Body />
    </div>
  )
}

export default Container