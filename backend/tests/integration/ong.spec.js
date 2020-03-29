/*Usar a library Supertest para realizar as
chamadas a API do sistema nos testes de integração*/

const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); // Sempre zerar o banco de dados antes de iniciar um novo teste, para evitar conflitos e também deixar o banco de dados ocupando uma espaço mínimo.
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "RUANDA1",
        email: "contato@rua.com",
        whatsapp: "83999999999",
        city: "Campina Grande",
        uf: "PB"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});

/**
 * Pesquisar testes de funcionalidade que utilizam os Headers
 * 
 * exemplo: it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .set("Authorization", "idválido")
      .send({
        name: "RUANDA1",
        email: "contato@rua.com",
        whatsapp: "83999999999",
        city: "Campina Grande",
        uf: "PB"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
 */
