import { Injectable } from '@nestjs/common';

import { scd40 } from './entities/scd40.entity'

@Injectable()
export class Scd40Service {
    private contador = 2;
    private scd40data: scd40[] = [];

    findAll() {
        return this.scd40data;
    }

    findOne(id: number){
        console.log(id);
        return this.scd40data.find((item) => item.id === id);
    }
    
    create(data: any){
        this.contador = this.contador + 1;
        const newData = {
            id: this.contador,
            ...data,
            fecha: new Date()
        };
        this.scd40data.push(newData);
        return newData
    };

    update(id: number, data: any) {
        const dataSensor = this.findOne(id);
        if (dataSensor) {
            const index = this.scd40data.findIndex((item) => item.id == id);
            this.scd40data[index] = {
                ...dataSensor,
                ...data,
            };
            return this.scd40data[index]
        };
        return null;
    }

    remove(id: number) {
        const index = this.scd40data.findIndex((item) => item.id === id);
        if(index === -1){
            return false
        }
        this.scd40data.splice(index, 1);
        return true
    }
}
