import { toast, Flip, Slide } from "react-toastify";


export const successMessage = (message) => {
  toast.success(message, {
    className: "toast-container-success",
    transition: Slide,
    autoClose: 1500,
    closeOnClick: true,
    draggable: true,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    className: "toast-container-error",
    transition: Slide,
    autoClose: 3500,
    draggable: true,
    closeOnClick: true,
    position: "top-right",
  });
};
