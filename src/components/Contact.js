const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="phone"/>
                <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
