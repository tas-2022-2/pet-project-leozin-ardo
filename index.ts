import crypto from "crypto";
import { Aluno } from "./src/models/aluno";
import { AlunoService } from "./src/service/aluno";

const repositoryMock = {
    create: (aluno: any) => {
        const newAluno = new Aluno(aluno);
        console.log(`Aluno: ${newAluno.getNome()} criado com sucesso`);
        return newAluno;
    },
    delete: (id: string) => console.log(`Aluno deletado com sucesso`),
    update: (aluno: any) => new Aluno(aluno),
    read: (id: string) =>
        new Aluno({ id, matricula: "123", nome: "Aluno", curso: "Curso" }),
    list: () => [
        new Aluno({ id: "1", matricula: "123", nome: "Aluno", curso: "Curso" }),
    ],
};

const uuidMock = {
    generate: () => crypto.randomUUID(),
};

const alunoService = new AlunoService(repositoryMock, uuidMock);

alunoService.create(
    new Aluno({ matricula: "123", nome: "Aluno", curso: "Curso" })
);
