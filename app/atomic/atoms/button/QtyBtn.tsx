import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

interface Props {
    itemId: string;
    itemPrice: string;
    updateItem: (id: string, quantity: number) => void;
}

const QtyBtn = ({ itemId, itemPrice, updateItem }: Props) => {
    const unitPrice = parseFloat(itemPrice);
    const [currentVale, setCurrentValue] = useState(1);
    const [prevValue, setPrevValue] = useState(unitPrice);

    const handleIncrement = () => {
        setCurrentValue((prevCount) => {
            const newCount = prevCount + 1;
            setPrevValue(newCount * unitPrice);
            updateItem(itemId, newCount);
            return newCount;
        });
    };

    const handleDecrement = () => {
        setCurrentValue((prevCount) => {
            const newCount = Math.max(prevCount - 1, 1);
            setPrevValue(newCount * unitPrice);
            updateItem(itemId, newCount);
            return newCount;
        });
    };
    return (
        <button className="flex items-center border border-1 rounded-md px-[5px] gap-5 justify-center">
            <p>{currentVale}</p>
            <div className="flex flex-col m-0">
                <p onClick={handleIncrement}><FiChevronUp/></p>
                <p onClick={handleDecrement}><FiChevronDown/></p>
            </div>
        </button>
    )
}

export default QtyBtn
