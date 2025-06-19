import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useStory } from '../../context/StoryContext';
import { InputText, InputFile, InputTextarea, InputTags } from "./input";
import storySchema from "../../validations/storySchema";
import ContainerStory from '../story/ContainerStory';
import StoryImageComponent from '../imagenComponent/StoryImageComponent';
import { useTag } from '../../context/TagContext';
import Loading from '../Loading'

const StoryForm = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(storySchema),
    });
    const navigate = useNavigate();
    const { createStory } = useStory();
    const { tags, getTags, loading } = useTag();
    const [previewUrl, setPreviewUrl] = useState(null);

    const imagenFile = watch('coverImg')


    useEffect(() => {
        if (imagenFile && imagenFile[0]) {
            const url = URL.createObjectURL(imagenFile[0]);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [imagenFile]);

    useEffect(() => {
        getTags();
    }, []);

    if (loading) {
        return <Loading />
    }

    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("description", data.description);

        if (data.coverImg && data.coverImg[0]) {
            formData.append("coverImg", data.coverImg[0]);
        }
        
        data.tag.forEach(tagId => formData.append("tags[]", tagId));

        createStory(formData);
        navigate(`/myworks`)

    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ContainerStory
                    img={
                        <>
                            <StoryImageComponent src={previewUrl} className="w-100 mb-3" />
                            <InputFile
                                name="coverImg"
                                label="Portada"
                                register={register}
                                error={errors.coverImg}
                                watchValue={watch}
                            />
                        </>
                    }
                    title={
                        <InputText
                            type="text"
                            name="title"
                            label="Título"
                            error={errors.title}
                            register={register}
                            watchValue={watch}
                        />
                    }
                    description={
                        <div>
                            <InputTextarea
                                name="description"
                                label="Descripcion"
                                register={register}
                                error={errors.description}
                                watchValue={watch}
                            />
                            <InputTags
                                tags={tags}
                                register={register}
                                error={errors.tag}
                                watchValue={watch}
                            />

                        </div>
                    }
                >

                    <button className="btn btn-primary w-100 mt-3" type="submit">
                        Publicar
                    </button>

                </ContainerStory>


            </form>
        </>

    );
};

export default StoryForm;
