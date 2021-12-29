import { Injectable } from '@angular/core';
import { Client } from '../common-ui-models/client';
import { TeamSummary } from '../common-ui-models/team-summary';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  client:Client;
  teamSummary: TeamSummary;

  constructor() { 
    
  }

  fetchTeamSummary():TeamSummary{
    let summary: TeamSummary = new TeamSummary();

    summary.teamLeader = "John Smith";
    summary.noOfMembers = 67;
    summary.totalCost = 240000;
    summary.pendingTasks = 15;
    summary.totalTasks =90;
    summary.upcomingProjects =2;
    return summary;
  }
}
