import { FormApi } from "final-form";

export const scrollToInvalidField = (fields: string[], form: FormApi) => {
  const invalidField = fields.find(
    (field) => !form.getFieldState(field)?.dirty
  );
  if (invalidField) {
    const targetInput: HTMLInputElement | null = document.querySelector(
      `[name="${invalidField}"]`
    );
    if (targetInput) {
      targetInput.focus({ preventScroll: true });
      targetInput.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
};
