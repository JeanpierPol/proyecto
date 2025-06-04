import { Editor } from '@tinymce/tinymce-react';
import { WYSIWYGKey, config } from './editorConfig';

const ContentPage = ({ defaultValue, className }) => {
    return (
        <>
            <Editor
                apiKey={WYSIWYGKey}

                init={{
                    ...config,
                    menubar: true,
                    inline: true,
                    plugins: [
                        'autolink', 'codesample', 'link', 'lists',
                        'media', 'powerpaste', 'table', 'image',
                        'quickbars', 'codesample'
                    ],
                    toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | image link',
                    quickbars_insert_toolbar: false,
                    quickbars_selection_toolbar: false,
                    contextmenu: 'undo redo | image | inserttable | cell row column deletetablet',
                    powerpaste_word_import: 'clean',
                    powerpaste_html_import: 'clean',
                }}
                initialValue={defaultValue}
                className={className}
            />


        </>
    )
}

export default ContentPage;