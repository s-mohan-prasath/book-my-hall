"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";


export default function BookingForm({ isOpen, onOpenChange, scrollBehavior, onCloseRequestModal }) {
    return (
        <Modal className='fixed z-10 md:top-72 max-xl top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto mt-2.5 bg-black  border border-seconadary-outline'
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={scrollBehavior}
            isDismissable={false}>

            <ModalContent className='bg-white p-5 max-h-[95%] max-w-[85%] rounded text-center '>
                {(onClose) => (
                    <>

                        <ModalBody className='modal-body'>
                            <form action="" className="shadow-custom w-64 sm-w-80  border-3 border-primary-dark md:w-[50%] bg-primary-sign my-[10vh] mx-auto rounded-md p-8">
                                <h1 className='text-primary mb-8 text-3xl font-bold'>Booking Form</h1>
                                <div className="flex flex-col  ">
                                    <label className="w-full mb-1 text-start font-semibold" htmlFor="ename">Event Name</label>
                                    <input className=' border-2 [border-color:#222222] p-3 w-full h-9 rounded bg-transparent text-seconadary focus:outline-none  text-s[15px] placeholder-black ' type="ename" id="ename" name="ename" required />
                                    <div className="text-center h-5 text-xl"></div>
                                </div>
                                <div className="flex flex-col  ">
                                    <label className="w-full mb-1 text-start font-semibold" htmlFor="date">Date</label>
                                    <input className=' border-2 [border-color:#222222] p-3 w-full h-9 rounded bg-transparent text-seconadary focus:outline-none  text-s[15px] placeholder-black ' type="date" id="date" name="date" required />
                                    <div className="text-center h-5 text-xl"></div>
                                </div>
                                <div className="flex flex-col  ">
                                    <label className="w-full mb-1 text-start font-semibold" htmlFor="stime">Start Time</label>
                                    <input className=' border-2 [border-color:#222222] p-3 w-full h-9 rounded bg-transparent text-seconadary focus:outline-none  text-s[15px] placeholder-black ' type="text" id="stime" name="stime" required />
                                    <div className="text-center h-5 text-xl"></div>
                                </div>
                                <div className="flex flex-col  ">
                                    <label className="w-full mb-1 text-start font-semibold" htmlFor="etime">End Time</label>
                                    <input className=' border-2 [border-color:#222222] p-3 w-full h-9 rounded bg-transparent text-seconadary focus:outline-none  text-s[15px] placeholder-black ' type="text" id="etime" name="etime" required />
                                    <div className="text-center h-5 text-xl"></div>
                                </div>
                                <div className="flex justify-center">
                                    <Button className='bg-primary border border-primary rounded mx-1 text-white py-1  mt-2' onPress={onCloseRequestModal}>
                                        Cancel
                                    </Button>
                                    <Button className='bg-primary border border-primary rounded mx-1 text-white py-1  mt-2' >
                                        Submit Request
                                    </Button>
                                </div>


                            </form >
                        </ModalBody>

                    </>
                )}
            </ModalContent>

        </Modal>
    )
}