import {Point, MapsPoint} from "../../models/IPoint";

export interface PointsState {
    items: Point[];

    mapsPoints: MapsPoint[];

    currentIndexItem: number;
}

export enum PointsActionTypes {
    SET_CURRENT_INDEX_ITEM = "SET_CURRENT_INDEX_ITEM",
    SET_FROM_ITEM = "SET_FROM_ITEM",
    SET_TO_ITEM = "SET_TO_ITEM",
}

interface setCurrentIndexItem {
    type: PointsActionTypes.SET_CURRENT_INDEX_ITEM;
    payload: number;
}

interface setFromItem {
    type: PointsActionTypes.SET_FROM_ITEM;
    payload: number;
}

interface setToItem {
    type: PointsActionTypes.SET_TO_ITEM;
    payload: number;
}

export type PointsAction = setCurrentIndexItem | setFromItem | setToItem;
