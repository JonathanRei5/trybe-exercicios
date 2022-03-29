export const REGISTER_FORM = 'REGISTER_FORM';

export default function changeForm(register) {
  return ({
    type: REGISTER_FORM,
    value: register,
  });
}
