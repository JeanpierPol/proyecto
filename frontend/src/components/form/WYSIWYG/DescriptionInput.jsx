import { Editor } from '@tinymce/tinymce-react';
import { WYSIWYGKey, config } from './editorConfig';

const DescriptionInput = ({ name, register, setValue, watchValue, error }) => {
  const value = watchValue(name);

  const plugins = [
    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link',
    'lists', 'searchreplace', 'visualblocks', 'wordcount'
  ];

  const toolbar = 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat';

  return (
    <div className="mb-3">
      <label className="form-label">Descripción</label>
      <Editor
        apiKey={WYSIWYGKey}
        value={value}
        onEditorChange={(newValue) => setValue(name, newValue, { shouldValidate: true })}
        init={{
          ...config,
          plugins,
          toolbar,
        }}
      />
      {error && <p className="text-danger mt-1">{error.message}</p>}
    </div>
  );
};

export default DescriptionInput;
