declare module '@emailjs/browser' {
  export class EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: string | HTMLFormElement,
    options?: unknown
  ): Promise<EmailJSResponseStatus>;
}

