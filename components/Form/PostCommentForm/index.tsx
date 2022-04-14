import { Button, Typography } from '@mui/material';
import * as yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import Form from '../index';
import MUIInput from '../MUIInput';
import usePostCommentForm from './hooks';

const schema = yup
  .object({
    body: yup.string().required('Comment body is required'),
    name: yup.string().required('Your name is required'),
  })
  .required();

const PostCommentForm = () => {
  const {
    handlers: { onSubmitPostComment },
    state: { isLoading, isError },
  } = usePostCommentForm();

  return (
    <Form
      options={{ criteriaMode: 'all', mode: 'all' }}
      schema={schema}
      onSubmit={onSubmitPostComment}
    >
      <MUIInput
        name="body"
        inputProps={{
          label: 'Comment',
          type: 'text',
          autoComplete: 'off',
          placeholder: 'Your comment',
          multiline: true,
          rows: 4,
        }}
      />

      <MUIInput
        name="name"
        inputProps={{
          label: 'Name',
          type: 'text',
          autoComplete: 'off',
          placeholder: 'Your name',
        }}
      />
      {isLoading ? (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Posting...
        </LoadingButton>
      ) : (
        <Button variant="contained" type="submit" sx={{ mt: 1 }}>
          Post comment
        </Button>
      )}
    </Form>
  );
};

export default PostCommentForm;
