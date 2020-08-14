import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/checklists", pathMatch: "full" },
  { path: "checklists", loadChildren: "./home/home.module#HomePageModule" },
  { path: "checklists/:id", loadChildren: "./checklist/checklist.module#ChecklistPageModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
