// 1. BD Y CREACIÓN DE COLECCIONES

// Eliminamos la base de datos "vetsalud_mongo" si existe para evitar problemas
db.dropDatabase();
// Seleccionamos la base de datos "vetsalud_mongo"
db = db.getSiblingDB("vetsalud_mongo");
print(" Base de datos 'vetsalud_mongo' (checkpoint 1 creacion bd)");

db.createCollection("propietarios");    // Se usa para almacenar la info personal de los clientes/dueños de mascotas de la veterinaria
db.createCollection("mascotas");        // Se usa para mantener un registro de las mascotas antendidas en la veterinaria
db.createCollection("veterinarios");    // Se usa para mantener el registro de los veterinarios asociados
db.createCollection("atenciones");      // Se utilizará para llevar constancia de las atenciones realizadas a las mascotas
db.createCollection("vacunaciones");    // Se utiliza para manenter el control de las vacunas aplicables a las mascotas
db.createCollection("pagos");           // Registro de pagos realizados por los propietarios a la clinica
db.createCollection("trabajadores");    // Trabajadores no veterinarios
db.createCollection("tratamientos");    // Se usa para mantener el registro de los tratamientos aplicados a las mascotas
db.createCollection("medicamentos");    // Medicamentos disponibles en la veterinaria
db.createCollection("servicios");       // Procedimientos medicos realizables en las mascotas y su coste asociado
db.createCollection("especialidades");  // Especialidades de los veterinarios y su descripcion

print("Se crean las colecciones (checkpoint 2, creacion colecciones)");


// 2. DATOS INICIALES / insertOne e insertMany

// PROPIETARIOS
db.propietarios.insertOne({
  _id: 1,
  nombre: "Juan",
  apellido: "Gonzalez",
  telefono: "+56987445511",
  correo: "juan.gonzalez1@gmail.com"
});

db.propietarios.insertMany([
  { _id: 2, nombre: "Pedro",  apellido: "Muñoz",      telefono: "+56964112233", correo: "pedro.munoz2@gmail.com" },
  { _id: 3, nombre: "Carlos", apellido: "Rojas",      telefono: "+56952441166", correo: "carlos.rojas3@gmail.com" },
  { _id: 4, nombre: "Maria",  apellido: "Silva",      telefono: "+56941552277", correo: "maria.silva4@gmail.com" },
  { _id: 5, nombre: "Ana",    apellido: "Contreras",  telefono: "+56930663388", correo: "ana.contreras5@gmail.com" },
  { _id: 6, nombre: "Luis",   apellido: "Martinez",   telefono: "+56929774499", correo: "luis.martinez6@gmail.com" },
  { _id: 7, nombre: "Jorge",  apellido: "Sepulveda",  telefono: "+56918885500", correo: "jorge.sepulveda7@gmail.com" },
  { _id: 8, nombre: "Diego",  apellido: "Morales",    telefono: "+56977116622", correo: "diego.morales8@gmail.com" },
  { _id: 9, nombre: "Elena",  apellido: "Rodriguez",  telefono: "+56966227733", correo: "elena.rodriguez9@gmail.com" },
  { _id: 10, nombre: "Sofia", apellido: "Lopez",      telefono: "+56955338844", correo: "sofia.lopez10@gmail.com" }
]);


// ESPECIALIDADES
db.especialidades.insertOne({
  _id: 1,
  nombre_especialidad: "MEDICINA GENERAL",
  descripcion: "Atencion basica, prevencion y diagnosticos primarios."
});

db.especialidades.insertMany([
  { _id: 2, nombre_especialidad: "CIRUGIA",       descripcion: "Procedimientos quirurgicos avanzados y de tejido blando." },
  { _id: 3, nombre_especialidad: "DERMATOLOGIA",  descripcion: "Tratamiento de afecciones de la piel, oidos y alergias." },
  { _id: 4, nombre_especialidad: "CARDIOLOGIA",   descripcion: "Problemas cardiacos, patologias cronicas y circulatorias." },
  { _id: 5, nombre_especialidad: "ONCOLOGIA",     descripcion: "Diagnostico y tratamiento quimioterapeutico contra el cancer." }
]);


