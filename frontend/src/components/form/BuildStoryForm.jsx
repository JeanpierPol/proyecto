import TitlePage from "./WYSIWYG/titlePage";
import ContentPage from "./WYSIWYG/ContentPage";
const BuildStoryForm = () => {
    return (
        <>
            <div className="sticky-top">
                <button type="button" className="btn btn-primary">Publicar</button>
            </div>
            <div className="container mt-5">

                <TitlePage defaultValue="Titulo"

                />
                <hr />
                <ContentPage
                    defaultValue="Descripcion"
                    className="mt-5"

                />

            </div>

        </>
    )
}

export default BuildStoryForm;