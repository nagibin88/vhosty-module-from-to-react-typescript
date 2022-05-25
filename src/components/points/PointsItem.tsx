import React from "react";
import {Select} from "antd";
import {Point, MapsPoint} from "../../models/IPoint";

const {Option} = Select;

interface PointsItemProps extends Point {
    active: boolean;
    onClickActiveItem: () => void;
    onChangeFrom: (index: string) => void;
    onChangeTo: (index: string) => void;
    mapsPoints: MapsPoint[];
}

const PointsItem: React.FC<PointsItemProps> = ({
    title,
    time,
    indexFrom,
    indexTo,
    active,
    onClickActiveItem,
    onChangeFrom,
    onChangeTo,
    mapsPoints,
}) => {
    return (
        <div
            className={`points-item ${active ? "active" : ""}`}
            onClick={onClickActiveItem}
        >
            <div className="points-item-text">
                <h3 className="points-item-text__title">{title}</h3>
                <p className="points-item-text__time">{time}</p>
            </div>
            <div className="points-item-selects">
                <div className="points-item-select">
                    <p className="points-item-select__title">Погрузка:</p>
                    <Select
                        defaultValue={mapsPoints[indexFrom].title}
                        style={{width: "100%"}}
                        onChange={onChangeFrom}
                    >
                        {mapsPoints.map((item, index) => (
                            <Option
                                value={index}
                                key={`points-item-select-1-${index}`}
                                disabled={index === indexTo}
                            >
                                {item.title}
                            </Option>
                        ))}
                    </Select>
                </div>

                <div className="points-item-select">
                    <p className="points-item-select__title">Отгрузка:</p>
                    <Select
                        defaultValue={mapsPoints[indexTo].title}
                        style={{width: "100%"}}
                        onChange={onChangeTo}
                    >
                        {mapsPoints.map((item, index) => (
                            <Option
                                value={index}
                                key={`points-item-select-2-${index}`}
                                disabled={index === indexFrom}
                            >
                                {item.title}
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default PointsItem;
