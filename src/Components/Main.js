import axios from 'axios'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';



import '../App.css'
const Main = () => {

    const [ecomdata, Setecomdata] = useState([])
    const [category, Setcategory] = useState([])
    const [catdata, Setcatdata] = useState()
    const [pics, Setpics] = useState([])





    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')

            .then((res) => {
                Setecomdata(res.data)
                Setpics(res.data)
                toast.success('products Loaded')


            })
            .catch((error) => console.log(error))
        toast.error('something went wrong')
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                Setcategory(res.data)



            })
            .catch((error) => console.log(error))


    }, [])

    const handleFilter = (data) => {
        console.log(data)
        Setecomdata(pics.filter((d) => d.category === data))
    }

    const handleDelete = (id) => {
        Setecomdata(ecomdata.filter((d, index) => index !== id))
        toast.success('Product Removed')
    }




    return (
        <div className='container'>
            <div style={{ marginTop: '1em' }} className='row d-flex flex-wrap justify-content-evenly'>

                <div className='col-1'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                    <a href='#' style={{ textDecoration: "none" }}>Grocery</a>

                </div>
                <div className='col-2'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href='#' style={{ textDecoration: "none" }}>Mobiles</a>


                </div>
                <div className='col-3'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>Fashion</a>

                </div>
                <div className='col-4'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>Electronics</a>

                </div>
                <div className='col-5'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>Home&Furniture</a>

                </div>
                <div className='col-6'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>Appliances</a>

                </div>
                <div className='col-7'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>Travel</a>

                </div>
                <div className='col-8'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>mobile</a>

                </div>
                <div className='col-9'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>Top Offers</a>

                </div>
                <div className='col-10'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <a href='#' style={{ textDecoration: "none" }}>TwoWheelers</a>

                </div>

            </div>

            <div id="carousel" className="carousel slide d-flex flex-wrap justify-content-center">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img style={{height:'270px'}}  src="https://popphoto.com/uploads/2021/09/16/two-lenses-on-iPhone-13-and-13-mini-2048x817.jpg" className="d-block w-100" alt="Slide 1"></img>
                       
                    </div>
                    <div className="carousel-item">
                        <img style={{height:'270px'}} src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/iphone_wide_lens.jpg?itok=1eLQO9z1" className="d-block w-100" alt="Slide 2"></img>
                        
                    </div>
                    <div className="carousel-item">
                        <img style={{height:'270px'}}  src="https://www.popphoto.com/uploads/2021/09/16/iphone-13-and-13-mini-specs-2048x1145.png" className="d-block w-100" alt="Slide 3"></img>
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span ClassName="visually-hidden">Next</span>
                </button>
            </div>

            <Toaster />
            <select className='form-select-sm me-2' style={{ marginTop: '2em' }} value={catdata} defaultValue='None' onChange={(e) => Setcatdata(e.target.value)}>

                <option>None</option>

                {
                    category && category.map(d =>
                        <option>{d}</option>)
                }


            </select>
            <button className='btn btn-primary btn-md me-1' onClick={() => handleFilter(catdata)}>Filter</button>
            <button className='btn btn-danger btn-md' onClick={() => {
                Setecomdata(pics)
                Setcatdata('')
            }}>X</button>





            <div style={{ border: '1px solid', borderWidth: '6px', marginTop: '2em' }} className="d-flex flex-wrap justify-content-center">



                {ecomdata.map((d, index) =>



                    <div key={d.id} className='my-5 ' style={{ height: '250px', width: "250px", }}>

                        <img className='prods' style={{ height: '200px', width: '200px', }} src={d.image}>


                        </img>
                        <h5>{d.category}</h5>
                        <button onClick={() =>
                            handleDelete(index)
                        } className='btn btn-sm btn-danger'>X</button>





                    </div>

                )}


            </div>

        </div>
    )
}

export default Main