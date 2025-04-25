import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFromConfig = {
  defaultValues?: Record<string, any>;
};
type TFormsProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFromConfig;
const PHForm = ({ onSubmit, children, defaultValues }: TFormsProps) => {
  const fromConfig: TFromConfig = {};
  if (defaultValues) {
    fromConfig['defaultValues'] = defaultValues;
  }
  const methods = useForm(fromConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
