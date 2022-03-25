import ReactDom from "react-dom";
import '../../css/dmfr.css';
// import "./Modal.scss";

const Modal = ({
  show,
  close,
  title,
  btn1Text,
  btn2Text,
  btnCount,
  children,
}) => {

  return ReactDom.createPortal(
    <>
    
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()} >
          <header className="modal_header">
            <h2 className="modal_header-title"> {title} </h2>
          </header>
          <main className="modal_content"> {children} </main>
          <footer className="modal_footer">
            {btnCount === 2 ? (
              <div>
                <button className="modal-close" onClick={() => close()}>
                 {btn1Text}
                </button>

                <button className="submit">{btn2Text}</button>
              </div>
            ) : (
              <button className="modal-close" onClick={() => close()}>
                {btn1Text}
              </button>
            )}
          </footer>
        </div>
      </div>
    </>,

    document.getElementById("modal")
  );
};

export default Modal;
