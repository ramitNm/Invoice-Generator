import React from 'react'

export default function ProfileMain() {

    const[vis,setVis] = React.useState(false);

    const[btnText,setBtnText] = React.useState("Saved Invoices");

    const[invoices, setInvoices]=React.useState([]);

    let session_data = localStorage.getItem('user')

    let key = session_data.slice(1,session_data.length-1)

    const fetchInvoice =async () => {
        let result = await fetch(`https://invoicery-back-end-production.up.railway.app/search/${key}`);

        result = await result.json();

        if(result){
            setInvoices(result);
        }

        btnText==="Saved Invoices"?setBtnText("Close"):setBtnText("Saved Invoices")

        if(vis){
            
            setVis(false)
        }
        else{
            setVis(true)
            
        }



        
    }

    
    const toggleVis = ()=>{
        if(vis){
            setVis(false)
        }
        else{
            setVis(true)
        }
    }


  return (
    <div className='profile-main'>

<div className='hello-text'>
<p>Hello, {key}</p>
    </div>
        <button className='view-invoice-btn' onClick={fetchInvoice} >{btnText}</button>
       
       
        {vis && <ul className='table-heading'>
            
            <li>Invoice Number</li>
            <li>Company</li>
            <li>Client Name</li>
            <li>Client Company</li>
        </ul>}


        {vis &&
            invoices.map((data)=>
                <ul key={data}>
            
            <li>{data.invoiceNumber}</li>
            <li>{data.companyName}</li>
            <li>{data.clientName}</li>
            <li>{data.clientCompany}</li>
        </ul>
            )
        }
    </div>
  )
}
