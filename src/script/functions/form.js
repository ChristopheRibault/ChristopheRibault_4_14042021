import { form, validForm } from "../elements";

class Form {

  /**
   * Set data-error-visible
   * @static
   * @param {HTMLInputElement} input
   */
  static toggleDataError(input){
    input.parentElement.setAttribute("data-error-visible", !input.checkValidity())
  }

  /**
   * formData validation
   * @static
   * @param {Event} e 
   */
  static showValidation(e) {
    Form.toggleDataError(e.target)
  }

  /**
   * Submit form
   * @param {Event} e 
   * @returns {boolean}
   */
  static validate(e) {
    e.preventDefault();

    let formIsValid = true;

    for (const input of form.elements) {
      Form.toggleDataError(input);
      if (!input.checkValidity()) {
        formIsValid = false;
      }
    }

    if (formIsValid) {
      form.reset();
      form.style.display = "none";
      validForm.style.display = "block";

      return true;
    }

    return false;
  }

};

export default Form;
