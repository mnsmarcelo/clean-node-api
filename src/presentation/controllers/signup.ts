import { HttpRequest, HttpResponse } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import badRequest from '../helpers/http-helpers';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requeridFields = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requeridFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
