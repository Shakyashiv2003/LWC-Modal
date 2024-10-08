import { LightningElement, api } from 'lwc';

export default class Lwc_modalContent extends LightningElement 
{
    @api isOpen= false;
    @api modalTitle;
    @api modalContent;

    closeModal()
    {
        this.isOpen = false;
        const closeEvent = new customEvent ('close');
        this.dispatchEvent(closeEvent);
    }
}