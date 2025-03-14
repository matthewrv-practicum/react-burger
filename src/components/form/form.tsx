import { FC, PropsWithChildren, SyntheticEvent } from "react";
import formStyles from "./form.module.css";

export type TFormProps = {
  title: string;
  errorMsg?: string;
  onSubmit: (e: SyntheticEvent) => void;
};

const Form: FC<PropsWithChildren<TFormProps>> = ({
  title,
  errorMsg,
  onSubmit,
  children,
}: PropsWithChildren<TFormProps>) => {
  return (
    <div>
      <h1 className="text text_type_main-medium text-center">{title}</h1>
      <form className={`pt-6 ${formStyles.form}`} onSubmit={onSubmit}>
        {children}
      </form>
      <div className={formStyles.error}>
        <span className="text text_type_main-default">{errorMsg}</span>
      </div>
    </div>
  );
};

export default Form;