// VETERINARIOS
db.veterinarios.insertOne({
  _id: 1,
  nombre: "Juan Perez",
  telefono: "+56977221100",
  correo: "vet.juan1@vetsalud.cl",
  id_especialidad: 1
});

db.veterinarios.insertMany([
  { _id: 2, nombre: "Pedro",   apellido: "Diaz",      telefono: "+56988332211", correo: "vet.pedro2@vetsalud.cl", id_especialidad: 1 },
  { _id: 3, nombre: "Jorge",   apellido: "Rodriguez", telefono: "+56999550011", correo: "vet.jorge3@vetsalud.cl", id_especialidad: 1 },
  { _id: 4, nombre: "Marcela", apellido: "Soto",      telefono: "+56977114422", correo: "vet.marcela4@vetsalud.cl", id_especialidad: 1 },
  { _id: 5, nombre: "Carlos",  apellido: "Silva",     telefono: "+56999443322", correo: "vet.carlos5@vetsalud.cl", id_especialidad: 2 },
  { _id: 6, nombre: "Andres",  apellido: "Martinez",  telefono: "+56966227788", correo: "vet.andres6@vetsalud.cl", id_especialidad: 3 },
  { _id: 7, nombre: "Rodrigo", apellido: "Sepulveda", telefono: "+56977338899", correo: "vet.rodrigo7@vetsalud.cl", id_especialidad: 4 },
  { _id: 8, nombre: "Manuel",  apellido: "Morales",   telefono: "+56988449900", correo: "vet.manuel8@vetsalud.cl", id_especialidad: 5 },
  { _id: 9, nombre: "Camila",  apellido: "Fernandez", telefono: "+56955112233", correo: "vet.camila9@vetsalud.cl", id_especialidad: 2 },
  { _id: 10, nombre: "Diego",  apellido: "Araya",     telefono: "+56944223344", correo: "vet.diego10@vetsalud.cl", id_especialidad: 3 }
]);



// MASCOTAS
db.mascotas.insertOne({
  _id: 1,
  id_propietario: 1,
  nombre: "Luna",
  especie: "PERRO",
  raza: "Quiltro",
  sexo: "F",
  fecha_nacimiento: "2021-04-12",
  peso: 12.40,
  estado: "VIVO"
});

db.mascotas.insertMany([
  { _id: 2, id_propietario: 1, nombre: "Lucas", especie: "PERRO", raza: "Pastor Aleman",    sexo: "M", fecha_nacimiento: "2020-08-25", peso: 32.10, estado: "VIVO" },
  { _id: 3, id_propietario: 2, nombre: "Coco", especie: "GATO",   raza: "Siames",           sexo: "M", fecha_nacimiento: "2022-01-05", peso: 4.20, estado: "TRATAMIENTO" },
  { _id: 4, id_propietario: 2, nombre: "Max", especie: "GATO",    raza: "Mestizo",          sexo: "M", fecha_nacimiento: "2021-11-14", peso: 5.10, estado: "VIVO" },
  { _id: 5, id_propietario: 3, nombre: "Mia", especie: "CONEJO",  raza: "Enano",            sexo: "F", fecha_nacimiento: "2023-05-30", peso: 1.80, estado: "VIVO" },
  { _id: 6, id_propietario: 3, nombre: "Bella", especie: "PERRO", raza: "Chihuahua",        sexo: "F", fecha_nacimiento: "2019-07-19", peso: 3.10, estado: "HOSPITALIZADO" },
  { _id: 7, id_propietario: 4, nombre: "Toby", especie: "PERRO",  raza: "Golden Retriever", sexo: "M", fecha_nacimiento: "2018-03-01", peso: 28.50, estado: "VIVO" },
  { _id: 8, id_propietario: 4, nombre: "Simba", especie: "GATO",  raza: "Angora",           sexo: "M", fecha_nacimiento: "2022-09-11", peso: 4.90, estado: "VIVO" },
  { _id: 9, id_propietario: 5, nombre: "Rocky", especie: "PERRO", raza: "Boxer",            sexo: "M", fecha_nacimiento: "2017-02-04", peso: 25.30, estado: "VIVO" },
  { _id: 10, id_propietario: 5, nombre: "Chloe", especie: "GATO", raza: "Persa",            sexo: "F", fecha_nacimiento: "2020-10-22", peso: 3.80, estado: "VIVO" }
]);


