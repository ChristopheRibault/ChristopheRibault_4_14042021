import { form, validForm } from "../elements";

const MIN_AGE = 18;

class Form {

  /**
   * Set data-error-visible
   * @static
   * @param {HTMLInputElement} input
   */
  static toggleDataError(input){
    let visible = false
    // If input is birthdate, date is valid but age is too young, change data-error message
    if (input.name === "birthdate" && input.checkValidity() && !Form.ageIsValid(input.value)) {
      visible = true;
      input.parentElement.setAttribute("data-error", `Vous devez avoir au moins ${MIN_AGE} ans pour participer.`)
    } else {
      // Set data-error visible if input value is invalid
      visible = !input.checkValidity()
    }
    input.parentElement.setAttribute("data-error-visible", visible)
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
   * check if age is valid
   * @static
   * @param {Date} birthdate 
   * @returns {boolean}
   */
  static ageIsValid(birthdate) {
    const now = moment();
    if (now.subtract(MIN_AGE, 'years') < moment(birthdate)) {
      return false;
    }
    return true;
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
