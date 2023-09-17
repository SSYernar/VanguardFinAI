import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-container-header">Learn Page</h1>
            <div className="learning-basics-container">
                <h2>Investing Basics</h2>
                <h3>Empowering Financial Futures: A Journey to Financial Literacy</h3>
                <FaRegMoneyBillAlt className="bill-icon"/>
                <p className="investing-101-p">
                    Welcome to our Financial Literacy Learning Hub, tailored especially for underrepresented communities. In a world where financial knowledge is power, our mission is to bridge the gap, ensuring everyone has access to the essential financial tools and education they deserve. From understanding basic budgeting to making informed investment decisions, our curated resources are designed to illuminate the path to financial independence and resilience. Dive in, take control, and let's build a brighter financial future together.
                </p>
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
