import ReactModal from 'summer-ui-react-modal';
import { useState } from 'react';
import './Test3.css';

export const Test3 = () => {
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    // You can make an API call
    // Example: const Response = await axios.post()
    alert(`Your reservation has been cancelled.`);
    setShow(false);
  };

  return (
    <>
      <button onClick={() => setShow(true)}>
        Delete - Custom button text and styles
      </button>
      <ReactModal
        setShowModal={setShow}
        showModal={show}
        message="Table reserved for 4 on March 25 at 6 pm."
        handleAction={handleCancel}
        closeButtonStyle="custom-close-btn"
        actionButtonStyle="custom-action-btn"
        closeButtonText="OK"
        actionButtonText="Cancel the reservation"
      />
    </>
  );
};
