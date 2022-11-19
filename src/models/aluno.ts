export class Aluno {
    id!: string;
    nome!: string;
    matricula!: number;
    curso!: string;
    notas!: number[];

    constructor(object: Object) {
        Object.assign(this, object);
    }

    getId = () => this.id;

    setId = (id: string) => (this.id = id);

    getNome = () => this.nome;

    setNome = (nome: string) => (this.nome = nome);

    getMatricula = () => this.matricula;

    setMatricula = (matricula: number) => (this.matricula = matricula);

    getCurso = () => this.curso;

    setCurso = (curso: string) => (this.curso = curso);

    getNotas = () => this.notas;

    setNotas = (notas: number[]) => (this.notas = notas);
}
