import React from 'react';
import Pdf from "./Pdf";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { renderMatches } from 'react-router-dom';

export default function Main() {

    const userName = localStorage.getItem('user');
   

   
    const [formData, setFormData] = React.useState(
        { yourName: "", companyName: "", address: "", city: "", email: "", phoneNo: "", accountNo: "", bankName: "", bankBranch: "", clientName: "", clientEmail: "", clientPhone: "", clientCompany: "", clientAddress: "", clientCity: "", invoiceNumber: "", invoiceDate: Date, dueDate: Date, itemName : "",itemPrice: 0,itemQuantity: 0,tax: 0}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    //API 

let yourName = formData.yourName;let companyName= formData.companyName;let address= formData.address;let city= formData.city;let email= formData.email;let phoneNo= formData.phoneNo;let accountNo= formData.accountNo;let bankName= formData.bankName;let bankBranch= formData.bankBranch;let clientName= formData.clientName;let clientEmail= formData.clientEmail;let clientPhone= formData.clientPhone;let clientCompany= formData.clientCompany;let clientAddress= formData.clientAddress;let clientCity= formData.clientCity;let invoiceNumber= formData.invoiceNumber;let invoiceDate= formData.invoiceDate;let dueDate= formData.dueDate;let itemName= formData.itemName;let itemPrice=formData.itemPrice;let itemQuantity=formData.itemQuantity;

    const collectData = async()=>{

        let result =await fetch('http://localhost:5000/invoice',{
            method:'post',
            body: JSON.stringify({userName,yourName, companyName, address, city, email, phoneNo, accountNo, bankName, bankBranch, clientName, clientEmail, clientPhone, clientCompany, clientAddress, clientCity, invoiceNumber, invoiceDate, dueDate}),
            headers:{
              'Content-Type' : 'application/json'
            },
      
          })

          let res = await fetch('http://localhost:5000/item',{
            method:'post',
            body: JSON.stringify({invoiceNumber,itemName ,itemPrice,itemQuantity}),
            headers:{
              'Content-Type' : 'application/json'
            },
          })
    }


    return (
        <>
            <div className="main">
                <h1 className='form-heading'>Editor</h1>
                <form className="container">

                    <div className="grid-item">
                        <p>Name</p>
                        <input type="text" name="yourName" onChange={handleChange} className="form-input" required/>
                    </div>
                    <div className="grid-item">
                        <p>Company Name</p>
                        <input type="text" name="companyName" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="grid-item">
                        <p>Address</p>
                        <input type="text" name="address" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="grid-item">
                        <p>City</p>
                        <input type="text" name="city" onChange={handleChange} className="form-input" required/>
                    </div>
                    <div className="grid-item">
                        <p>E-mail</p>
                        <input type="email" name="email" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="grid-item">
                        <p>Phone No.</p>
                        <input type="number"  name="phoneNo" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="grid-item">
                        <p>Account No.</p>
                        <input type="number" name="accountNo" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="grid-item">
                        <p>Bank Name</p>
                        <input type="text" className="form-input" name="bankName" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Bank Branch</p>
                        <input type="text" className="form-input" name="bankBranch" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Client Name</p>
                        <input type="text" className="form-input" name="clientName" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Client Email</p>
                        <input type="email" className="form-input" name="clientEmail" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Client Phone</p>
                        <input type="number" className="form-input" name="clientPhone" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Client Company</p>
                        <input type="text" className="form-input" name="clientCompany" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Client Address</p>
                        <input type="text" className="form-input" name="clientAddress" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Client City</p>
                        <input type="text" className="form-input" name="clientCity" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Invoice Number</p>
                        <input type="number" className="form-input" name="invoiceNumber" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Invoice Date</p>
                        <input type="date" className="form-input" name="invoiceDate" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Due Date</p>
                        <input type="date" className="form-input" name="dueDate" onChange={handleChange} />
                    </div>


                    

                    <div className="grid-item">
                        <p>Item Name</p>
                        <input type="text" className="form-input" name="itemName" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Price</p>
                        <input type="text" className="form-input" name="itemPrice" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Quantity</p>
                        <input type="text" className="form-input" name="itemQuantity" onChange={handleChange} />
                    </div>
                    <div className="grid-item">
                        <p>Tax</p>
                        <input type="text" className="form-input" name="tax" onChange={handleChange} />
                    </div>



                    <button className='btn-scroll' >Add item</button>

                    <button className='btn-scroll' onClick={()=>{setValid(true)}}>Download</button>
                </form>

                
   
    <PDFDownloadLink className='PDFDownloadLink' document={<Pdf props={formData} />} fileName="pranav.pdf" onClick={()=>{console.log('hi')}}>
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>
             
                

            </div>

            <button className='btn-scroll' onClick={collectData}></button>


        </>


    );
}
