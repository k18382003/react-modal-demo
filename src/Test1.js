import ReactModal from 'summer-ui-react-modal';
import { useState } from 'react';
import './Test1.css';

export const Test1 = () => {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    // You can make an API call
    // Example: const Response = await axios.post()
    alert('This item has been deleted');
    setShow(false);
  };

  return (
    <>
      <button onClick={() => setShow(true)}>
        Delete - Custom Message style
      </button>
      <ReactModal
        setShowModal={setShow}
        showModal={show}
        message="Do you want to delete this item?"
        handleAction={handleDelete}
        messageStyle="custom-msg"
      />
    </>
  );
};
