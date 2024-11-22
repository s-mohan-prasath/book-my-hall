
'use client';
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import '../styles/venueDetails.css';
import { MdEventSeat } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { MdOutlineSevereCold } from "react-icons/md";
import { LuProjector } from "react-icons/lu";

export default function VenueDetails() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    return (
        <div className='venue-details'>
            <h1>Auditorium</h1>
            <div className="img-container">
                <div className="box large"><img src='images/large.jpg' alt='Venue Images' /></div>
                <div className="box"><img src='images/img1.jpg' alt='Venue Images' /></div>
                <div className="box"><img src='images/img2.jpg' alt='Venue Images' /></div>
                <div className="box"><img src='images/img3.jpg' alt='Venue Images' /></div>
                <div className="box seemore"><img src='images/img6.jpg' alt='Venue Images' onClick={onOpen} /> <span>See More</span> </div>
            </div>
            <div className='details'>
                <h2>Features</h2>
            </div>
            <div className='details list'>
                <div className='det'><MdEventSeat size={60} style={{ color: "#cf1839" }} /><p className='title'>Seating Capacity</p><p id='seat-count'>500</p></div>
                <div className='det'><FaBuilding size={60} style={{ color: "#cf1839" }} /><p className='title'>Block Name</p><p id='block-name'>F Block</p></div>
                <div className='det'><PiMicrophoneStageFill size={60} style={{ color: "#cf1839" }} /><p className='title'>Podium</p><p id='podium'>Available</p></div>
                <div className='det'><MdOutlineSevereCold size={60} style={{ color: "#cf1839" }} /><p className='title'>AC / Non AC</p><p id='ac'>Available</p></div>
                <div className='det'><LuProjector size={60} style={{ color: "#cf1839" }} /><p className='title'>Projector</p><p id='projector'>Available</p></div>
            </div>
            <div className='event-calendar'>Event calendar</div>
            <div className='btn'>
                <button>REQUEST FOR BOOKING </button>
            </div>

            <Modal className='modal' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent className='modal-content'>
                    {(onClose) => (
                        <>
                            <ModalHeader >Images</ModalHeader>
                            <ModalBody className='modal-body'>
                                <div className="modal-img">
                                    <img src="images/img6.jpg" />
                                    <img src="images/img5.jpg" />
                                    <img src="images/img4.jpg" />
                                    <img src="images/img7.jpg" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='modal-close' onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>


        </div>

    );
}
