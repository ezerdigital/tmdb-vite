import { SMALL_IMG_COVER_BASE_URL } from "../../../config";
import s from "./TVShowListItem.module.css";

const TVShowListItem = ({ tvShow, onClick }) => {
  const MAX_TITLE_CHAR = 20;
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        className={s.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default TVShowListItem;
