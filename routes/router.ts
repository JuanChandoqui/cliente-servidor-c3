const {Pool} = require("pg");

//DENTRO DE ESTA CLASE, CREAR UNA CLASE DE CONEXION PARA EL MANEJADOR DE DB
import { Router, Request, Response } from 'express';


//credenciales
const client = new Pool({
    user: "juan",
    host: "localhost",
    database: "juandb",
    password: "1234",
    port: 5300,
})

client.connect().then((result: any) => {
    console.log("conexion exitosa");
  }).catch((err: any) => {
    console.log("conexion fallida");
  });


const router = Router();

router.post("/savemensaje", (req: Request, res: Response) => {
    const mensaje = req.body.mensaje;
    const autor = req.body.de;
    const query =
      "insert into mensajes (de , mensaje ) VALUES ('" +
      autor +
      "','" +
      mensaje +
      "');";
  
    let respuesta = client.query(query, (err: any, resp: any) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send("todo funcional");
      }
    });
  
    // este debe de estar aca afuera porque como node es asic entonces antes de imprimir la respuesta del back lo que hace es cerrar la conexion y por eso no da ningun feedback
  
    client.end();
  });
  
  
  router.post("/mensajes", (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const ok = true;
  
    res.json({
      ok,
      cuerpo,
      de,
    });
  });
  
  router.post("/mensajes/:id", (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
  
    res.json({
      ok: true,
      cuerpo,
      de,
      id,
    });
  });
  

  router.get("/mensajesgit", (req: Request, res: Response) => {
    res.json({
      ok: true,
      mensaje: "GET cambio de git dos",
    });
  });
  
  router.get("/mensajes", (req: Request, res: Response) => {
    res.json({
      ok: true,
      mensaje: "GET cambio de git",
    });
  });

  export default router;