export interface Task {
    id: string;
    title: string;
    description: string;
    createdBy: string;
    priority: "high" | "medium" | "low";
    dueDate: string;
    columnId: string;
    position: number;
}

export interface Column {
    id: string;
    title: string;
    boardId: string;
    position: number;
}

export interface Board {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    createdBy: string;
}