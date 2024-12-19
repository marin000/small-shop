import clsx from 'clsx';
import React from 'react';

interface InputFeedbackProps {
  id?: string;
  error?: string;
  description?: string;
  descriptionClass?: string;
  errorClass?: string;
}

const InputFeedback: React.FC<InputFeedbackProps> = ({
  id,
  error,
  description,
  descriptionClass = undefined,
  errorClass = undefined,
}) => {
  if (!error && !description) return null;

  const feedbackId = error ? `${id}-error` : `${id}-description`;
  const feedbackClass = clsx(
    'm-1 text-xs',
    error
      ? ['text-danger-500', errorClass]
      : ['text-gray-500', descriptionClass]
  );
  const feedbackText = error || description;

  return (
    <div id={feedbackId} className={feedbackClass}>
      {feedbackText}
    </div>
  );
};

export default InputFeedback;
