import Utils from "../../utils";
import {
  apiFailureMessage,
  apiSuccessMessage,
  httpConstants,
} from "../../common/constants";
import ProfessionalSchema from "../../models/professionalSchema";

export default class Manger {
  createProfessional = async (request) => {
    if (!request) {
      return Utils.error(
        {},
        apiFailureMessage.INVALID_PARAMS,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );
    }

    let professionalObj = new ProfessionalSchema(request);
    return professionalObj.save()
  
    

  };

  updateProfessional = async (request) => {
    if (!request.findQuery || !request.updateQuery) {
      return Utils.error(
        {},
        apiFailureMessage.INVALID_PARAMS,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );
    }

    let result = ProfessionalSchema.findOneAndUpdateData(
      request.findQuery,
      request.updateQuery
    
    );
    return result;
  };
  getProfessional = async (request) => {
    return await ProfessionalSchema.findData().catch((err) => {
      throw err;
    });
  };
  deleteProfessiona = async (request) => {
    if (!request)
      return Utils.error(
        {},
        apiFailureMessage.INVALID_PARAMS,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );

    const data = ProfessionalSchema.deleteOne(
      request,
      { isDeleted: true }
    );
    return data;
  };
}
