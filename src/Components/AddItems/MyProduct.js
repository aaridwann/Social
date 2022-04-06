import { React, useEffect, useState } from "react";

export default function MyProduct(props) {
  const [btnPrev, setBtnPrev] = useState(false);
    const [modalProduct, setModalProduct] = useState(false)
  function next() {
    const element = document.getElementById("productList");
    element.scrollBy(300, 0);
    console.log(element.scrollX);
    setBtnPrev(true);
  }
  function prev() {
    document.getElementById("productList").scrollBy(-300, 0);
  }
  return (
    <>
      <h1 className='p-2 animate-pulse bg-gradient-to-r flex justify-between items-center border-0 transition duration-500 from-orange-300 to-slate-300 font-bold text-2xl '>
        Products{" "}
        <input
          placeholder='Search product'
          type='text'
          className=' text-slate-500 focus:border-0 focus:ring-0 float-right text-sm items-center px-4 mr-4 rounded-extra w-52'
        />
      </h1>

      <div className='flex mt-2 gap-2 mx-4 items-center text-slate-500'>
        <select className='select select-bordered bg-transparent border-slate-400 select-xs w-44 max-w-xs'>
          <option disabled='disabled' value='selected'>
            Category
          </option>
          <option>Wedding</option>
          <option>Prewedding</option>
          <option>Engagement</option>
        </select>
      </div>

      <div className=' -mt-12 flex flex-row items-center justify-center mx-auto w-full h-full'>
        <div
          id='productList'
          className='  mx-auto snap-x scroll-smooth overflow-x-scroll grid grid-flow-col items-center gap-4 w-9/12 px-4'>
          <div className=' h-52 w-72 snap-center rounded-r-2xl shadow-2xl bg-slate-100 text-slate-500 flex flex-col items-center gap-2'>
            <h1 className='font-bold shadow-lg bg-slate-300 -ml-6 rounded-r-xl pl-2 mt-2 w-11/12'>
              Wedding Classics
            </h1>
            <div className='flex flex-row items-center gap-2 w-full h-full'>
              <div className='h-full w-9/12 flex flex-col justify-center items-center '>
                <div className='bg-yellow-800 rounded-r-2xl h-full flex items-center w-full overflow-hidden'>
                  <img
                    src='https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600__480.jpg'
                    alt='test'
                    width='full'
                  />
                </div>
                <p className='text-center font-bold h-2/6 w-full'>
                  Rp.12.000.000
                </p>
              </div>

              <div className='w-3/12 text-left pb-3 h-full gap-1 flex flex-col items-center justify-center'>
                <p className=' border-l p-1 border-slate-400 w-16 text-sm text-clip overflow-hidden h-28'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem
                </p>
                <button className='btn text-slate-500 hover:border-0 hover:bg-slate-300 hover:text-slate-100 btn-xs bg-transparent border-1 border-slate-300'>
                  More
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={next}
            className='absolute right-36 bg-slate-100 px-4 py-2 font-bold text-lg rounded-full text-gray-500'>
            Next
          </button>
          {btnPrev && (
            <button
              onClick={prev}
              className='absolute  bg-slate-100 px-4 py-2 font-bold text-lg rounded-full text-gray-500'>
              Prev
            </button>
          )}
        </div>

        <button
         onClick={() => setModalProduct(!modalProduct)}
          className='w-3/12 text-slate-400 border border-slate-300 hover:from-slate-200 transition-all duration-1000 bg-gradient-to-tr from-slate-300 shadow-xl text-2xl font-bold to-slate-200 h-64 rounded-bl-extra rounded-tl-extra flex items-center justify-center'>
          Add Items
        </button>
      </div>

      {/* Modal Add Products */}
{/* <div className="mx-auto w-full justify-center flex items-center"> */}
      <div id='modal' className={` ${modalProduct ? `opacity-100`:`opacity-0`} w-96 transition duration-500 h-fit py-8 text-slate-500 rounded-3xl bg-slate-100 absolute mx-auto top-20 shadow-xl flex flex-col justify-center items-center gap-2  `}>
                <button onClick={() => setModalProduct(!modalProduct)} className="absolute top-0 right-0 btn btn-primary btn-sm m-4 ">Close</button>
            <h1 className=" text-3xl font-bold">Add Products</h1>
            
            <form className=" w-full py-4 h-4/5 border-2 mx-auto flex items-center justify-center flex-col gap-2">
                <label>Product Name</label><input className='input input-ghost input-sm' type='text'/>
                <label>Product Price</label><input className='input input-ghost input-sm' type='text'/>
                <label>Product Category</label><select className='input input-ghost input-sm' type='text' >
                    <option>Wedding</option>
                    <option>Prewedding</option>
                    <option>Engagement</option>
                </select>
                <label>Product Description</label><textarea className=' textarea-ghost  textarea h-2/5' type='text-area'/>
                <label>Product Image</label><input type='file'/>
                <button className=" btn btn-outline btn-success btn-sm mt-3">Submit</button>
            </form>
            
      {/* </div> */}
// </div>

    </>
  );
}