// ATENCIONES
db.atenciones.insertOne({
  _id: 1,
  id_mascota: 3,
  id_veterinario: 1,
  fecha: "2026-01-10 09:30",
  motivo: "Control por vomitos recurrentes",
  diagnostico: "Gastroenteritis moderada",
  estado: "FINALIZADA"
});

db.atenciones.insertMany([
  { _id: 2,  id_mascota: 3, id_veterinario: 2, fecha: "2026-01-12 11:00", motivo: "Seguimiento de gastroenteritis",           diagnostico: "Evolucion favorable", estado: "FINALIZADA" },
  { _id: 3,  id_mascota: 3, id_veterinario: 6, fecha: "2026-03-05 16:15", motivo: "Control dermatologico por caida de pelo",  diagnostico: "Dermatitis alérgica", estado: "PENDIENTE" },
  { _id: 4,  id_mascota: 6, id_veterinario: 1, fecha: "2026-02-20 08:45", motivo: "Cojea en pata trasera derecha",            diagnostico: "Traumatismo leve", estado: "FINALIZADA" },
  { _id: 5,  id_mascota: 6, id_veterinario: 5, fecha: "2026-02-25 14:00", motivo: "Evaluacion por persistencia de dolor",     diagnostico: "Esguince de rodilla", estado: "EN CURSO" },
  { _id: 6,  id_mascota: 1, id_veterinario: 1, fecha: "2026-01-15 10:30", motivo: "Vacunacion anual",                         diagnostico: "Control sano", estado: "FINALIZADA" },
  { _id: 7,  id_mascota: 1, id_veterinario: 3, fecha: "2026-06-18 11:45", motivo: "Limpieza de oidos por rascado",            diagnostico: "Otitis externa bilateral", estado: "FINALIZADA" },
  { _id: 8,  id_mascota: 2, id_veterinario: 2, fecha: "2026-01-22 16:00", motivo: "Control de peso",                          diagnostico: "Sobrepeso leve", estado: "FINALIZADA" },
  { _id: 9,  id_mascota: 4, id_veterinario: 8, fecha: "2026-08-12 14:15", motivo: "Corte de uñas y vaciado de sacos",         diagnostico: "Procedimiento de rutina", estado: "FINALIZADA" },
  { _id: 10, id_mascota: 5, id_veterinario: 3, fecha: "2026-02-11 11:15", motivo: "Revision de dientes",                      diagnostico: "Tartaro dental severo", estado: "PENDIENTE" }
]);


// SERVICIOS
db.servicios.insertOne({
  _id: 1,
  nombre_servicio: "Consulta General",
  valor: 25000
});

