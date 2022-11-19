import uuid from "uuid";
import { IUuid } from "../interfaces/IUuid";

export default class UuidV5 implements IUuid {
    generate = () => uuid.v4();
}
