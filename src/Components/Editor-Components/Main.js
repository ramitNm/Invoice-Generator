import React from 'react';
import Pdf from "./Pdf";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { renderMatches } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function Main() {

    const userName = localStorage.getItem('user');

    //ITEMS START
    const [item, setItem] = React.useState({
        itemName: "", itemPrice: 0, itemQuantity: 0
    })

    function handleChange(event) {
        setItem(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const saveItems = async () => {

        let itemName = item.itemName;
        let itemQuantity = item.itemQuantity;
        let itemPrice = item.itemPrice;
        let invoiceNumber = formData.invoiceNumber;

        let res = await fetch('https://invoicery-back-end-production.up.railway.app/item', {
            method: 'post',
            body: JSON.stringify({ invoiceNumber, itemName, itemPrice, itemQuantity }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        setFormData(prev => {
            return {
                ...prev, count: Math.random() * 100

            }
        })

        setItem(prev=>{
            return{
                ...prev, itemName:""
            }
        })
    }
    //ITEMS OVER



    //FORM START

    const [formData, setFormData] = React.useState(
        { yourName: "", companyName: "", yourAddress: "", yourCity: "", yourEmail: "", yourPhone: "", accountNumber: "", bankName: "", bankBranch: "", clientName: "", clientEmail: "", clientPhone: "", clientCompany: "", clientAddress: "", clientCity: "", invoiceNumber: "", invoiceDate: Date, dueDate: Date,tax: 0, count: 0 }
    )


    const { register, handleSubmit, formState: { errors } } = useForm();




    const onSubmit = (data) => {
        console.log(data);

        setFormData({
            yourName: data.yourName, companyName: data.companyName, yourAddress: data.yourAddress, yourCity: data.yourCity, yourEmail: data.yourEmail, yourPhone: data.yourPhone, accountNumber: data.accountNumber, bankName: data.bankName, bankBranch: data.bankBranch, clientName: data.clientName, clientEmail: data.clientEmail, clientPhone: data.clientPhone, clientCompany: data.clientCompany, clientAddress: data.clientAddress, clientCity: data.clientCity, invoiceNumber: data.invoiceNumber, invoiceDate: data.invoiceDate, dueDate: data.dueDate, tax:data.tax
        });
        setFormData({
            yourName: data.yourName, companyName: data.companyName, yourAddress: data.yourAddress, yourCity: data.yourCity, yourEmail: data.yourEmail, yourPhone: data.yourPhone, accountNumber: data.accountNumber, bankName: data.bankName, bankBranch: data.bankBranch, clientName: data.clientName, clientEmail: data.clientEmail, clientPhone: data.clientPhone, clientCompany: data.clientCompany, clientAddress: data.clientAddress, clientCity: data.clientCity, invoiceNumber: data.invoiceNumber, invoiceDate: data.invoiceDate, dueDate: data.dueDate, tax:data.tax
        });

        console.log(formData);

        alert("DONE")
    }

    const collectData = async()=>{

        let yourName = formData.yourName;let companyName= formData.companyName;let address= formData.yourAddress;let city= formData.yourCity;let email= formData.yourEmail;let phoneNo= formData.yourPhone;let accountNo= formData.accountNumber;let bankName= formData.bankName;let bankBranch= formData.bankBranch;let clientName= formData.clientName;let clientEmail= formData.clientEmail;let clientPhone= formData.clientPhone;let clientCompany= formData.clientCompany;let clientAddress= formData.clientAddress;let clientCity= formData.clientCity;let invoiceNumber= formData.invoiceNumber;let invoiceDate= formData.invoiceDate;let dueDate= formData.dueDate;let tax = formData.tax;

        let result =await fetch('https://invoicery.herokuapp.com/invoice',{
            method:'post',
            body: JSON.stringify({userName,yourName, companyName, address, city, email, phoneNo, accountNo, bankName, bankBranch, clientName, clientEmail, clientPhone, clientCompany, clientAddress, clientCity, invoiceNumber, invoiceDate, dueDate,tax}),
            headers:{
              'Content-Type' : 'application/json'
            },
      
          })

          
    }



    return (
        <>
            <div className="main">
                <h1 className='form-heading'>Editor</h1>


                {/* FORM START*/}

                <Form className='form-layout' onSubmit={handleSubmit(onSubmit)}>

<div className="container">
                    <Form.Field className='grid-item'>
                        <label>Name</label>
                        <input
                            placeholder='Name' className="form-input"
                            type="text"
                            {...register("yourName", { required: true, maxLength: 25 })}
                        />
                        {errors.yourName && <p className='warning'>Please check the First Name</p>}
                    </Form.Field>





                    <Form.Field className='grid-item'>
                        <label>Company Name</label>
                        <input
                            placeholder='Company Name' className="form-input"
                            type="text"
                            {...register("companyName", { required: true, maxLength: 20 })}
                        />
                        {errors.companyName && <p className='warning'>Please check the Last Name</p>}
                    </Form.Field>





                    <Form.Field className='grid-item'>
                        <label>Address</label>
                        <input
                            placeholder='Address' className="form-input"
                            type="text"
                            {...register("yourAddress",
                                {
                                    required: true,

                                })}
                        />
                        {errors.yourAddress && <p className='warning'>Please check the Address</p>}
                    </Form.Field>






                    <Form.Field className='grid-item'>
                        <label>City</label>
                        <input
                            placeholder='City' className="form-input"
                            type="text"
                            {...register("yourCity", { required: true, maxLength: 15 })}
                        />
                        {errors.yourCity && <p className='warning'>Please check the City</p>}
                    </Form.Field>



                    <Form.Field className='grid-item'>
                        <label>Email</label>
                        <input
                            placeholder='Email'
                            className="form-input"
                            type="email"
                            {...register("yourEmail",
                                {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                        />
                        {errors.yourEmail && <p className='warning' style={{ width: "300px" }}>Please check the Email</p>}
                    </Form.Field>




                    <Form.Field className='grid-item'>
                        <label>Phone Number</label>
                        <input
                            placeholder='Phone Number' className="form-input"
                            type="number"
                            {...register("yourPhone", { required: true, maxLength: 25 })}
                        />
                        {errors.yourPhone && <p className='warning'>Please check the Phone Number</p>}
                    </Form.Field>



                    <Form.Field className='grid-item'>
                        <label>Account Number</label>
                        <input
                            placeholder='Account Number' className="form-input"
                            type="number"
                            {...register("accountNumber", { required: true, maxLength: 25 })}
                        />

                        {errors.accountNumber && <p className='warning'>Please check the Account Number</p>}
                    </Form.Field>

                    <Form.Field className='grid-item'>
                        <label>Bank Name</label>
                        <input
                            placeholder='Bank Name' className="form-input"
                            type="text"
                            {...register("bankName", { required: true, maxLength: 25 })}
                        />

                        {errors.bankName && <p className='warning'>Please check the Bank Name</p>}
                    </Form.Field>

                    <Form.Field className='grid-item'>
                        <label>Bank Branch</label>
                        <input
                            placeholder='Bank Branch' className="form-input"
                            type="text"
                            {...register("bankBranch", { required: true, maxLength: 25 })}
                        />

                        {errors.bankBranch && <p className='warning'>Please check the Bank Branch</p>}
                    </Form.Field>

                    <Form.Field className='grid-item'>
                        <label>Client Name</label>
                        <input
                            placeholder='Client Name' className="form-input"
                            type="text"
                            {...register("clientName", { required: true, maxLength: 25 })}
                        />

                        {errors.clientName && <p className='warning'>Please check the Client Name</p>}
                    </Form.Field>

                    <Form.Field className='grid-item'>
                        <label>Client Phone</label>
                        <input
                            placeholder='Client Phone' className="form-input"
                            type="number"
                            {...register("clientPhone", { required: true, maxLength: 25 })}
                        />
                        {errors.clientPhone && <p className='warning'>Please check the Client Phone</p>}
                    </Form.Field>



                    <Form.Field className='grid-item'>
                        <label>Client Email</label>
                        <input placeholder='Client Email'
                            className="form-input"
                            type="email"
                            {...register("clientEmail",
                                {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                        />
                        {errors.clientEmail && <p className='warning' style={{ width: "300px" }}>Please check the Client Email</p>}
                    </Form.Field>




                    <Form.Field className='grid-item'>
                        <label>Client Company</label>
                        <input
                            placeholder='Client Company' className="form-input"
                            type="text"
                            {...register("clientCompany", { required: true, maxLength: 25 })}
                        />
                        {errors.clientCompany && <p className='warning'>Please check the Client Company</p>}
                    </Form.Field>


                    <Form.Field className='grid-item'>
                        <label>Client Address</label>
                        <input
                            placeholder='Client Address' className="form-input"
                            type="text"
                            {...register("clientAddress", { required: true, maxLength: 25 })}
                        />
                        {errors.clientAddress && <p className='warning'>Please check the Client Address</p>}
                    </Form.Field>




                    <Form.Field className='grid-item'>
                        <label>Client City</label>
                        <input
                            placeholder='Client City' className="form-input"
                            type="text"
                            {...register("clientCity", { required: true, maxLength: 25 })}
                        />
                        {errors.clientCity && <p className='warning'>Please check the Client City</p>}

                    </Form.Field>


                    <Form.Field className='grid-item'>
                        <label>Invoice Number</label>
                        <input
                            placeholder='Invoice Number' className="form-input"
                            type="text"
                            {...register("invoiceNumber", { required: true, maxLength: 25 })}
                        />
                        {errors.invoiceNumber && <p className='warning'>Please check the Invoice Number</p>}
                    </Form.Field>



                    <Form.Field className='grid-item'>
                        <label>Invoice Date</label>
                        <input
                            placeholder='Invoice Date' className="form-input"
                            type="date"
                            {...register("invoiceDate", { required: true, maxLength: 25 })}
                        />
                        {errors.invoiceDate && <p className='warning'>Please check the Invoice Date</p>}
                    </Form.Field>



                    <Form.Field className='grid-item'>
                        <label>Due Date</label>
                        <input
                            placeholder='Due Date' className="form-input"
                            type="date"
                            {...register("dueDate", { required: true, maxLength: 25 })}
                        />
                        {errors.dueDate && <p className='warning'>Please check the Due Date</p>}
                    </Form.Field>



                    <Form.Field className='grid-item'>
                        <label>Tax</label>
                        <input
                            placeholder='Tax' className="form-input"
                            type="number"
                            {...register("tax", { required: true, maxLength: 25 })}
                        />
                        {errors.tax && <p className='warning'>Please check the Tax</p>}
                    </Form.Field>


                    







                    <Button type='submit' className='btn-scroll'>Done</Button>

                    

                </div>

                <div className='item-form'>
                    <div className='grid-item'>
                    <label>Item Name</label>
                    <input className="form-input" type='text' placeholder='Item Name' name='itemName' onChange={handleChange}> 

                    </input>
                    </div>

                    <div className='grid-item'>
                    <label>Price</label>
                    <input
                        className="form-input" type='number' placeholder='Price' name='itemPrice' onChange={handleChange}>

                    </input>
                    </div>
                    <div className='grid-item'>
                    <label>Quantity</label>
                    <input
                        className="form-input" type='number' placeholder='Quantity' name='itemQuantity' onChange={handleChange}>

                    </input>
                    </div>
                    

                </div>
                <button className='btn-scroll' onClick={saveItems}>Add item</button>
                </Form>

                








                {/* FORM END*/}
                <PDFDownloadLink className='PDFDownloadLink' document={<Pdf props={formData} />} fileName="pranav.pdf" onClick={() => { console.log('hi') }}>
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>



            </div>



            <button onClick={collectData} className='btn-scroll' style={{'margin-left':'40vw'}}>Save Data</button>


        </>


    );
}
