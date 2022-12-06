import Utils from "../app/utils";

import * as yup from "yup";

module.exports = {
  validateProfessional: async (req, res, next) => {
    const schema = yup.object().shape({
      userId: yup.string(),
      profession: yup.string(),
      workingAs: yup.string(),
      workingScince: yup.string(),
      companyName: yup.string(),
      companyType: yup.string(),
      companyDesc: yup.string(),
      companyStructure: yup.string(),
      websiteLink: yup.string(),
      estOn: yup.date(),
      companyEmail: yup.string(),
      address: yup.string(),
      city: yup.string(),
      state: yup.string(),
      country: yup.string(),
      pincode: yup.number(),
      pan: yup.string(),
      dp: yup.string(),
      resumes: yup.string(),
      linkedIn: yup.string(),
    });
    await validate(schema, req.body, res, next);
  },
  validateBankDetails: async (req, res, next) => {
    const schema = yup.object().shape({
      userId: yup.string(),
      profession: yup.string(),
      workingAs: yup.string(),
      workingScince: yup.string(),
      companyName: yup.string(),
      companyType: yup.string(),
      companyDesc: yup.string(),
      companyStructure: yup.string(),
      websiteLink: yup.string(),
      estOn: yup.date(),
      companyEmail: yup.string(),
      address: yup.string(),
      city: yup.string(),
      state: yup.string(),
      country: yup.string(),
      pincode: yup.number(),
      pan: yup.string(),
      dp: yup.string(),
      resumes: yup.string(),
      linkedIn: yup.string(),
    });
    await validate(schema, req.body, res, next);
  },
  validateCommercialCapability: async (req, res, next) => {
    const schema = yup.object().shape({
      userId: yup.string(),
      minProjectCharge: yup.number(),
      pricePerSqft: yup.number(),
      prefWorkLocation: yup.string(),
      projectType: yup.string(),
      completedProjects: yup.number(),
      ongoingProjects: yup.number(),
      maxCoverageArea: yup.number(),
    });
    await validate(schema, req.body, res, next);
  },
};
const validate = async (schema, reqData, res, next) => {
  try {
    await schema.validate(reqData, { abortEarly: false });

    next();
  } catch (e) {
    const errors = e.inner.map(({ path, message, value }) => ({
      path,

      message,

      value,
    }));

    Utils.responseForValidation(res, errors);
  }
};
