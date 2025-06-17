import Tags from "./tags";
import { getValidationClass } from "../../../utils/formUtils";

export const InputTags = ({ tags, register, error, watchValue }) => {
    Tags.init("select[multiple]");
    const value = watchValue?.("tag");
    return (
        <>
            <label htmlFor="validationTags" className="form-label">Etiquetas</label>
            <select
                className={getValidationClass({ error, base: "form-select", value })}
                id="validationTags"
                {...register("tag")}
                multiple
                data-allow-clear="true"
                data-clear-label="Clear"
            >
                <option disabled hidden value="">Etiquetas</option>
                {
                    tags &&
                    tags.map(tag => (
                        <option key={tag._id} value={tag._id}>{tag.key}</option>
                    ))

                }
            </select>
            {error && <div className="invalid-feedback d-block">{error.message}</div>}
        </>
    )
}