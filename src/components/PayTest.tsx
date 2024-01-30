import { useState } from "react";
import PayButton from "./PayButton";

const PayTest = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true);
      };

    return (
        <div className="hotelDetailsPrice">
            <h1>Perfect for a 0 -night stay!</h1>
            <button onClick={handleClick}>Reserve or Book Now!</button>
            {openModal && <PayButton />}
        </div>
        );
}

export default PayTest;