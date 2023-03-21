import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import imagenCentral from "../components/01cocktail.png";

function Filtro() {
  const [tragos, setTragos] = useState([]);
  const [tragosFiltrados, setTragosFiltrados] = useState([]);
  const [search, setSearch] = useState("");
  const [tipoDeTrago, setTipoDeTrago] = useState("");

  useEffect(() => {
    if (tipoDeTrago === "con alcohol") {
      listarBebidasConAlcohol();
    }
    if (tipoDeTrago === "sin alcohol") {
      listarBebidasSinAlcohol();
    }
  }, [tipoDeTrago]);

  const listarBebidasConAlcohol = async () => {
    const url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const res = await fetch(url);
    const data = await res.json();
    setTragos(data.drinks);
    setTragosFiltrados(data.drinks);
  };

  const listarBebidasSinAlcohol = async () => {
    const url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    const res = await fetch(url);
    const data = await res.json();
    setTragos(data.drinks);
    setTragosFiltrados(data.drinks);
  };

  useEffect(() => {
    filtrarTragos();
  }, [search]);

  const filtrarTragos = () => {
    const tragosFiltrados = tragos.filter((trago) => {
      return trago.strDrink.toLowerCase().includes(search.toLowerCase());
    });
    setTragosFiltrados(tragosFiltrados);
  };

  // useEffect(() => {
  //   seleccionarTipoDeTrago();
  // }, [])

  const seleccionarTipoDeTrago = (e) => {
    setTipoDeTrago(e.target.value);
  };

  console.log(tragos);

  return (
    <>
      <div className="App">
        <Form.Select
          aria-label="Default select example"
          className="seleccion"
          value={tipoDeTrago}
          onChange={seleccionarTipoDeTrago}
        >
          <option value="">Seleccione el tipo de Cocktail</option>
          <option value="con alcohol">Cocktail con Alcohol</option>
          <option value="sin alcohol">Cocktail sin Alcohol</option>
        </Form.Select>
        <form className="formulario">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            id="busqueda"
            placeholder="Busca tu cocktail"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="lista">
          {tipoDeTrago ? (
            tragosFiltrados.map((trago) => (
              <li className="elementoLista">
                <a href="" className="enlace">
                  {trago.strDrink}{" "}
                </a>
                <img src={trago.strDrinkThumb} className="imagen" alt="" />
              </li>
            ))
          ) : (
            <img className="imagenCentral" src={imagenCentral} />
          )}{" "}
        </div>
      </div>
    </>
  );
}

export default Filtro;
