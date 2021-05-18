import { form, validForm } from "../elements";

const MIN_AGE = 18;


class Form {

  static errorMessages = {
    first: "Minimum 2 caractères dont une lettre sont requis",
    last: "Minimum 2 caractères dont une lettre sont requis",
    email: "Format non valide. Ex: exemple@gameone.com",
    birthdate: "Format non valide. Ex: 01/01/2000",
    quantity: "Veuillez entrer une valeur entre 0 et 99",
    location: "Veuillez séléctionner une ville",
    checkbox1: "Veuillez accepter les conditions d'utilisation",
  }

  /**
   * Set data-error-visible
   * @static
   * @param {HTMLInputElement} input
   */
  static toggleDataError(input){
    let visible = false
    if(!input.value) {
      input.parentElement.setAttribute("data-error", "Ce champs est requis")
    } else {
      input.parentElement.setAttribute("data-error", Form.errorMessages[input.name]);
    }
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
