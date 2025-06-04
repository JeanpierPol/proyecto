import { Editor } from '@tinymce/tinymce-react';
import { WYSIWYGKey, config } from './editorConfig';

const TitlePage = ({ defaultValue }) => {
    return (
        <>
            <Editor
                apiKey={WYSIWYGKey}

                init={{
                    ...config,
                    menubar: false,
                    inline: true,
                    toolbar: 'bold italic | quicklink',
                    plugins: ['quickbars'],
                    forced_root_block: 'h2',
                    block_formats: 'Heading 2=h2',
                    quickbars_insert_toolbar: false,
                    quickbars_selection_toolbar: false,
                }}
                initialValue={defaultValue}

            />


        </>
    )
}

export default TitlePage;