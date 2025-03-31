export const validateData = (email, pass) => {
  const emailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const passValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass);

  if (!emailValid) return "Email is invalid!!";
  if (!passValid) return "Password is invalid!!";

  return null;
};
