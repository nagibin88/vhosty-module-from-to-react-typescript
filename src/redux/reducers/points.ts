import {PointsState, PointsAction, PointsActionTypes} from "../types/IPoints";

const initialState: PointsState = {
    items: [
        {
            title: "Заявка #1",
            time: "Завтра, 14:30",

            indexFrom: 0,
            indexTo: 1,
        },
        {
            title: "Заявка #2",
            time: "Суббота, 11:00",

            indexFrom: 0,
            indexTo: 1,
        },
        {
            title: "Заявка #3",
            time: "Четверг, 19:30",

            indexFrom: 0,
            indexTo: 1,
        },
    ],

    mapsPoints: [
        {
            title: "Москва, Арбат",
            position: [55.7493833, 37.5911519],
        },
        {
            title: "Москва, Никольская",
            position: [55.7569443, 37.6200544],
        },
        {
            title: "Москва, ВДНХ",
            position: [55.8206647, 37.5944134],
        },
        {
            title: "Москва, Лубянка",
            position: [55.7597911, 37.6259077],
        },
    ],

    currentIndexItem: 0,
};

const points = (state = initialState, action: PointsAction) => {
    if (action.type === PointsActionTypes.SET_CURRENT_INDEX_ITEM) {
        return {
            ...state,
            currentIndexItem: action.payload,
        };
    }

    if (action.type === PointsActionTypes.SET_FROM_ITEM) {
        state.items[state.currentIndexItem].indexFrom = action.payload;

        return {
            ...state,
        };
    }

    if (action.type === PointsActionTypes.SET_TO_ITEM) {
        state.items[state.currentIndexItem].indexTo = action.payload;

        return {
            ...state,
        };
    }

    return state;
};

export default points;
