import { Aluno } from "../models/aluno";

export interface IAluno {
    create(aluno: Aluno): Aluno;
}
