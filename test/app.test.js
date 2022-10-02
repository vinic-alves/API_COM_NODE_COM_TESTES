 // O Teste será: Deve responder a raiz 

const { request } = require("express");
const supertest = require("supertest");

const app = require('../src/app')

test('Deve responder na a raiz', ()=>{
    return request(app).get('/')
    .then((res)=> {
        expect(res.status).toBe(200);
    })
})