export const openEmailClient = (email: string) => {
  const mailToUrl = `mailto:${email}`;
  const newWindow = window.open(mailToUrl, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
};
