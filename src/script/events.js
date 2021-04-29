import * as elements from "./elements";
import * as functions from "./functions";

elements.navIcon.addEventListener("click", functions.Nav.editNav);

elements.modalBtn.forEach((btn) => btn.addEventListener("click", functions.Modal.launchModal));
elements.closeElement.forEach(el => el.addEventListener("click", functions.Modal.closeModal));

elements.formData.forEach((el) => el.addEventListener("blur", functions.Form.showValidation));
elements.form.addEventListener("submit", functions.Form.validate);
