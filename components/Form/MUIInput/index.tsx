import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { Fragment } from 'react';

import DisplayErrorMessage from '../DisplayErrorMessage/index';

interface Props {
  name: string;
  inputProps?: TextFieldProps;
}

const MUIInput = ({ name, inputProps }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Fragment>
      <TextField
        sx={{ width: '100%', mt: 2 }}
        {...inputProps}
        {...register(name)}
      />
      <DisplayErrorMessage errors={errors} fieldName={name} />
    </Fragment>
  );
};

export default MUIInput;
