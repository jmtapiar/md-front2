export interface ReqResRespons {
    //   mensaje: string;
    data: ReqEmpre[];
    id: ReqEmpre['id'];
    activo: ReqEmpre['activo'];
}

interface ReqEmpre {
    id: number;
    representantelegal?:   string;
    cirepresentante?:   string;
    empresa?: string;
    direccione?: string;
    ruc?: string;
    fingreso?: Date;
    fsalida?: null;
    createdAt: Date;
    updatedAt: Date;
    emaile?: string;
    activo?:number;
}
