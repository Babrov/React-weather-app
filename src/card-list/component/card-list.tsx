import { useDispatch, useSelector } from "react-redux";

import { removeCardAction } from "../store/card-list.actions";
import { cardListSelector } from "../store/card-list.selector";

import { CardItem } from "./card-item/card-item";
import css from "./card-list.module.scss";

export const CardList = () => {
  const dispatch = useDispatch();
  const { weatherList, isLoading } = useSelector(cardListSelector);

  const handleRemove = (id: number) => () => dispatch(removeCardAction(id));

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div className={css.root}>
        {weatherList.map((info) =>
          <CardItem
            key={info.id}
            weatherInfo={info}
            onRemove={handleRemove(info.id)}
          />
        )}
      </div>
    </>
  );
};


