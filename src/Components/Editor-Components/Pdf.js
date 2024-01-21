import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const Pdf = ({props}) => {
  console.log(props)

//api trial
const[invoices, setInvoices]=React.useState([]);
/*


*/
    console.log(props.count);

    async function fetchData(){
      let key = props.invoiceNumber;
      
      console.log(key);
      console.log('fetch data',key);
      let response =await fetch(`https://invoicery-back-end-production.up.railway.app/searchitem/${key}`);
      let result = await response.json();
      
   setInvoices(result);
    }


React.useEffect(()=>{
  console.log(props.count)
  fetchData();
  },[props.count])



 /* console.log(props)*/

  let totalCost = 0;

  invoices.map((data)=>{totalCost+=(data.itemPrice*data.itemQuantity)})
 
  let tax = props.tax;
  let grandTotal = totalCost + (totalCost * (tax/100));



     // Create styles
const styles = StyleSheet.create({
  page: {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    color:'black',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    width:100,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  invoiceHeading:{
    textAlign: 'right',
    fontSize: 40,
    marginBottom:20
  },
  rightText: {
    textAlign: 'right',
    fontSize: 14,
    color: 'black'
  },
  companyName:{
    textAlign: 'right',
    fontSize: 20,
    color: 'black'
  },
  leftText:{
    textAlign: 'left',
    fontSize: 14,
    color: 'black'
  }
});
  return (
   
  <Document>
    <Page size="A4" style={styles.page}>
    <Text style={styles.invoiceHeading}>Invoice</Text>
    
    <Text style={styles.companyName}>{props.companyName}</Text>
        <Text style={styles.rightText}>{props.yourName}</Text>
        
        <Text style={styles.rightText}>{props.address}</Text>
        <Text style={styles.rightText}>{props.city}</Text>
        <Text style={styles.rightText}>{props.email}</Text>
        <Text style={styles.rightText}>{props.phoneNo}</Text>

        <section style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
          <section>
            <Text style={styles.leftText}>Bill To:</Text>
        <Text style={styles.leftText}>Name:   {props.clientName}</Text>
        <Text style={styles.leftText}>E-mail: {props.clientEmail}</Text>
        <Text style={styles.leftText}>Phone:  {props.clientPhone}</Text>
        <Text style={styles.leftText}>Company:{props.clientCompany}</Text>
        <Text style={styles.leftText}>Address:{props.clientAddress}</Text>
        <Text style={styles.leftText}>City:   {props.clientCity}</Text>
        </section>
        <section style={{marginTop:30}}>
          <Text>Invoice no.: {props.invoiceNumber}</Text>
          <Text>Date:        {props.invoiceDate}</Text>
          <Text>Due Date:    {props.dueDate}</Text>

        </section>
        </section>



      <section style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
        <Text>Name</Text>
        <Text>Quantity</Text>
        <Text>Price</Text>
        <Text>Total</Text>
      </section>

     

      

      {
            invoices.map((data)=>
            
            (
            
            <ul key={data}>
            <section style={{flexDirection:'row',justifyContent:'space-between'}}>
            
            <Text>{data.itemName}</Text>
            <Text>{data.itemQuantity}</Text>
            <Text>{data.itemPrice}</Text>
            <Text>{data.itemPrice*data.itemQuantity}</Text>
            </section>
      
        </ul>
        
            )
            )
        }

<section style={{textAlign:'right',marginTop:50}}>
        <Text>Tax                 {tax}%</Text>
        <Text>Grand Total   {grandTotal} Rs</Text>
      </section>

      
      
    </Page>
  </Document>

  );
}

export default Pdf;
