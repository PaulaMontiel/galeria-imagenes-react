import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './componentes/Header';
import {MyCard} from './componentes/Card';
import Row from 'react-bootstrap/Row';
import {Footer} from './componentes/Footer';

function App(){
  return (
    <div className='container-fluid d-flex flex-column'>
        <Header/>
        <div className='container-fluid p-4'>
          <Row sm={1} md={6} lg={4} className='gap-4 roww'>
              <MyCard src='https://moevarua.com/wp-content/uploads/2017/12/encabezado-diuca.jpg' title='Diuca' description='La diuca común​ o simplemente diuca ​ es una especie de ave paseriforme de la familia Thraupidae, en la actualidad la única perteneciente género Diuca. Es nativa del Cono Sur de América del Sur.'/>
              <MyCard src='https://www.avesdechile.cl/0jpgn/050jt1.jpg' title='Cisne de cuello negro' description='El cisne de cuello negro es el representante más pequeño del género Cygnus. Habita en las aguas continentales y, con menor frecuencia, en las salobres cercanas a la costa de la mitad meridional de Sudamérica. '/>
              <MyCard src='https://www.avesdechile.cl/0jpgn/033gc1.jpg' title='Come Tocino' description='El cometocino de Gay, ​ yal cabeza gris o fringillo andino, ​ es una especie de ave passeriforme perteneciente al género Phrygilus de la familia Thraupidae. Es nativo de la región andina y adyacencias en Chile y Argentina'/>
              <MyCard src='https://www.redobservadores.cl/wp-content/uploads/2019/01/Condor-Pio-Marshall-1-777x518.jpg' title='Cóndor' description='El cóndor andino, también cóndor de los Cerros, cóndor de los Andes, o simplemente cóndor ​ es una especie de ave de la familia Cathartidae que habita en América del Sur.'/>
              <MyCard src='https://www.redobservadores.cl/wp-content/uploads/2018/09/Dise%C3%B1o-sin-t%C3%ADtulo-371x205.png' title='Queltehue' description='Se distribuye por Sudamérica. En Chile, la subespecie chilensis habita desde Antofagasta hasta la región de Los Lagos en ambientes abiertos, tanto antrópicos como naturales.'/>
              <MyCard src='https://www.redobservadores.cl/wp-content/uploads/2020/04/Dise%C3%B1o-sin-t%C3%ADtulo-4-1180x652.png' title='Aguilucho chico' description='	Especie migratoria.Desde Venezuela hasta PN Los Glaciares, en el sur- oeste de Argentina. En Chile durante la primavera y verano austral, y desde Valparaíso hasta la región de Aysén.'/>
              <MyCard src='https://www.redobservadores.cl/wp-content/uploads/2021/02/Carpinteros-negros-Pablo-Gutierrez-1180x652.png' title='Carpintero Negro' description='Es un habitante endémico de los bosques templados y subantárticos de Chile y Argentina. En nuestro país desde la región de O’higgins (Cordillera de San Fernando) a la región de Magallanes (Islas al sur del canal Beagle).'/>
              <MyCard src='https://www.redobservadores.cl/wp-content/uploads/2021/04/Picaflor-de-Juan-Fern%C3%A1ndez-Hector-Guti%C3%A9rrez-1180x652.png' title='Picaflor de Juan Fernández' description='Especie endémica del Archipiélago de Juan Fernández, específicamente de la isla Robinson Crusoe. Habita principalmente en bosques densos conformados por lumas, naranjillos y canelos.'/>
              <MyCard src='https://www.avesdechile.cl/0jpgn/110gde.jpg' title='Pingüino de Magallanes' description='Se distribuye desde Cabo de Hornos y Tierra del Fuego hasta Valparaíso por el norte. Se alimenta de peces como Sardina fueguina, Sardina del pacífico y Anchoveta aunque también puede depredar sobre calamares.'/>

          </Row>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
