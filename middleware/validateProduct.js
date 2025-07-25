const { body, validationResult } = require('express-validator');

exports.validateProduct = [
  body('name').isString().trim().notEmpty().withMessage('Name is required'),
  body('category').isString().trim().notEmpty().withMessage('Category is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];
