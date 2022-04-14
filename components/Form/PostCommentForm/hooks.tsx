import { SubmitHandler } from 'react-hook-form';

type PostCommentFormType = {
  body: string;
  name: string;
  email: string;
};

const usePostComment = () => {
  const onSubmitPostComment: SubmitHandler<PostCommentFormType> = async (
    values
  ) => {
    
  };

  return { handlers: { onSubmitPostComment } };
};

export default usePostComment;
