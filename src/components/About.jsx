const About = () => {
    return (
        <div className="flex flex-col items-center justify-center h-calc-100vh-minus-80px">
            <div className="w-full h-[40%] ">
                <h2 className="text-3xl leading-8 md:text-5xl md:leading-normal"> Hey Doonite !</h2>
                <h2 className="text-2xl leading-7 md:text-3xl md:leading-normal">Confused about What to order?</h2>
                <h4 className="text-2xl leading-7 md:text-3xl md:leading-normal">Dont worry, we got you😉</h4>
                <div className="mt-1">
                    <p className="leading-5 mt-1">➡️List of 25+ handpicked , top rated restaurants for you to choose from</p>
                    <p className="leading-5 mt-1">➡️Additional filters to further filter out top rated takeaway centres</p>
                    <p className="leading-5 mt-1">➡️Search your favourite restaurant by name if it gets a place in our list👀</p>
                </div>
            </div>
            <div className="bg-blue-500 w-full h-[60%] object-cover">
                <img className="w-full h-full" src="https://images.unsplash.com/photo-1550918873-fa384ac606e6?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <button>i</button>
            <button>i</button>
        </div>
    )
}
export  default About;