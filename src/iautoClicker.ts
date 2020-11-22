
interface IautoClicker {
    name: string;
    level: number;
    multiplier: number;
    price: number;
    gainValue: number;
    isActive: boolean;
    render(): HTMLElement;
    getGainValue() : number;
}

export{IautoClicker}