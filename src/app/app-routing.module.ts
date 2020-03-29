import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    
    children: [
      { path: '', component: AboutMeComponent, data:{title:'About Me'} },
      { path: 'portfolio', component: PortfolioComponent, data:{title:'Portfolio'} },
      { path: 'resume', component: ResumeComponent, data:{title:'Resume'} },
      { path: 'contact', component: ContactComponent, data:{title:'Contact'} },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
