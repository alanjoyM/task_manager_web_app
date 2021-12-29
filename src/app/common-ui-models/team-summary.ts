import { Client } from "./client";

export class TeamSummary {

    teamLeader: string;

    summeryCode:string; 

    noOfMembers:number;

    totalCost: number;

    pendingTasks:number;

    totalTasks: number;

    upcomingProjects:number;

    clients: Array<Client>;

    errorCode: string;

    errorMessage:string;

}
