import ReactModal from 'summer-ui-react-modal';
import { useState } from 'react';
import './App.css';
import { Test1 } from './Test1';
import { Test2 } from './Test2';
import { Test3 } from './Test3';

function App() {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    // You can make an API call
    // Example: const Response = await axios.post()
    alert('This item has been deleted');
    setShow(false);
  };

  return (
    <main className='main'>
      <button onClick={() => setShow(true)}>Delete - Default style</button>
      <ReactModal
        setShowModal={setShow}
        showModal={show}
        message="Do you want to delete this item?"
        handleAction={handleDelete}
      />
      <Test1 />
      <Test2 />
      <Test3 />
    </main>
  );
}

export default App;
