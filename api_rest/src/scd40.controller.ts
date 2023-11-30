import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Scd40Service } from './scd40.service'

@Controller('scd40')
export class Scd40Controller {
    constructor(private scd40Service: Scd40Service){}

    @Get()
    getDataScd40(){
        return this.scd40Service.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.scd40Service.findOne(+id)
    }

    @Post()
    create(@Body() data: any){
        return this.scd40Service.create(data)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any){
        return this.scd40Service.update(+id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.scd40Service.remove(+id)
    }
}
