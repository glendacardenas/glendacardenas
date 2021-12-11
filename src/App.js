import "./css/estilos.css";
import Header from "./components/Header";
import NavSide from "./components/NavSide";
import Main from "./components/Main";



export default function App() {
  return (
    <div className="contenedor">
        <div className="aplicacion"> </div>
          <Header />
          <div className="principal">
              <NavSide/>
              <Main/>

          </div>

        <div className="boleta"></div>
    </div>
    
  );
}
