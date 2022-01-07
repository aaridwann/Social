import React from "react";

function Rp(a){
  return "Rp. " + a.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export default function Invoice() {

    const data = {
        name:'Zakia Munawarman',
        address : 'Cilegon,Street',
        items:[{id: 1,name:'Wedding Gold',quantity :4,description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',price:4500000},
                {id: 2,name:'Wedding Classic',quantity :1,description:'officiis debitis aut rerum necessitatibus saepe eveniet ',price:8600000}],
        total: function (){
          return this.items.map((a) => a.price).reduce((a,b) => a+b)
        }, 
        discount: 1200000,
        grandTotal: () => data.total() - data.discount
    }
      console.log(data.items.map((a) => a.name));
  return (
    <div className='container flex flex-col items-center xl:w-4/12 lg:w-96 sm:w-80 h-5/6 border-2 border-gray-300 mx-auto overflow-hidden'>
    <title>Invoice</title>
      <div
        className='bg-top flex flex-col items-center w-full h-40 bg-cover bg-no-repeat'
        style={{
          backgroundImage: "url(../assets/invoice/Head.png)",
          backgroundSize: "900px 160px",
        }}>
        <h1 className=' mb-6 text-3xl text-white font-bold tracking-widest text-center'>
          ......
        </h1>
        <div className='flex justify-between w-10/12 items-center'>
          <img
            className=' rounded-full'
            src='../assets/img/Logo Pink.jpg'
            width='50'
            height='50'
            alt='he'
          />
          <h1 className='text-white tracking-wider font-bold text-4xl font-[Yantramanav] '>
            INVOICE
          </h1>
        </div>
      </div>

      <section className='flex justify-between w-10/12 text-xs xl:mt-20 mt-14 text-gray-600 items-center '>
        <div className=' text-left '>
          <p>Invoice No: 000-00234</p>
          <p className='font-bold'>Date: 20/10/2021</p>
        </div>
        <div className=' text-right '>
          <p>
            Invoice To: <span className='font-bold'>{data.name}</span>
          </p>
          <p>{data.address}</p>
        </div>
      </section>
      <main className='flex flex-col items-center justify-center xl:mt-28 mt-10 w-11/12'>
        <table className='table-auto w-full lg:text-base text-xs'>
          <thead className='bg-pink-tua text-white rounded-3xl'>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Dscription</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className='text-gray-500'>
          {data.items.map((a,i) => (
            <tr className=" border-b border-gray-300 text-center ">
              <td key={a.id}>{i+1}</td>
              <td>{a.name}</td>
              <td className=" w-10">{a.quantity}</td>
              <td className=" w-80 text-left px-4 ">{a.description}</td>
              <td>{Rp(a.price)}</td>
            </tr>
            ))} 
          </tbody>
        </table>
        <div className="flex flex-col xl:gap-8">
            <div className="flex justify-between items-center w-full text-gray-600 text-right mt-4 gap-5 ">
                    <div className='text-justify w-5/12 lg:text-base text-xs'>
                        <h1 className='font-bold'>Lorem Ipsum is simply dummy text</h1>
                        <p className=" text-xs font-semibold">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                        </p>
                    </div>
                    <div className='xl:text-base text-sm self-start xl:self-center '>
                        <p>SUB TOTAL: <span className=" font-bold ">{Rp(data.total())}</span></p>
                        <p className='border-b-2 border-gray-400 '>DISCOUNT: <span  className=" font-bold ">{Rp(data.discount)}</span></p>
                        <p  >GRAND TOTAL: <span  className=" font-bold ">{Rp(data.grandTotal())}</span></p>
                    </div>
            </div>
            <div className="flex justify-between mt-20 items-center w-full text-gray-600 text-right ">
            <div className="text-justify w-5/12">
                <h1 className=" font-semibold ">Payment Information</h1>
                <p className=" font-bold">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
            <div>
                <p className=" border-t-2 px-14 border-gray-500 ">SIGNATURE</p>
            </div>
            </div>
        </div>
      </main>

      <footer className="bg-left-top items-center gap-4 mt-14 md:mt-28 bg-no-repeat xl:bg-auto bg-cover bottom-0 xl:w-full w-full lg:bg-transparent sm:bg-matcha-light xl:px-10 px-2 xl:p-8 p-0 flex xl:flex-row flex-col "
        style={{backgroundImage:"url(../assets/invoice/Footer.png)", backgroundSize:'800px 90px'}}
      >
            <logo className='flex gap-4 items-center '>
            <img alt='a' src='../assets/invoice/Group 15.svg' width='40px'/>
            <img alt='a' src='../assets/invoice/Group 17.svg' width='40px'/>
            <img alt='a' src='../assets/invoice/Group 19.svg' width='40px'/>
            <img alt='a' src='../assets/invoice/Group 20.svg' width='40px'/>
            </logo>
            <div className="flex gap-4 text-white font-semibold">
                <span className="flex flex-col items-center justify-center">Phone<p>0821-221-69-688</p></span>
                <p className=" border-x-2 border-gray-500  px-8">Address</p>
                <p>Website</p>
            </div>
      </footer>
    </div>
  );
}
