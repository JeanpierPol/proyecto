import InputEditorInline from './WYSIWYG/InputEditorInline';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import pageSchema from '../../validations/pageSchema';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStory } from "../../context/StoryContext";
import { usePage } from "../../context/PageContext";
import StoryImageComponent from "../imagenComponent/StoryImageComponent";
import Loading from "../Loading";

const BuildStoryForm = () => {
    const { storyId, pageId } = useParams();
    const { getStory, story } = useStory();
    const { createPage } = usePage();
    const [loading, setLoading] = useState(true);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(pageSchema),
    });

    useEffect(() => {
        if (storyId) {
            getStory(storyId).finally(() => setLoading(false));
        }
    }, [storyId]);

    if (loading) return <Loading />;

    const onSubmit = async (data) => {
        await createPage({ ...data, storyId, pageId });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sticky-top bg-body shadow-sm py-2">
                <nav className="navbar">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <StoryImageComponent src={story.coverImg} width={60} />
                            <h5 className="mb-0">{story.title}</h5>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Publicar
                        </button>
                    </div>
                </nav>
            </div>

            <div className="container mt-5">
                <InputEditorInline
                    name="title"
                    control={control}
                    error={errors.title}
                    defaultValue="Título"
                    editorConfig={{
                        toolbar: 'bold italic | quicklink',
                        plugins: ['quickbars'],
                        forced_root_block: 'h2',
                        block_formats: 'Heading 2=h2',
                    }}
                />
                <hr />
                <InputEditorInline
                    name="content"
                    control={control}
                    error={errors.content}
                    defaultValue="Descripción"
                    className="mt-5"
                    editorConfig={{
                        toolbar: true,
                        plugins: [
                            'autolink', 'codesample', 'link', 'lists',
                            'media', 'table', 'image',
                            'quickbars', 'codesample'
                        ],
                        contextmenu: 'undo redo | image | inserttable | cell row column deletetablet',
                    }}
                />
            </div>
        </form>
    );
};

export default BuildStoryForm;
