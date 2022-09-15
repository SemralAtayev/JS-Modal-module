 
  // modal(dataModal, dataClose, modalFormClass);
  function openModal(modalFormClassSelector, timerOpenModal) {
    const modalFormClass = document.querySelector(modalFormClassSelector);
    modalFormClass.classList.remove("showing");
    modalFormClass.classList.add("showing");
    document.querySelector("body").classList.add("overflow-hidden");
    // console.dir(timerOpenModal);
    if(timerOpenModal ){
      clearInterval(timerOpenModal);
    }    
  }
 
 // function to close modal use in different places
 function closeModal(modalFormClassSelector) {
  const modalFormClass = document.querySelector(modalFormClassSelector);

  modalFormClass.classList.remove("showing");
  document.querySelector("body").classList.remove("overflow-hidden");
}

  
function modal(dataModalTrigger, modalFormClassSelector, timerOpenModal) {
  // modal **********************************************

  const dataModal = document.querySelectorAll(dataModalTrigger),
    modalFormClass = document.querySelector(modalFormClassSelector),
    body = document.querySelector("body");



  // foreach all elements with data attribute data-modal
  dataModal.forEach((element) => {
    element.addEventListener("click", () => openModal(modalFormClassSelector, timerOpenModal));
  });


  //close modal on click on another place than modal
  modalFormClass.addEventListener("click", (elem) => {
    if (
      elem.target === modalFormClass ||
      elem.target.getAttribute("data-close") == ""
    ) {
      closeModal(modalFormClassSelector);
    }
  });

  // close modal on click on Escape button and check if modal has showing class
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalFormClass.classList.contains("showing")) {
      closeModal(modalFormClassSelector);
    }
  });



  // open modal after scroll to end of site

  function showModalOnScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalFormClassSelector, timerOpenModal);
      window.removeEventListener("scroll", showModalOnScroll);
    }
  }

  window.addEventListener("scroll", showModalOnScroll);
}


export default modal;
export {closeModal};
export {openModal};