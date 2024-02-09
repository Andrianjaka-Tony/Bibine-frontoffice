import { Dispatch, FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Search.scss";
import api from "../../../helpers/url";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  setSearchOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Search: FunctionComponent<Props> = ({ setSearchOpen }) => {
  const [brandsData, setBrandsData] = useState<any[]>([]);
  const [couleursData, setCouleursData] = useState<any[]>([]);
  const [modelesData, setModelesData] = useState<any[]>([]);
  const [typesData, setTypesData] = useState<any[]>([]);

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch(`${api}/bibine/actu/brands`);
      const responseData = await response.json();
      const { data } = responseData;
      setBrandsData(data);
    };

    const fetchColors = async () => {
      const response = await fetch(`${api}/bibine/actu/colors`);
      const responseData = await response.json();
      const { data } = responseData;
      setCouleursData(data);
    };

    const fetchModeles = async () => {
      const response = await fetch(`${api}/bibine/actu/models`);
      const responseData = await response.json();
      const { data } = responseData;
      setModelesData(data);
    };

    const fetchTypes = async () => {
      const response = await fetch(`${api}/bibine/actu/types`);
      const responseData = await response.json();
      const { data } = responseData;
      setTypesData(data);
    };

    const fetchAll = async () => {
      await fetchBrands();
      await fetchColors();
      await fetchModeles();
      await fetchTypes();
      setLoaded(true);
    };

    fetchAll();
  }, []);

  const getBrands = () => {
    const checkboxes = document.querySelectorAll(".brand-checkbox:checked");
    console.log(checkboxes);
  };

  const handleClick = () => {
    getBrands();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="search-box"
    >
      <AiOutlineClose
        onClick={() => {
          setSearchOpen(false);
        }}
        className="close-icon"
      />
      <h1 className="super-title">Recherche avancée</h1>
      {loaded && (
        <>
          <section className="section-list">
            <section className="search-section">
              <div className="title">Marques</div>
              <div className="items">
                <div className="checkbox">
                  <input
                    className="brand-checkbox"
                    type="checkbox"
                    id="brand-all-checkbox"
                    defaultChecked
                  />
                  <label htmlFor="brand-all-checkbox">Toutes</label>
                </div>
                {brandsData.map((brand) => (
                  <div key={brand.id} className="checkbox">
                    <input
                      className="brand-checkbox"
                      type="checkbox"
                      id={`brand-${brand.id}`}
                      value={brand.id}
                    />
                    <label htmlFor={`brand-${brand.id}`}>{brand.nom}</label>
                  </div>
                ))}
              </div>
            </section>
            <section className="search-section">
              <div className="title">Couleurs</div>
              <div className="items">
                <div className="checkbox">
                  <input
                    className="couleur-checkbox"
                    type="checkbox"
                    id="couleur-all-checkbox"
                    defaultChecked
                  />
                  <label htmlFor="couleur-all-checkbox">Toutes</label>
                </div>
                {couleursData.map((couleur) => (
                  <div key={couleur.id} className="checkbox">
                    <input
                      className="couleur-checkbox"
                      type="checkbox"
                      id={`couleur-${couleur.id}`}
                      value={couleur.id}
                    />
                    <label htmlFor={`couleur-${couleur.id}`}>
                      {couleur.nom}
                    </label>
                  </div>
                ))}
              </div>
            </section>
            <section className="search-section">
              <div className="title">Modeles</div>
              <div className="items">
                <div className="checkbox">
                  <input
                    className="modele-checkbox"
                    type="checkbox"
                    id="modele-all-checkbox"
                    defaultChecked
                  />
                  <label htmlFor="modele-all-checkbox">Toutes</label>
                </div>
                {modelesData.map((modele) => (
                  <div key={modele.id} className="checkbox">
                    <input
                      className="modele-checkbox"
                      type="checkbox"
                      id={`modele-${modele.id}`}
                      value={modele.id}
                    />
                    <label htmlFor={`modele-${modele.id}`}>{modele.nom}</label>
                  </div>
                ))}
              </div>
            </section>
            <section className="search-section">
              <div className="title">Types</div>
              <div className="items">
                <div className="checkbox">
                  <input
                    className="type-checkbox"
                    type="checkbox"
                    id="type-all-checkbox"
                    defaultChecked
                  />
                  <label htmlFor="type-all-checkbox">Tous</label>
                </div>
                {typesData.map((type) => (
                  <div key={type.id} className="checkbox">
                    <input
                      className="type-checkbox"
                      type="checkbox"
                      id={`type-${type.id}`}
                      value={type.id}
                    />
                    <label htmlFor={`type-${type.id}`}>{type.nom}</label>
                  </div>
                ))}
              </div>
            </section>
          </section>
          <div className="input-section">
            <div className="title">Date de publication</div>
            <div className="inputs">
              <div className="input">
                <label htmlFor="date-debut-input">Date debut</label>
                <input type="date" name="date-debut" id="date-debut-input" />
              </div>
              <div className="input">
                <label htmlFor="date-fin-input">Date fin</label>
                <input type="date" name="date-fin" id="date-fin-input" />
              </div>
            </div>
          </div>
          <div className="input-section">
            <div className="title">Etat de la voiture</div>
            <div className="inputs">
              <div className="input">
                <label htmlFor="etat-min-input">Minimum</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="etat-min"
                  id="etat-min"
                />
              </div>
              <div className="input">
                <label htmlFor="etat-max-input">Maximum</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="etat-max"
                  id="etat-max"
                />
              </div>
            </div>
          </div>
          <div className="input-section">
            <div className="title">Intervalle de montant</div>
            <div className="inputs">
              <div className="input">
                <label htmlFor="montant-min-input">Minimum</label>
                <input type="number" name="montant-min" id="montant-min" />
              </div>
              <div className="input">
                <label htmlFor="montant-max-input">Maximum</label>
                <input type="number" name="montant-max" id="montant-max" />
              </div>
            </div>
          </div>
          <button onClick={handleClick} type="button" className="button">
            Valider
          </button>
        </>
      )}
    </motion.div>
  );
};

export default Search;
