import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted = false;
  success = false;
  private readonly recipient = 'dawoodeslam017@gmail.com';

  /**
   * Check if a form field is invalid and has been touched or submitted
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const mailtoLink = this.buildMailtoLink(name, email, message);

    window.open(mailtoLink, '_blank', 'noopener');
    this.success = true;
    this.resetForm();
  }

  private buildMailtoLink(
    name: string,
    email: string,
    message: string,
  ): string {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    return `mailto:${this.recipient}?subject=${subject}&body=${body}`;
  }

  private resetForm(): void {
    this.form.reset();
    this.submitted = false;
  }
}
