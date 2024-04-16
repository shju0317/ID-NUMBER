import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import Dialog from './Dialog';
import { useRef, useState } from 'react';

function App() {
  const opennerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    opennerRef.current.focus();
  };

  return (
    <div className="App">
      <motion.button
        type="button"
        ref={opennerRef}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleOpen}
      >
        OPEN
      </motion.button>

      <AnimatePresence>
        {open && (
          <Dialog type="rotate" onClose={handleClose}>
            <Dialog.Head>
              <h3 className="DialogHeadline">MODAL DIALOG</h3>
            </Dialog.Head>
            <Dialog.Body>
              <div className="magazine">
                <a
                  href="https://brandpad.io/?utm_source=si&utm_medium=si-web&utm_campaign=newstandard"
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  The standard for brands.
                  <br />
                  From guidelines to rollout.
                </a>
                <img src="/cover.jpg" alt="" />
              </div>
            </Dialog.Body>
            <Dialog.Foot>
              <button type="button">CONFIRM</button>
              <button type="button" onClick={handleClose}>
                CANCEL
              </button>
            </Dialog.Foot>
            <Dialog.CloseButton onClose={handleClose} />
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
