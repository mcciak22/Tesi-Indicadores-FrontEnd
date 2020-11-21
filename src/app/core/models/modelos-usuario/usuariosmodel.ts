export class UsuariosModel{
    ok: boolean;
    usuarios: Usuario[];
}
export interface UsuarioModel{
    ok: boolean;
    usuario: Usuario;
}

interface Usuario{
    id_uduario: number;
    Nombre: string;
    Apellidos: string;
    Email: string;
    Rol: string;
    Foto: string;
    Carrera: string;
    Fecha_de_Creacion: string;
    Fecha_de_Actualizacion: string;
}
