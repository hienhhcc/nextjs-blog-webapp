import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { addComment } from '../../../services/post.service';

type PostCommentFormType = {
  body: string;
  name: string;
  email: string;
};

const usePostCommentForm = () => {
  const mutation = useMutation(addComment);
  const router = useRouter();
  const queryClient = useQueryClient();

  const onSubmitPostComment: SubmitHandler<PostCommentFormType> = async ({
    name,
    body,
  }) => {
    mutation.mutate(
      {
        id: uuidv4(),
        author: name,
        body: body,
        postId: router.query.postId as string,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('comments');
        },
      }
    );
  };

  return {
    handlers: { onSubmitPostComment },
    state: {
      isLoading: mutation.isLoading,
      isError: mutation.isError,
    },
  };
};

export default usePostCommentForm;
