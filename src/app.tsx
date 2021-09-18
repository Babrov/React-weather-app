import { CardList } from "./card-list";
import { AddWeatherForm } from "./add-weather-form/add-weather-form";
import "./styles/root.scss";

export const App = () => {
  return (
    <div className="app">
      <AddWeatherForm />
      <CardList />
    </div>
  );
};