db.servicios.insertMany([
  { _id: 2,  nombre_servicio: "Consulta Especialidad",             valor: 35000 },
  { _id: 3,  nombre_servicio: "Vacunación",                        valor: 18000 },
  { _id: 4,  nombre_servicio: "Desparasitación Interna/Externa",   valor: 12000 },
  { _id: 5,  nombre_servicio: "Profilaxis / Limpieza Dental",      valor: 65000 },
  { _id: 6,  nombre_servicio: "Cirugía Tejido Blando",             valor: 120000},
  { _id: 7,  nombre_servicio: "Cirugía Traumatológica",            valor: 180000},
  { _id: 8,  nombre_servicio: "Ecocardiograma",                    valor: 45000 },
  { _id: 9,  nombre_servicio: "Ecografía Abdominal",               valor: 38000 },
  { _id: 10, nombre_servicio: "Radiografía (2 Proyecciones)",      valor: 32000 },
  { _id: 11, nombre_servicio: "Examen Hematológico Completo",      valor: 22000 },
  { _id: 12, nombre_servicio: "Perfil Bioquímico",                 valor: 28000 },
  { _id: 13, nombre_servicio: "Corte de Uñas / Limpieza de Sacos", valor: 10000 },
  { _id: 14, nombre_servicio: "Curación / Sutura Menor",           valor: 20000 },
  { _id: 15, nombre_servicio: "Atención de Urgencia",              valor: 40000 }
]);


// MEDICAMENTOS
db.medicamentos.insertOne({
  _id: 1,
  nombre_medicamento: "Amoxicilina + Ácido Clavulánico 500/125mg"
});

db.medicamentos.insertMany([
  { _id: 2, nombre_medicamento: "Meloxicam 1mg/ml Suspensión Oral" },
  { _id: 3, nombre_medicamento: "Prednisona 5mg Comprimidos" },
  { _id: 4, nombre_medicamento: "Ketoprofeno 10mg Comprimidos" },
  { _id: 5, nombre_medicamento: "Tramadol 20mg/ml Gotas" },
  { _id: 6, nombre_medicamento: "Metronidazol 250mg Comprimidos" },
  { _id: 7, nombre_medicamento: "Doxiciclina 100mg Comprimidos" },
  { _id: 8, nombre_medicamento: "Enrofloxacino 50mg Comprimidos" },
  { _id: 9, nombre_medicamento: "Omeprazol 10mg Cápsulas" },
  { _id: 10, nombre_medicamento: "Cerenia (Maropitant) 16mg Comprimidos" }
]);


// TRATAMIENTOS
db.tratamientos.insertOne({
  _id: 1,
  id_atencion: 1,
  id_medicamento: 10,
  dosis: "1/2 comprimido",
  frecuencia: "Cada 24 horas",
  duracion: "3 dias",
  observaciones: "Monitorear tolerancia oral."
});

db.tratamientos.insertMany([
  { _id: 2,  id_atencion: 2,  id_medicamento: 9, dosis: "1 cápsula",         frecuencia: "Cada 24 horas", duracion: "7 dias", observaciones: "Administrar en ayunas." },
  { _id: 3,  id_atencion: 3,  id_medicamento: 3, dosis: "1 comprimido",      frecuencia: "Cada 12 horas", duracion: "14 dias", observaciones: "Ajustar dosis según evolución de prurito." },
  { _id: 4,  id_atencion: 4,  id_medicamento: 2, dosis: "0.5 ml",            frecuencia: "Cada 24 horas", duracion: "5 dias", observaciones: "Administrar con el alimento." },
  { _id: 5,  id_atencion: 5,  id_medicamento: 4, dosis: "1 comprimido",      frecuencia: "Cada 24 horas", duracion: "7 dias", observaciones: "Reposo estricto durante el tratamiento." },
  { _id: 6,  id_atencion: 7,  id_medicamento: 1, dosis: "3 gotas por oído",  frecuencia: "Cada 12 horas", duracion: "7 dias", observaciones: "Limpiar secreciones antes de aplicar." },
  { _id: 7,  id_atencion: 8,  id_medicamento: 2, dosis: "1 ml",              frecuencia: "Cada 24 horas", duracion: "5 dias", observaciones: "Evaluar peso semanalmente." },
  { _id: 8,  id_atencion: 10, id_medicamento: 6, dosis: "Aplicación tópica", frecuencia: "Cada 12 horas", duracion: "10 dias", observaciones: "Uso de cepillo suave." },
  { _id: 9,  id_atencion: 6,  id_medicamento: 5, dosis: "2 gotas",           frecuencia: "Cada 12 horas", duracion: "3 dias", observaciones: "Analgesia preventiva post-vacunación." },
  { _id: 10, id_atencion: 9,  id_medicamento: 8, dosis: "1/2 comprimido",    frecuencia: "Cada 24 horas", duracion: "5 dias", observaciones: "Profilaxis antibiótica post-limpieza de sacos." }
]);


