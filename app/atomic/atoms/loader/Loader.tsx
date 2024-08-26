import './loader.css'

const Loader = () => {
    return (
        <section className='absolute top-[50%] left-[50%]'>
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </section>
    )
}

export default Loader
