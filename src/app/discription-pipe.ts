import {Pipe, PipeTransform} from '@angular/core'
import { isConstructSignatureDeclaration } from 'typescript';

@Pipe({
    name:'desc'
})

export class DiscriptionPipe implements PipeTransform{

    transform(value: any,arg1:string,arg2:number):any{
        
        let outputString:string = arg1+ " is a very good medicine that costs Rs "+arg2+ " (INR)";
        return outputString;

    }
}
