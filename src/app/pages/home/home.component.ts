import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { InvestmentComponent } from '@components/investment/investment.component';
import { ServicesComponent } from '@components/services/services.component';
import { PartnersComponent } from '@components/partners/partners.component';
import { RegistrationComponent } from "@components/registration/registration.component";
import { FooterComponent } from "@components/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        InvestmentComponent,
        ServicesComponent,
        PartnersComponent,
        RegistrationComponent,
        FooterComponent,
    ]
})
export class HomeComponent {}
