import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
    price: Joi.number().min(0).max(1_000_000).required()
})

export {carValidator}