import { Aluno } from "../models/aluno";
import { test, expect } from "@jest/globals";

test("create a aluno", () => {
    const aluno = new Aluno({
        nome: "Leonardo",
        id: "1321321",
        matricula: "11230390",
        curso: "Engenharia de Software",
    });
    4
    expect(aluno.nome).toBe("Leonardo");
});
