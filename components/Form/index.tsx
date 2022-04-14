import { yupResolver } from '@hookform/resolvers/yup';
import { createElement } from 'react';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import * as yup from 'yup';

interface Props<T> {
  children: React.ReactElement[];
  onSubmit: SubmitHandler<T>;
  schema?: yup.AnyObjectSchema;
  options: UseFormProps | any;
}

const Form = <T,>({ schema, children, onSubmit, options }: Props<T>) => {
  const resolver = schema ? yupResolver(schema) : undefined;
  options = { ...options, resolver };
  const methods = useForm<T>(options);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
