import { IDatabase } from "../interfaces/iDatabase";
import { Aluno } from "../models/aluno";

export class MemoryDatabase implements IDatabase {
    private database = new Map<string, any>();

    create(aluno: Aluno): Aluno | null {
        try {
            this.database.set(aluno.id, aluno);
            return aluno;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    delete(id: string): void {
        try {
            this.database.delete(id);
        } catch (err) {
            console.log(err);
        }
    }

    update(aluno: Aluno): Aluno | null {
        try {
            const findAluno = this.database.get(aluno.id);

            if (!findAluno) return null;

            this.database.set(aluno.id, aluno);
            return aluno;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    read(id: string): Aluno | null {
        try {
            const aluno = this.database.get(id);

            if (!aluno) return null;

            return aluno;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    list(): Aluno[] {
        try {
            const alunos = Array.from(this.database.values());
            return alunos;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}
