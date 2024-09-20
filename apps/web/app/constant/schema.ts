import * as Yup from 'yup';

export const YUP_SCHEMA = {
  REQUIRED: Yup.string().required(),
  NOT_REQUIRED: Yup.string().notRequired(),
  NUM_NOT_REQUIRED: Yup.number().typeError('Number only'),
  NUM_REQUIRED: Yup.number().typeError('Number only').required(),
  EMAIL_REQUIRED: Yup.string().email('Invalid email').required('Email is required'),
  BOOLEAN: Yup.bool(),
  OBJECT_REQUIRED: Yup.object().required(),
};
