import {PointsActionTypes} from "../types/IPoints";

export const setCurrentIndexItem = (index: number) => ({
    type: PointsActionTypes.SET_CURRENT_INDEX_ITEM,
    payload: index,
});

export const setFromItem = (indexFrom: number) => ({
    type: PointsActionTypes.SET_FROM_ITEM,
    payload: indexFrom,
});

export const setToItem = (indexTo: number) => ({
    type: PointsActionTypes.SET_TO_ITEM,
    payload: indexTo,
});
