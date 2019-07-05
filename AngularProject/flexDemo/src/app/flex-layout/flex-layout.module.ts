import { NgModule } from '@angular/core';
import { FlexLayoutRoutingModule } from './flex-layout-routing.module';
import { FlexLayoutComponent } from '../flex-layout/flex-layout.component';
import { AppCommonModule } from '../appCommon.module';
import { ContainerPropComponent } from './container-prop/container-prop.component';
import { ItemPropComponent } from './item-prop/item-prop.component';


@NgModule({
    declarations: [
        FlexLayoutComponent,
        ContainerPropComponent,
        ItemPropComponent,
    ],
    imports: [
        AppCommonModule,
        FlexLayoutRoutingModule,
    ]
})
export class FlexLayoutModule { }
