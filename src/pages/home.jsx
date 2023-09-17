import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function Home() {
    return (
        <div className="about-container">
            <div className="about-page-header">
                <div className="header-left">
                    <h1 className="about-container-header">Vanguard Finance AI</h1>
                    <p>Empowering Your Financial Future: Learn, Grow, Succeed.</p>
                </div>
                <div className="animated-img-container">
                    <img src="https://media.istockphoto.com/id/1335382452/video/e-learning-online-education-at-home-homeschooling-education-concept-of-online-learning.jpg?s=640x640&k=20&c=i0dnZ1G_OiF9PNoDJYyYeuMan_gKzGXV9lsb5NaGILs=" id="animated-img"></img>
                </div>
            </div>
            <div className="about-page-investing-101">
                <h3 className="investing-101">Investing 101</h3>
                <ul className="about-page-ul">
                    <li className="item1">
                        <h3>What does investing mean?</h3>
                        <p>
                          Investing is the act of allocating money into assets, such as stocks or real estate, with the expectation that it will grow over time. It's like planting a seed today, hoping for a bigger return in the future.
                        </p>
                    </li>
                    <li className="item2">
                        <h3>What is a stock?</h3>
                        <p>
                            A stock represents partial ownership in a company, allowing the holder to claim a share of its profits. Buying stocks lets investors participate in the company's growth and potential earnings.
                        </p>
                    </li>
                    <li className="item3">
                        <h3>What is the stock market?</h3>
                        <p>
                        The stock market is a platform where investors buy and sell shares of publicly traded companies, reflecting the collective valuation of these businesses. It acts as an indicator of an economy's health and influences wealth generation and allocation.
                        </p>
                    </li> 
                </ul>
            </div>
    </div>
    )
}
