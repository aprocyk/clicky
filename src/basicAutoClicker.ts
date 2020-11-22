import {IautoClicker} from './IautoClicker'

class basicAutoClicker implements IautoClicker {

    name: string;
    level: number;
    multiplier: number;
    price: number;
    gainValue: number;
    isActive: boolean;
    button: HTMLElement;

    constructor(name: string, multiplier: number, price: number){
        this.name = name;
        this.multiplier = multiplier;
        this.button = document.createElement('button');
        this.level = 0;
        this.gainValue = this.level * this.multiplier;
        if(this.level = 0){
            this.price = price;
        } else {
            this.price = price * (this.level + 1);
        }
        this.isActive = false;
    }

    render(): HTMLElement{
        this.button.id = this.name;
        this.button.innerText = this.name + 'lvl: ' + this.level;
        this.button.addEventListener('click',(e) => {
            this.level++;
        });

        return this.button;
    }
    getGainValue(): any{
        return this.gainValue;
    }

}

export {basicAutoClicker};