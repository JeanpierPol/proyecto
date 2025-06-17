import Tag from "../models/Tag.js";
import CRUDServices from "./CRUDService.js";
const tagServices = new CRUDServices(Tag, 'Tag');

const getAllTag = () => tagServices.getAllData();


export { getAllTag }