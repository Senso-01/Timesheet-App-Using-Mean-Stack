// project.model.ts
export interface Project {
    _id: string;
    name: string;
    client: string;
    address: string;
    department: string;
    businessUnit: string;
    type: 'Internal' | 'External';
}
