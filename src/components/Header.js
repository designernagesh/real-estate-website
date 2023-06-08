import Navbar from "./Navbar";

const Header = () => {
    return (
        <section className="header">
            <Navbar />
            
            <div className="intro">
                <p>Looking for a Property!</p>
                <h1><span>Buy</span> and <span>Sell</span> Properties</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, eros a dapibus ullamcorper, arcu purus accumsan nunc, nec imperdiet leo lacus sit amet urna. Etiam eu ornare tellus.</p>
                <a href="#" className="header-btn">Details</a>
            </div>
        </section>
    )
}

export default Header;
