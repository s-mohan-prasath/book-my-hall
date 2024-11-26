'use client';
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { MdEventSeat } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { MdOutlineSevereCold } from "react-icons/md";
import { LuProjector } from "react-icons/lu";

export default function VenueDetails() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    return (
        <div className='mx-16 my-8'>
            <h1 className="text-primary text-3xl font-bold py-5 flex justify-center lg:justify-start">Auditorium</h1>
            <div className="flex flex-wrap justify-center lg:grid grid-cols-[1.8fr,1fr,1fr] grid-rows-[200px,200px] gap-5">
                <div className="box row-span-2">
                    <img className="w-full h-full object-cover rounded" src='images/large.jpg' alt='Venue Images' />
                </div>
                <div className="box">
                    <img className="w-full h-full object-cover rounded" src='images/img1.jpg' alt='Venue Images' />
                </div>
                <div className="box">
                    <img className="w-full h-full object-cover rounded" src='images/img2.jpg' alt='Venue Images' />
                </div>
                <div className="box">
                    <img className="w-full h-full object-cover rounded" src='images/img3.jpg' alt='Venue Images' />
                </div>
                <div className="box flex justify-center items-center relative" onClick={onOpen} >
                    <img className="w-full h-full object-cover rounded brightness-50" src='images/img6.jpg' alt='Venue Images' />
                    <span className="absolute text-lg text-white cursor-pointer">See More</span> </div>
            </div>
            <div className=' border border-seconadary-outline rounded-sm mt-5 px-8'>
                <h2 className="p-3 text-2xl font-bold">Features</h2>
            </div>
            <div className='border border-seconadary-outline rounded-sm mt-5 px-8 flex justify-between items-center flex-wrap'>
                <div className='my-8 p-1 flex flex-col justify-center items-center w-64 text-seconadary-outline text-lg'><MdEventSeat size={60} style={{ color: "#cf1839" }} />
                    <p className='text-black text-lg font-bold mt-2'>Seating Capacity</p>
                    <p id='seat-count'>500</p></div>
                <div className='my-8 p-1 flex flex-col justify-center items-center w-64 text-seconadary-outline text-lg'><FaBuilding size={60} style={{ color: "#cf1839" }} />
                    <p className='text-black text-lg font-bold mt-2'>Block Name</p>
                    <p id='block-name'>F Block</p></div>
                <div className='my-8 p-1 flex flex-col justify-center items-center w-64 text-seconadary-outline text-lg'><PiMicrophoneStageFill size={60} style={{ color: "#cf1839" }} />
                    <p className='text-black text-lg font-bold mt-2'>Podium</p>
                    <p id='podium'>Available</p></div>
                <div className='my-8 p-1 flex flex-col justify-center items-center w-64 text-seconadary-outline text-lg'><MdOutlineSevereCold size={60} style={{ color: "#cf1839" }} />
                    <p className='text-black text-lg font-bold mt-2'>AC / Non AC</p>
                    <p id='ac'>Available</p></div>
                <div className='my-8 p-1 flex flex-col justify-center items-center w-64 text-seconadary-outline text-lg'><LuProjector size={60} style={{ color: "#cf1839" }} />
                    <p className='text-black text-lg font-bold mt-2'>Projector</p>
                    <p id='projector'>Available</p></div>
            </div>
            <div className="flex flex-row justify-end m-4"><button className='bg-primary text-white border border-primary p-2 rounded'>REQUEST FOR BOOKING </button></div>
            <div className='bg-primary w-64 lg:w-96 h-64 my-9 mx-auto rounded flex justify-center items-center text-white'>Event calendar</div>

            <Modal className='fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mt-2.5 bg-black  border border-seconadary-outline' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent className='bg-white p-5 h-[80%] w-[70%] rounded text-center overflow-x-auto overflow-y-scroll'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-lg font-bold text-center mt-5 pb-0">Images</ModalHeader>
                            <ModalBody className='modal-body'>
                                <div className="flex flex-col justify-center gap-6 p-4 w-auto">
                                    <img className="rounded" src="images/img6.jpg" />
                                    <img className="rounded" src="images/img5.jpg" />
                                    <img className="rounded" src="images/img4.jpg" />
                                    <img className="rounded" src="images/img7.jpg" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='bg-primary-light border border-primary rounded mx-auto text-white py-1 px-5 mt-2' onPress={onClose}>
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