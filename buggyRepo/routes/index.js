import { stringConstants } from "../app/common/constants";
import ProfessionalCollection from "../app/modules/profileDetails";
//import ComCapCollection from "../app/modules/commercialCapability";
//import bankDetailCollection from "../app/modules/bankDetails";
import * as ValidationManger from "../middleware/validation";
module.exports = (app) => {
  
 
  app.get("/", (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));
  app.post(
    "/v0/professional/add-professional",
    ValidationManger.validateProfessional,
    new ProfessionalCollection().createProfessional
  );
  app.post(
    "/v0/professional/update-professional",
    new ProfessionalCollection().updateProfessional
  );
  app.post(
    "/v0/professional/delete-professional",
    new ProfessionalCollection().deleteProfessional
  );
  app.get(
    "/v0/professional/get-professional",
    new ProfessionalCollection().getProfessional
  );
};
