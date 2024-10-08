import { LightningElement, track } from 'lwc';

export default class Lwc_dataTableComponent_for_Modal extends LightningElement 
{
    @track data =[
        { id: '1', name: 'Shiv Kumar Shakya', email:'shivshakya.lnb@gmail.com'},
        { id: '2', name: 'Gauri Shankar', email:'gorishankar26agra@gmail.com'},
        { id: '3', name: 'Deepika', email:'shakyashweta321@gmail.com'}
    ];

    @track columns = [
        { label:'Name', fieldName:'name', type:'text'},
        {label:'Email', fieldName:'email', type:'email'},
        {
        
           type:'button',
           typeAttributes: {
            label:'View Details',
            name:'view_details',
            title:'View Details',
            variant:'brand'
           } 
        }
    ];

    @track isModalOpen = false;
    @track modalTitle ='';
    @track modalContent = '';


    handleRowAction(event)
    {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName)
        {
            case 'view_details':
                this.modalTitle = 'Detail for : ' + row.name;
                this.modalContent = 'Email : ' + row.email;
                this.isModalOpen = true;
                break;
            default:
                break;
        }
    }

    handleModalClose()
    {
        this.isModalOpen = false;
    }
}