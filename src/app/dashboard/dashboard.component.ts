import { Component, OnInit } from '@angular/core';
import { Client } from '../common-ui-models/client';
import { TeamSummary } from '../common-ui-models/team-summary';
import { DashboardService } from '../common-ui-services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  TEAM_LEADER: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  value = 'Clear me';

  client:Client;
  teamSummary: TeamSummary;
  teamsummaryDisplay: Array<String>;


  constructor( private dashboardService :DashboardService) { 
    
  }
      
  ngOnInit() {
    this.TEAM_LEADER = 'Team Leader';
    // this.Username = 'John Smith';
    // this.NoOfTeamMembers = 67;
    // this.TotalCostOfAllProjects = 240;
    // this.PendingTasks = 15;
    // this.UpComingProjects = 2;
    // this.ProjectCost = 2113507;
    // this.CurrentExpenditure = 96788;
    // this.AvailableFunds = 52536;
    this.loadTeamSummary();
    

  }
  loadTeamSummary(){
    this.teamSummary= new TeamSummary();
    this.teamsummaryDisplay = new Array<String>();
    this.teamSummary = this.dashboardService.fetchTeamSummary();
    
    this.teamsummaryDisplay = Object.values(this.teamSummary);
    console.log(Object.values(this.teamsummaryDisplay));
  }

}
