import Joi from "joi";

export const signUpSchema = Joi.object({
  firstname: Joi.string().min(6).max(50).required(),
  lastname: Joi.string().min(6).max(50).required(),
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/),
  password: Joi.string()
    .min(6)
    .max(50)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)
    .required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/),
  password: Joi.string()
    .min(6)
    .max(50)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)
    .required(),
});

export const postSchema = Joi.object({
  title: Joi.string().min(5).max(50),
  details: Joi.string().min(5),
});

export const updatePostSchema = Joi.object({
  title: Joi.string().min(5).max(50).optional(),
  details: Joi.string().min(5).optional(),
});
