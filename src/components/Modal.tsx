"use client"
import { createPortal } from "react-dom";
import { ModalProps } from "@/types/Modal";
import { IoCloseOutline } from "react-icons/io5";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white p-6 shadow-lg w-[95%] lg:w-[400px] h-fit flex flex-col gap-3 items-center justify-center rounded-lg">
                <button
                    type="submit"
                    onClick={onClose}
                    className=" text-[#18181B] ml-auto text-[27px]"
                >
                    <IoCloseOutline />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};