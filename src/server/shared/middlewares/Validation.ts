import type { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import type { AnyObject, Maybe, ObjectSchema, ValidationError } from "yup"


type TProperty = 'body' | 'header' | 'params' | 'query';
// type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>
type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>
type TAllSchemas = Record<TProperty, ObjectSchema<any>>
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler

export const validation: TValidation = (getAllSchemas) =>  async (req, res, next) => {
  const schemas = getAllSchemas(schema => schema);

  const errosResult: Record<string, Record<string, string>> = { }

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (erro) {
      const yupError = erro as ValidationError;
      let validationErrors: Record<string, string> = { }
  
      yupError.inner.forEach(err => {
        if(!err.path) return
  
        validationErrors[err.path] = err.message
      })

      errosResult[key as TProperty] = validationErrors;
    }
  })

  if( Object.entries(errosResult).length === 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({
        errors: errosResult
    })
  }
}
