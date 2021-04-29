import { modalbg, form, validForm } from "../elements";

class Modal {

  /**
   * launch modal form
   */
  static launchModal() {
    modalbg.style.display = "block";
  }

  /**
   * Close modal form
   * @param {Event} e 
   * @returns {void}
   */
  static closeModal(e) {
    if (e.target !== e.currentTarget) return;
    modalbg.style.display = "none";
    form.style.display = "block";
    validForm.style.display = "none";
  }

}

export default Modal;
