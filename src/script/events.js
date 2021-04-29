import * as elements from "./elements";
import { Nav, Form, Modal } from "./functions";

elements.navIcon.addEventListener("click", Nav.editNav);

elements.modalBtn.forEach((btn) => btn.addEventListener("click", Modal.launchModal));
elements.closeElement.forEach(el => el.addEventListener("click", Modal.closeModal));

elements.formData.forEach((el) => el.addEventListener("blur", Form.showValidation));
elements.form.addEventListener("submit", Form.validate);
