export const REGISTER_PROFESSIONAL_FORM = 'REGISTER_PROFESSIONAL_FORM';

export default function changeProfessionalForm(register) {
  return ({
    type: REGISTER_PROFESSIONAL_FORM,
    value: register,
  });
}
