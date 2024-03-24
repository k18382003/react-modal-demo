import ReactModal from 'summer-ui-react-modal';
import { useState } from 'react';

export const Test2 = () => {
  const [show, setShow] = useState(false);
  const [param, setParam] = useState();

  const handleDelete = (id) => {
    // You can make an API call
    // Example: const Response = await axios.post()
    alert(`The item with id: ${id} has been deleted`);
    setShow(false);
  };

  return (
    <>
      <div>
        <button onClick={() => setShow(true)}>
          Delete - Function with param
        </button>
        <input
          placeholder="enter a param value"
          value={param}
          onChange={(e) => setParam(e.target.value)}
        />
      </div>
      <ReactModal
        setShowModal={setShow}
        showModal={show}
        message="Do you want to delete this item?"
        handleAction={() => handleDelete(param)}
      />
    </>
  );
};
