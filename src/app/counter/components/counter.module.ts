import { NgModule } from "@angular/core"
import { CounterComponet } from "./counter.componet"
        

@NgModule({
    declarations:[
        CounterComponet
    ],
    exports:[
        CounterComponet
    ]
})

export class CounterModule{
    
}

