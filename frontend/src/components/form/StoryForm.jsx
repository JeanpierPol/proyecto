import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useStory } from '../../context/StoryContext';
import { InputText, InputFile, InputTextarea } from "./input";
import storySchema from "../../validations/StorySchema";
import ContainerStory from '../story/ContainerStory';
import StoryImageComponent from '../imagenComponent/StoryImageComponent';

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

    const [previewUrl, setPreviewUrl] = useState(null);

    const imagenFile = watch('coverImg')

    useEffect(() => {
        if (imagenFile && imagenFile[0]) {
            const url = URL.createObjectURL(imagenFile[0]);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [imagenFile]);


    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("description", data.description);

        if (data.coverImg && data.coverImg[0]) {
            formData.append("coverImg", data.coverImg[0]);
        }
        
        createStory(formData);
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
                        <InputTextarea
                            name="description"
                            label="Descripcion"
                            register={register}
                            error={errors.description}
                            watchValue={watch}
                        />


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
