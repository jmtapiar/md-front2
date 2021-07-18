export interface ReqResRespons {
    //   mensaje: string;
    data: ReqEmpre[];
    id: ReqEmpre['id'];
}

interface ReqEmpre {
    id: number;
    nombre1e?: string;
    nombre2e?: string;
    apellido1e?: string;
    apellido2e?: string;
    empresa?: string;
    direccione?: string;
    ruc?: string;
    fingreso?: Date;
    fsalida?: null;
    createdAt: Date;
    updatedAt: Date;
    emaile?: string;
}