// VACUNACIONES
db.vacunaciones.insertOne({
  _id: 1,
  id_mascota: 1,
  id_veterinario: 1,
  vacuna_aplicada: "Óctuple Canina",
  fecha_administracion: "2026-01-15",
  proxima_fecha_aplicacion: "2027-01-15"
});

db.vacunaciones.insertMany([
  { _id: 2, id_mascota: 8, id_veterinario: 2, vacuna_aplicada: "Antirrábica", fecha_administracion: "2026-03-12", proxima_fecha_aplicacion: "2027-03-12" },
  { _id: 3, id_mascota: 4, id_veterinario: 1, vacuna_aplicada: "Triple Felina", fecha_administracion: "2026-05-02", proxima_fecha_aplicacion: "2027-05-02" },
  { _id: 4, id_mascota: 2, id_veterinario: 4, vacuna_aplicada: "Óctuple Canina", fecha_administracion: "2026-06-15", proxima_fecha_aplicacion: "2027-06-15" },
  { _id: 5, id_mascota: 10, id_veterinario: 2, vacuna_aplicada: "Triple Felina", fecha_administracion: "2026-07-08", proxima_fecha_aplicacion: "2027-07-08" },
  { _id: 6, id_mascota: 7, id_veterinario: 3, vacuna_aplicada: "Séxtuple Canina", fecha_administracion: "2026-08-08", proxima_fecha_aplicacion: "2027-08-08" }
]);


// PAGOS
db.pagos.insertOne({
  _id: 1,
  id_atencion: 1,
  fecha: "2026-01-10",
  monto: 47000,
  medio_pago: "Efectivo",
  estado: "PAGADO"
});

db.pagos.insertMany([
  { _id: 2, id_atencion: 2,   fecha: "2026-01-12", monto: 25000, medio_pago: "Débito",   estado: "PAGADO" },
  { _id: 3, id_atencion: 3,   fecha: "2026-03-05", monto: 35000, medio_pago: "Crédito",  estado: "PENDIENTE" },
  { _id: 4, id_atencion: 4,   fecha: "2026-02-20", monto: 25000, medio_pago: "Efectivo", estado: "PAGADO" },
  { _id: 5, id_atencion: 5,   fecha: "2026-02-25", monto: 67000, medio_pago: "Crédito",  estado: "PENDIENTE" },
  { _id: 6, id_atencion: 6,   fecha: "2026-01-15", monto: 43000, medio_pago: "Efectivo", estado: "PAGADO" },
  { _id: 7, id_atencion: 7,   fecha: "2026-06-18", monto: 25000, medio_pago: "Débito",   estado: "PAGADO" },
  { _id: 8, id_atencion: 8,   fecha: "2026-01-22", monto: 25000, medio_pago: "Débito",   estado: "PAGADO" },
  { _id: 9, id_atencion: 9,   fecha: "2026-08-12", monto: 10000, medio_pago: "Débito",   estado: "PAGADO" },
  { _id: 10, id_atencion: 10, fecha: "2026-02-11", monto: 25000, medio_pago: "Crédito",  estado: "PENDIENTE" }
]);


// TRABAJADORES
db.trabajadores.insertOne({
  _id: 1,
  nombre: "Juan",
  apellido: "Perez",
  cargo: "Veterinario",
  sueldo: 1200000
});

