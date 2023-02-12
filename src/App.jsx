// react
import { useState, useEffect, useCallback, useMemo } from "react";
// componentes ordenados por orden de inyeccion
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowList from "./components/TVShowList/TVShowList";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "../config";
// recursos estaticos
import logoImg from "./assets/images/logo.png";
// estilos
import s from "./App.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  //NORMAL VERSION
  async function fetch_Populars() {
    // solicito los datos a TVShowAPI
    // - no es necesario instanciar la clase (TVShowAPI) debido al atrivbuto 'static del metodo'
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    // verifico que existan datos a visualizar
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  // USECALLBACK VERSION
  // const fetch_Populars = useCallback(async () => {
  //   const popularTVShowList = await TVShowAPI.fetchPopulars();
  //   if (popularTVShowList.length > 0) {
  //     setCurrentTVShow(popularTVShowList[0]);
  //   }
  // }, [currentTVShow]);

  // USEMEMO VERSION

  async function fetchByTitle(title) {
    const searchResponse = await TVShowAPI.fetchByTitle(title);
    if (searchResponse && searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  async function fetchRecommendentions(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  // es necesario para controlar la serie
  // que actualmente es la mas popular
  useEffect(() => {
    fetch_Populars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendentions(currentTVShow.id);
    }
  }, [currentTVShow]);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.200),rgba(0,0,0,0.200)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo title="WatchShows" image={logoImg} />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
