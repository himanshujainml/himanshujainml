import Utils from "../../utils";
import {
  apiSuccessMessage,
  apiFailureMessage,
  httpConstants,
} from "../../common/constants";
import BLManager from "./manager";
export default class Index {
  async createProfessional(req, res) {

    const [error, createProfessionalResponse] = await Utils.parseResponse(
      new BLManager().createProfessional(req.body)
      
    );
    if (error || !createProfessionalResponse) {
      return Utils.handleError(error, req, res);
    }
    if (
      createProfessionalResponse.code &&
      createProfessionalResponse.code !== 200
    ) {
      return Utils.response(
        res,
        {},
        createProfessionalResponse.data,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );
    }
    return Utils.response(
      res,
      createProfessionalResponse,
      apiSuccessMessage.CREATED_PROFESSIONAL,
      httpConstants.RESPONSE_STATUS.SUCCESS,
      httpConstants.RESPONSE_CODES.OK
    );
  }
  async updateProfessional(req, res) {
    console.log(req.body)
    const [error, updateProfessionalResponse] = await Utils.parseResponse(
      new BLManager().updateProfessional(req.body)
    );
    if (error || !updateProfessionalResponse) {
      return Utils.handleError(error, req, res);
    }
    if (
      updateProfessionalResponse.code &&
      updateProfessionalResponse.code !== 200
    ) {
      return Utils.response(
        res,
        {},
        updateProfessionalResponse.data,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );
    }
    return Utils.response(
      res,
      updateProfessionalResponse,
      apiSuccessMessage.UPDATED_PROFESSIONAL,
      httpConstants.RESPONSE_STATUS.SUCCESS,
      httpConstants.RESPONSE_CODES.OK
    );
  }
  async getProfessional(req, res) {
    const [error, getProfessionalResponse] = await Utils.parseResponse(
      new BLManager().getProfessional(req.body)
    );
    if (error || !getProfessionalResponse) {
      return Utils.handleError(error, req, res);
    }
    if (getProfessionalResponse.code && getProfessionalResponse.code !== 200) {
      return Utils.response(
        res,
        {},
        getProfessionalResponse.data,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );
    }
    return Utils.response(
      res,
      getProfessionalResponse,
      apiSuccessMessage.FETCH_SUCCESS,
      httpConstants.RESPONSE_STATUS.SUCCESS,
      httpConstants.RESPONSE_CODES.OK
    );
  }
  async deleteProfessional(req, res) {
    const [error, deleteProfessionalResponse] = await Utils.parseResponse(
      new BLManager().deleteProfessiona(req.body)
    );
    if (error || !deleteProfessionalResponse) {
      return Utils.handleError(error, req, res);
    }
    if (
      deleteProfessionalResponse.code &&
      deleteProfessionalResponse.code !== 200
    ) {
      return Utils.response(
        res,
        {},
        deleteProfessionalResponse.data,
        httpConstants.RESPONSE_STATUS.FAILURE,
        httpConstants.RESPONSE_CODES.FORBIDDEN
      );
     
    }
    return Utils.response(
      res,
      deleteProfessionalResponse.data,
      apiSuccessMessage.FETCH_SUCCESS,
      httpConstants.RESPONSE_STATUS.SUCCESS,
      httpConstants.RESPONSE_CODES.OK
    );
  }
}
