import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {
    setCurrentIndexItem,
    setFromItem,
    setToItem,
} from "../../redux/actions/points";

import {PointsItem} from "../";

const Points: React.FC = () => {
    const dispatch = useDispatch();

    const {items, mapsPoints, currentIndexItem} = useTypedSelector(
        ({points}) => points
    );

    const onClickActiveItem = (index: number) => {
        dispatch(setCurrentIndexItem(index));
    };

	const onChangeFrom = (index: string) => {
        dispatch(setFromItem(parseInt(index)));
    };

    const onChangeTo = (index: string) => {
        dispatch(setToItem(parseInt(index)));
    };

    return (
        <div className="points">
            {items.map((item, index) => (
                <PointsItem
                    {...item}
                    active={currentIndexItem === index}
                    onClickActiveItem={() => onClickActiveItem(index)}
                    onChangeFrom={onChangeFrom}
                    onChangeTo={onChangeTo}
                    mapsPoints={mapsPoints}
                    key={`points-items-${index}`}
                />
            ))}
        </div>
    );
};

export default Points;
