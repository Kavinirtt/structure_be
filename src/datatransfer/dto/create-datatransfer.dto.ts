import { ApiProperty } from "@nestjs/swagger";

export class CreateDatatransferDto {
    @ApiProperty()
   
    name: string = '';
 
}
