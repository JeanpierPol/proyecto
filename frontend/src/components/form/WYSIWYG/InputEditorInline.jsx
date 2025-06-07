import { Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import { WYSIWYGKey, config } from './editorConfig';

const InputEditorInline = ({ name, control, error, defaultValue, className = '', editorConfig = {}, }) => {
    return (
        <div className={className}>
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
