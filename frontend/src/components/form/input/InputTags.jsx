import Tags from "./tags";

export const InputTags = () => {
    Tags.init("select[multiple]");
    return (
        <>
            <select class="form-select" id="validationTags" multiple data-allow-clear="true" data-clear-label="Clear">
                <option selected disabled hidden value="">Etiquetas</option>
                <option value="1" >JavaScript</option>
                <option value="2">HTML5</option>
                <option value="3">CSS3</option>
                <option value="4">jQuery</option>
                <option value="5">React</option>
                <option value="6">Angular</option>
                <option value="7">Vue</option>
                <option value="8">Python</option>
            </select>
            <div class="invalid-feedback">Please select a valid tag.</div>
        </>
    )
}