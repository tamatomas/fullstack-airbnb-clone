interface Props {}

export const RegisterSuccess = (props: Props) => {
  return (
    <p style={{ fontFamily: "poppins", fontSize: 22 }}>
      Your account has been created, please check your email for the link to
      confirm the account.
    </p>
  );
};
