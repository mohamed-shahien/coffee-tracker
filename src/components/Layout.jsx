import React, { useState } from "react";
import Modal from "./Modal";
import Authentication from "./Authentication";

const Layout = (props) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>

      <button onClick={() => setIsModalOpen(true)} className="sign-up">
        <p>Sign up free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );
  const footer = (
    <footer>
      <p><span className="text-gradient">Caffiend</span> was made by<a target="_blank" href="https://www.smoljames.com">Smoljames</a><br />using the<a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a>design library.<br />Check out the project on<a atarget="_black"href="https://www.github.com/jamezmca/reactjs-full-course">GitHub</a>!</p>
    </footer>
  );

  return (
    <>
    {isModalOpen && (
      <Modal handlwCloseModal={() => setIsModalOpen(false)}>
        <Authentication/>
      </Modal>
    )}
    
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
