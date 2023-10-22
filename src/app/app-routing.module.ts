import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FirstgenComponent } from "./firstgen/firstgen.component";
import { SecondgenComponent } from "./secondgen/secondgen.component";
import { ThirdgenComponent } from "./thirdgen/thirdgen.component";
import { FourthgenComponent } from "./fourthgen/fourthgen.component";
import { FifthgenComponent } from "./fifthgen/fifthgen.component";
import { BreakdownComponent } from "./breakdown/breakdown.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "firstgen", component: FirstgenComponent},
    {path: "secondgen", component: SecondgenComponent},
    {path: "thirdgen", component: ThirdgenComponent},
    {path: "fourthgen", component: FourthgenComponent},
    {path: "fifthgen", component: FifthgenComponent},
    {path: "breakdown", component: BreakdownComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
