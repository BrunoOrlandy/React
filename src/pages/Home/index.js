import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

// wrapper pois ele é um agrupador / container
const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"AAAAAAAAAAAAAAAAAA"}
      />
      
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}> 
      </Carousel>

      <Footer/>
    </AppWrapper>
    
  );
}

export default Home;