db.trabajadores.insertMany([
  { _id: 2, nombre: "Pedro",    apellido: "Diaz",       cargo: "Veterinario",                 sueldo: 1250000},
  { _id: 3, nombre: "Jorge",    apellido: "Rodriguez",  cargo: "Veterinario",                 sueldo: 1200000},
  { _id: 4, nombre: "Marcela",  apellido: "Soto",       cargo: "Veterinario General",         sueldo: 1150000},
  { _id: 5, nombre: "Carlos",   apellido: "Silva",      cargo: "Cirujano Jefe",               sueldo: 1800000},
  { _id: 6, nombre: "Andres",   apellido: "Martinez",   cargo: "Especialista Dermatología",   sueldo: 1600000},
  { _id: 7, nombre: "Rodrigo",  apellido: "Sepulveda",  cargo: "Especialista Cardiología",    sueldo: 1700000},
  { _id: 8, nombre: "Manuel",   apellido: "Morales",    cargo: "Especialista Oncología",      sueldo: 1750000},
  { _id: 9, nombre: "Camila",   apellido: "Fernandez",  cargo: "Recepcionista",               sueldo: 550000 },
  { _id: 10, nombre: "Diego",   apellido: "Araya",      cargo: "Asistente Veterinario",       sueldo: 650000 },
  { _id: 11, nombre: "Sofia",   apellido: "Castro",     cargo: "Administrador de Clínica",    sueldo: 1400000},
  { _id: 12, nombre: "Gabriel", apellido: "Navarro",    cargo: "Peluquero Canino / Técnico",  sueldo: 600000 }
]);

print("--- Inserción de datos iniciales completada ---");


// 3. CONSULTAS (CONDORE)

//Consulta 1: busca todas las mascotas registradas en la veterinaria [basica]
print("\n--- Consulta 1: Todas las mascotas del sistema UwU ---");
printjson(db.mascotas.find().toArray());

// Consulta 2: busca  todas las mascotas  del propietario 4 muestrando solo nombre y raza [projection nomas]
print("\n--- Consulta 2: Mascotas del propietario 4 (solo nombre y raza) ---");
printjson(db.mascotas.find({ id_propietario: 4}, { _id:1, nombre:1, especie:1, peso:1, estado:1 }).toArray());


// Consulta 3: primer propietario llamado Pedro Muñoz muestra el id, telefono y correo [FIND ONE projection]
print("\n--- Consulta 3: propietario Pedro Muñoz (datos personales)---");
printjson(db.propietarios.findOne({ nombre: "Pedro", apellido: "Muñoz" },{ _id: 1, telefono: 1, correo: 1 }).toArray());

// Consulta 4: mascotas hospitalizadas o en tratamiento (id, propietario y estado) [filtro y projection]
print("\n--- Consulta 4: mascotas HOSPITALIZADO o TRATAMIENTO ---");
printjson(db.mascotas.find({ estado: { $in: ["HOSPITALIZADO", "TRATAMIENTO"] } },{ _id: 1, id_propietario: 1, estado: 1 }
).toArray());

// Consulta 5: Todos los servicios con precio mayor a 30000 pesos mostrar su (id, nombre y valor) [filtro y projection]
print("\n--- Consulta 5: Servicios con precio mayor a 30000 pesos ---");
printjson(db.servicios.find({ valor: { $gt: 30000 } },{ _id: 1, nombre_servicio: 1, valor: 1 }).toArray());








// 4. UPDATES

// 1/3
// Actualizacion de telefono y correo del propietario con el id 2
db.propietarios.updateOne({ _id: 2 },
  {$set: {
      telefono: "+56999887766",
      correo: "pedro.munoz.nuevo@gmail.com"
    }
  }
);

// 2/3
// Cambio de peso del gato de id 8 a 20kg
db.mascotas.updateOne({ _id: 8 },
  {$set: {
      peso: 20.00
    }
  }
);

// 3/3
// Cambio de estado de todos los gatos a "FALLECIDO"
db.mascotas.updateMany({ especie: "GATO" },
  {$set: {
      estado: "FALLECIDO"
    }
  }
);
