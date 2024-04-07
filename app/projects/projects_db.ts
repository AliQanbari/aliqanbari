
export type Project = {
    name : string,
    tech : string[],
    area : string[],
}

export const projects : Project[] = [
    {
        name: 'Smart Power Plug',
        tech: ['Toit', 'Dart', 'Flutter', 'ESP32'],
        area: ['IoT', 'Mobile Development']
    },
    {
        name: 'Gator DB',
        tech: ['C++', 'CUDA'],
        area: ['Systems Programming', 'Parallel Proccessing']
    }
];