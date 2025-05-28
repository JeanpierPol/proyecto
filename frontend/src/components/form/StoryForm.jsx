import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputText, InputFile } from "./input";
import DescriptionInput from "./WYSIWYG/DescriptionInput";
import storySchema from "../../validations/StorySchema";

const StoryEditor = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(storySchema),
    });

    const onSubmit = (data) => {
        console.log('DATA:', data);
    };

    return (
        <div className="form container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    key="title"
                    type="text"
                    name="title"
                    label="Título"
                    register={register}
                    error={errors.title}
                    watchValue={watch}
                />

                <DescriptionInput
                    name="description"
                    register={register}
                    setValue={setValue}
                    error={errors.description}
                    watchValue={watch}
                />

                <InputFile
                    name="coverImg"
                    label="Portada"
                    register={register}
                    error={errors.coverImg}
                    watchValue={watch} 
                />
                <button className="btn btn-primary w-100 mt-3" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default StoryEditor;
