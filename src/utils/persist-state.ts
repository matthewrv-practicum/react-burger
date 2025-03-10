const stateKey = "codeSent";

export function setVerificationCodeSent(value: boolean): void {
  if (value) {
    localStorage.setItem(stateKey, "yeah");
  } else {
    localStorage.removeItem(stateKey);
  }
}

export function getVerificationCodeSent(): boolean {
  return localStorage.getItem(stateKey) !== null;
}
