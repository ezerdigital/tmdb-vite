import s from "./Logo.module.css";

function Logo(props) {
  return (
    <div>
      <div className={s.container}>
        <img src={props.image} alt="logo" />
        <span className={s.title}>{props.title}</span>
      </div>
    </div>
  );
}

export default Logo;
