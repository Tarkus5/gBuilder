import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[passwordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordStrengthValidatorDirective),
      multi: true
    }
  ]
})
export class PasswordStrengthValidatorDirective implements Validator {
  @Input() minLength = 8;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasMinLength = value.length >= this.minLength;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    const passwordValid =
      hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
    return !passwordValid ? { passwordStrength: true } : null;
  }
}
