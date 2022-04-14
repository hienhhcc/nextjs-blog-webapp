import { Box } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  errors: any;
  fieldName: string;
}

const DisplayErrorMessage = ({ errors, fieldName }: Props) => {
  return (
    <Box sx={{ color: 'red' }}>
      <ErrorMessage errors={errors} name={fieldName} />
    </Box>
  );
};

export default DisplayErrorMessage;
