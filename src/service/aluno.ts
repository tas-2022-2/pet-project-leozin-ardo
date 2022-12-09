import { IDatabase } from "../interfaces/iDatabase";
import { IUuid } from "../interfaces/IUuid";
import { Aluno } from "../models/aluno";

export class AlunoService {
    repository!: IDatabase;
    uuid!: IUuid;

    constructor(repository: IDatabase, uuid: IUuid) {
        this.repository = repository;
        this.uuid = uuid;
    }

    create(aluno: Aluno) {
        if (!aluno.getMatricula()) throw new Error("Matrícula não informada");

        if (!aluno.getNome()) throw new Error("Nome não informado");

        if (!aluno.getCurso()) throw new Error("Curso não informado");

        aluno.setId(this.uuid.generate());

        this.repository.create(aluno);
    }

    update(aluno: Aluno) {
        if (!aluno.getId()) throw new Error("Id não informado");
        const oldAluno = this.repository.read(aluno.getId());

        if (!oldAluno) throw new Error("Aluno não encontrado");

        if (!aluno.getMatricula()) aluno.setMatricula(oldAluno.getMatricula());
        if (!aluno.getNome()) aluno.setNome(oldAluno.getNome());
        if (!aluno.getCurso()) aluno.setCurso(oldAluno.getCurso());
        if (!aluno.getNotas()) aluno.setNotas(oldAluno.getNotas());

        this.repository.update(aluno);
    }

    delete(id: string) {
        if (!id) throw new Error("Id não informado");

        this.repository.delete(id);
    }

    read(id: string) {
        if (!id) throw new Error("Id não informado");

        const aluno = this.repository.read(id);

        if (!aluno) throw new Error("Aluno não encontrado");

        return aluno;
    }
}
