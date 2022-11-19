import { Aluno } from "../models/aluno";

export interface IDatabase {
    create(aluno: Aluno): Aluno | null;
    delete(id: string): void;
    update(aluno: Aluno): Aluno | null;
    read(id: string): Aluno | null;
    list(): Aluno[];
}
