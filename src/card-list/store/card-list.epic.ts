import { catchError, concatMap, map, Observable, switchMap } from "rxjs";
import { Action } from "ts-action";
import { ofType, toPayload } from "ts-action-operators";
import {
  getLocationAction,
  getLocationFailedAction,
  getLocationSuccessAction,
  getWeatherAction,
  getWeatherByLocationAction,
  getWeatherFailedAction,
  getWeatherSuccessAction
} from "./card-list.actions";
import { getWeatherByCoordsRequest$, getWeatherRequest$ } from "../../request/get-weather.request";
import { CoordinatesModel } from "../../models";

const getLocation = (): Observable<CoordinatesModel> => new Observable(observer => {
  if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        observer.next({ lat: position.coords.latitude, lon: position.coords.longitude });
        observer.complete();
      },
      (error) => observer.error(error)
    );
  } else {
    observer.error("Unsupported Browser");
  }
});

const getWeatherEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getWeatherAction),
    toPayload(),
    switchMap((cityName) => getWeatherRequest$(cityName).pipe(
      map(res => getWeatherSuccessAction(res)),
      catchError(error => [getWeatherFailedAction(error.message)])
    ))
  );


const getCoordsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getLocationAction),
    switchMap(() => getLocation().pipe(
      concatMap(res => [getLocationSuccessAction(res), getWeatherByLocationAction(res)]),
      catchError(error => [getLocationFailedAction(error.message)]))
    )
  );

const getWeatherByLocationEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getWeatherByLocationAction),
    toPayload(),
    switchMap((res) => getWeatherByCoordsRequest$(res).pipe(
      map(res => getWeatherSuccessAction(res)),
      catchError(error => [getWeatherFailedAction(error.message)])
    ))
  );

export const cardListEpics = [getWeatherEpic, getCoordsEpic, getWeatherByLocationEpic];

