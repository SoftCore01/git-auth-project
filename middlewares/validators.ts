import Joi from "joi";

export const userSchema = Joi.object({
  firstname: Joi.string().min(6).max(50).required(),
  lastname: Joi.string().min(6).max(50).required(),
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/),
});
