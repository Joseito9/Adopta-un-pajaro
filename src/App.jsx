import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Header title="Adopta un pájaro" /> 
    <main className='gallery'>
      <MyCard image="https://images.pexels.com/photos/1430567/pexels-photo-1430567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto_Pajaro1" 
      nombre="Pitu"
      descripcion="Pájaro de muchos colores y con pico rojo"
      colorBadge="success" 
      textBadge="Pitu"/>
      <MyCard image="https://images.pexels.com/photos/531495/pexels-photo-531495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto_Pajaro2" 
      nombre="Coco"
      descripcion="Pájaro de color blanco y pico negro"
      colorBadge="dark" 
      textBadge="Coco"/>
      <MyCard image="https://images.pexels.com/photos/1438130/pexels-photo-1438130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto_Pajaro3" 
      nombre="Nesho"
      descripcion="Pájaro de color amarillo con pintas rojas"
      colorBadge="warning" 
      textBadge="Nesho"/>
      <MyCard image="https://images.pexels.com/photos/1427447/pexels-photo-1427447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto_Pajaro4" 
      nombre="Coco"
      descripcion="Guacamayo rojo con un pico muy grande"
      colorBadge="danger" 
      textBadge="Ash"/>
    </main>
    <Footer parrafo="Explora nuestra hermosa galeria de pajaros"/>
    </>
  )
}

export default App
