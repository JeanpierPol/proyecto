import { Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import { WYSIWYGKey, config } from './editorConfig';

const InputEditorInline = ({ name, control, error, defaultValue, className = '', editorConfig = {}, }) => {
    return (
        <div className={`${className} tinny`}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <>
                        <Editor
                            apiKey={WYSIWYGKey}
                            value={value}
                            onEditorChange={onChange}
                            init={{
                                ...config,
                                inline: true,
                                menubar: false,
                                quickbars_insert_toolbar: false,
                                quickbars_selection_toolbar: false,
                                ...editorConfig,
                            }}
                        />
                        {error && <div className="text-danger mt-2 small">{error.message}</div>}
                    </>
                )}
            />
        </div>
    );
};

export default InputEditorInline;
