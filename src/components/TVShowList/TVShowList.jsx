import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./TVShowList.module.css";

const TVShowList = ({ onClickItem, tvShowList }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow, i) => {
          return (
            <span key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClick={onClickItem}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TVShowList;
