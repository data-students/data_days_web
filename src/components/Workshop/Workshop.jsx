import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import "./Workshop.css";

const level_to_color = (level) => {
    if (level === "Beginner") {
        return "#dcd4b1";
    }
    return "#d3c3e9";
};

const Workshop = ({ title, level, kind, small_description, description, date, time, place }) => {
    const [isOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div className="card profile workshop">
                <div className="card-body profile-title p-0">
                    <div className="workshop-title p-3 rounded-top" style={{ "textAlign": "center" }}>
                        <h6>{title}</h6>
                    </div>
                    <div className="workshop-content p-3 rounded-bottom" style={{ backgroundColor: level_to_color(`${level}`) }}>
                        <div style={{ height: "80px", textAlign: "justify", textJustify: "inter-word", fontSize: "13px" }}>
                            <p>{small_description}</p>
                        </div>
                        <div style={{ fontSize: "13px", paddingBottom: "10px", paddingTop: "7px" }}>
                            <span>Nivell: {level}</span><span style={{ float: "right" }}>Data: {date}</span>
                        </div>
                        <a href="#" className="btn btn-smooth-transition btn-orange" onClick={() => setModalOpen(true)} style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "40%", fontSize: "14px" }}>Saber-ne més</a>
                        {/* <dialog id="modal" className="modal">
                            <button id="closeModal" className="modal-close-btn">Close</button>
                            <p>hello</p>
                        </dialog> */}
                        <Modal
                            hasCloseBtn={true}
                            isOpen={isOpen}
                            onClose={closeModal}>
                            <Modal.Title>{title}</Modal.Title>
                            <Modal.Body>
                                {description}
                                <p></p>
                                <p>Temàtica: {kind}</p>
                                <p>Data: {date}</p>
                                <p>Hora: {time}</p>
                                <p>Lloc: {place}</p>
                                <p>Nivell: {level} </p>
                            </Modal.Body>
                        </Modal>
                    </div>

                </div>
            </div>
        </>
    );
};
Workshop.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    small_description: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
};


export default Workshop;