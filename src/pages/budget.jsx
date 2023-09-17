import React, { useState } from 'react';
import '../index.css'
import { FaHouseUser } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement);
export default function Budget() {
    const [monthlyIncome, setMonthlyIncome] = useState(0)
    const [monthlySpending, setMonthlySpending] = useState(0)
    const [totalExpenditure, setTotalExpenditure] = useState(0); 
    const [fixedSpending, setFixedSpending] = useState(0)
    const [flexibleSpending, setFlexibleSpending] = useState(0)
    const [isCalculated, setIsCalculated] = useState(false)

    const [houseBill, setHouseBill] = useState(0)
    const [transportationBill, setTransportationBill] = useState(0)
    const [groceriesBill, setGroceriesBill] = useState(0)
    const [personalBill, setPersonalBill] = useState(0)
    const [healthBill, setHealthBill] = useState(0)
    const [insuranceBill, setInsuranceBill] = useState(0)

    const [resturantBill, setResturantBill] = useState(0)
    const [shoppingBill, setShoppingBill] = useState(0)
    const [travelBill, setTravelBill] = useState(0)
    const [cashBill, setCashBill] = useState(0)
    const [givingBill, setGivingBill] = useState(0)
    const [businessBill, setBusinessBill] = useState(0)
    const [educationBill, setEducationBill] = useState(0)
    const [financeBill, setFinanceBill] = useState(0)

    const [isFocused, setIsFocused] = useState(false);
    const [isMonthlyFocused, setIsMonthlyFocused] = useState(false)   
    const [isHouseFocused, setIsHouseFocused] = useState(false)    
    const [isTransportationFocused, setIsTransportationFocused] = useState(false)    
    const [isGroceriesFocused, setIsGroceriesFocused] = useState(false) 
    const [isHealthFocused, setIsHealthFocused] = useState(false) 
    const [isInsuranceFocused, setIsInsuranceFocused] = useState(false)
    const [isResturantFocused, setIsResturantFocused] = useState(false) 
    const [isShoppingFocused, setIsShoppingFocused] = useState(false)
    const [isTravelFocused, setIsTravelFocused] = useState(false)
    const [isCashFocused, setIsCashFocused] = useState(false)  
    const [isGivingFocused, setIsGivingFocused] = useState(false)
    const [isBusinessFocused, setIsBusinessFocused] = useState(false) 
    const [isEducationFocused, setIsEducationFocused] = useState(false)
    const [isFinaceFocused, setIsFinanceFocused] = useState(false)    

    const fixedSpendingData = {
        labels: ['House & Utilities', 'Transportation', 'Groceries', 'Health', 'Insurance'],
        datasets: [{
            data: [houseBill, transportationBill, groceriesBill, healthBill, insuranceBill],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#8BC34A'],
        }]
    };

    const flexibleSpendingData = {
        labels: ['Resturants and Dining', 'Shopping & Entertainment', 'Travel', 'Cash & Checks', 'Giving', 'Business Expense', 'Education', 'Finance'],
        datasets: [{
            data: [resturantBill, shoppingBill, travelBill, cashBill, givingBill, businessBill, educationBill, financeBill],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#8BC34A', '#E53935', '#7B1FA2', '#039BE5'],
        }]
    };



    const handleIncomeChange = (e) => {
        const value = e.target.value
        setMonthlyIncome(value === '' ? 0 : parseFloat(value));
    }
    const handleMonthlySpendingChange = (e) => {
        const value = e.target.value
        setMonthlySpending(value === '' ? 0 : parseFloat(value))
    }
    const handleHouseBill = (e) => {
        const value = e.target.value
        setHouseBill(value === '' ? 0 : parseFloat(value))
    }
    const handleTransportationBill = (e) => {
        const value = e.target.value
        setTransportationBill(value === '' ? 0 : parseFloat(value))
    }
    
    const handleGroceriesBill = (e) => {
        const value = e.target.value
        setGroceriesBill(value === '' ? 0 : parseFloat(value))
    }
    const handlePersonalBill = (e) => {
        const value = e.target.value
        setPersonalBill(value === '' ? 0 : parseFloat(value))
    }

    const handleHealthBill = (e) => {
        const value = e.target.value
        setHealthBill(value === '' ? 0 : parseFloat(value))
    }
    const handleInsuranceBill = (e) => {
        const value = e.target.value
        setInsuranceBill(value === '' ? 0 : parseFloat(value))
    }

    const handleResturantBill = (e) => {
        const value = e.target.value
        setResturantBill(value === '' ? 0 : parseFloat(value))
    }
    const handleShoppingBill = (e) => {
        const value = e.target.value
        setShoppingBill(value === '' ? 0 : parseFloat(value))
    }
    const handleTravelBill = (e) => {
        const value = e.target.value
        setTravelBill(value === '' ? 0 : parseFloat(value))
    }
    const handleCashBill = (e) => {
        const value = e.target.value
        setCashBill(value === '' ? 0 : parseFloat(value))
    }
    const handleGivingBill = (e) => {
        const value = e.target.value
        setGivingBill(value === '' ? 0 : parseFloat(value))
    }
    const handleBusinessBill = (e) => {
        const value = e.target.value
        setBusinessBill(value === '' ? 0 : parseFloat(value))
    }
    const handleEducationBill = (e) => {
        const value = e.target.value
        setEducationBill(value === '' ? 0 : parseFloat(value))
    }
    const handleFinanceBill = (e) => {
        const value = e.target.value
        setFinanceBill(value === '' ? 0 : parseFloat(value))
    }

    const userSurplus = monthlyIncome - monthlySpending

    const handleCalculateBudget = (e) => {
        const total = houseBill + transportationBill + groceriesBill + personalBill + healthBill + insuranceBill + resturantBill + shoppingBill + travelBill + cashBill + givingBill + businessBill + educationBill + financeBill
        const fixSpending = houseBill + transportationBill + groceriesBill + healthBill + insuranceBill
        const flexSpending = resturantBill + shoppingBill + travelBill + cashBill + givingBill + businessBill + educationBill + financeBill
        setTotalExpenditure(total)
        setFixedSpending(fixSpending)
        setFlexibleSpending(flexSpending)
        setIsCalculated(true)
    }

    let message = '';
    const difference = totalExpenditure - monthlyIncome;
    const percentageDifference = ((Math.abs(difference) / monthlyIncome) * 100).toFixed(2);

    if (totalExpenditure > monthlyIncome) {
        message = `You spend ${percentageDifference}% more than you earn.`;
    } else if (totalExpenditure < monthlyIncome) {
        message = `You spend ${percentageDifference}% less than you earn.`;
    } else {
        message = 'You spend exactly what you earn.';
    }

    return (
        <div className='budget-container'>
            <h1>Budgeting Spending Tool</h1>
            <div>
                <h2>
                    We'll base your budget based on your income and spending
                </h2>
            </div>
            <div className='user-input-fields'>
                <div>
                    <h3>Your monthly income: </h3>
                </div>
                <div className='budget-input-container'>
                    <input 
                        type='number'
                        value={isFocused && monthlyIncome === 0 ? '' : monthlyIncome}
                        onChange={handleIncomeChange}
                        placeholder='Enter your income'
                        className='budget-input'
                        onFocus={() => setIsFocused(true)}
                    />
                </div>
            </div>
            <div className='user-input-fields'>
                <div>
                    <h3>Your average monthly spending: </h3>
                </div>
                <div className='budget-input-container'>
                    <input 
                        type='number'
                        value={isMonthlyFocused && monthlySpending === 0 ? '': monthlySpending}
                        onChange={handleMonthlySpendingChange}
                        placeholder='Enter spending'
                        onFocus={() => setIsMonthlyFocused(true)}
                        className='budget-input'
                    />
                </div>
            </div>
            <div className='user-input-fields'>
                <div>
                    <h3>Your average monthly surplus: </h3>
                </div>
                <div className='budget-input-container'>
                    <input 
                        type='number'
                        value={userSurplus}
                        readOnly
                        placeholder='Your surplus'
                        className='budget-input'
                    />
                </div>
            </div>
            <div className='setup-fixed-spending'>
                <h2>Edit properties as necessary</h2>
                <h3>Your Projected surplus ${userSurplus}</h3>
                <div className='fixed-spending'>
                    <p>FIXED SPENDING IN DOLLARS</p>
                    <ul className='fixed-spending-categories'>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaHouseUser />
                                <p>House & Utilities</p>
                                <input 
                                    type='number'
                                    value={isHouseFocused && houseBill === 0 ? '' : houseBill}
                                    onChange={handleHouseBill}
                                    className='fixed-spending-input'
                                    onFocus={() => setIsHouseFocused(true)}
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaCarAlt />
                                <p>Transportation</p>
                                <input 
                                    type='number'
                                    value={isTransportationFocused && transportationBill === 0 ? '' : transportationBill}
                                    onChange={handleTransportationBill}
                                    onFocus={() => setIsTransportationFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaShoppingCart />
                                <p>Groceries</p>
                                <input 
                                    type='number'
                                    value={isGroceriesFocused && groceriesBill === 0 ? '' : groceriesBill}
                                    onChange={handleGroceriesBill}
                                    onFocus={() => setIsGroceriesFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        
                        <div className='fixed-spending-div'>
                            <li>
                                <FaHospitalAlt />
                                <p>Health</p>
                                <input 
                                    type='number'
                                    value={isHealthFocused && healthBill === 0 ? '' : healthBill}
                                    onFocus={() => setIsHealthFocused(true)}
                                    onChange={handleHealthBill}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaWrench />
                                <p>Insurance</p>
                                <input 
                                    type='number'
                                    value={isInsuranceFocused && insuranceBill === 0 ? '' : insuranceBill}
                                    onChange={handleInsuranceBill}
                                    onFocus={() => setIsInsuranceFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='setup-fixed-spending'>
                <h2>Edit properties as necessary</h2>
                <h3>Your Projected surplus ${userSurplus}</h3>
                <div className='fixed-spending'>
                    <p>FLEXIBLE SPENDING IN DOLLARS</p>
                    <ul className='fixed-spending-categories'>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaUtensils />
                                <p>Resturants and Dining</p>
                                <input 
                                    type='number'
                                    value={isResturantFocused && resturantBill === 0 ? '' : resturantBill}
                                    onChange={handleResturantBill}
                                    onFocus={() => setIsResturantFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaShoppingBag   />
                                <p>Shopping & Entertainment</p>
                                <input 
                                    type='number'
                                    value={isShoppingFocused && shoppingBill === 0 ? '' : shoppingBill}
                                    onChange={handleShoppingBill}
                                    onFocus={() => setIsShoppingFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaPlaneDeparture />
                                <p>Travel</p>
                                <input 
                                    type='number'
                                    value={isTravelFocused && travelBill === 0 ? '' : travelBill}
                                    onChange={handleTravelBill}
                                    onFocus={() => setIsTravelFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaMoneyCheck className='icon-background'/>
                                <p>Cash & Checks</p>
                                <input 
                                    type='number'
                                    value={isCashFocused && cashBill === 0 ? '' : cashBill}
                                    onChange={handleCashBill}
                                    onFocus={() => setIsCashFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaHandsHelping />
                                <p>Giving</p>
                                <input 
                                    type='number'
                                    value={isGivingFocused && givingBill === 0 ? '' : givingBill}
                                    onChange={handleGivingBill}
                                    onFocus={() => setIsGivingFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaBusinessTime />
                                <p>Business Expense</p>
                                <input 
                                    type='number'
                                    value={isBusinessFocused && businessBill === 0 ? '' : businessBill}
                                    onChange={handleBusinessBill}
                                    onFocus={() => setIsBusinessFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaSchool />
                                <p>Education</p>
                                <input 
                                    type='number'
                                    value={isEducationFocused && educationBill === 0 ? '' : educationBill}
                                    onChange={handleEducationBill}
                                    onFocus={() => setIsEducationFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                        <div className='fixed-spending-div'>
                            <li>
                                <FaMoneyCheckAlt />
                                <p>Finance</p>
                                <input 
                                    type='number'
                                    value={isFinaceFocused && financeBill === 0 ? '': financeBill}
                                    onChange={handleFinanceBill}
                                    onFocus={() => setIsFinanceFocused(true)}
                                    className='fixed-spending-input'
                                />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <button className='button-89' onClick={handleCalculateBudget}>
                <h1>Calculate Budget</h1>
            </button>
            <div className='budget-container'>
            
            {isCalculated && 
            <div className='calculated-budget'>
                <div className='user-budget-feedback'> 
                    <p>Total Expenditure Spending: <strong>${totalExpenditure}</strong></p>
                    <p>Total Fixed Spending: <strong>${fixedSpending}</strong></p>
                    <p>Total Flexible Spending <strong>${flexibleSpending}</strong></p>
                    <h3>{message}</h3>
                </div>
                <h3 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Legend:</h3>
                <ul style={{ listStyleType: 'none', textAlign:'left', fontSize: '1.5rem' }} >
                    {fixedSpendingData.labels.map((label, index) => (
                        <li key={index}>
                            <span 
                                style={{ 
                                    display: 'inline-block', 
                                    width: '12px', 
                                    height: '12px', 
                                    backgroundColor: fixedSpendingData.datasets[0].backgroundColor[index],
                                    marginRight: '5px'
                                }}
                            ></span>
                            {label}
                        </li>
                    ))}
                </ul>
            <div>
            <h4 style={ {fontSize: '1.5rem'} }>Fixed Spending Breakdown</h4>
            <Pie 
                data={fixedSpendingData} 
                options={{
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Category'
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'My Chart Title'
                    }
                }}    
            />
        </div>
        <div>
            <h4 style={ {fontSize: '1.5rem'} }> Flexible Spending Breakdown</h4>
            <h3 style={ {fontSize: '1.5rem'} }>Legend:</h3>
            <ul style={{ listStyleType: 'none', textAlign: 'left', fontSize: '1.5rem' }} >
                {flexibleSpendingData.labels.map((label, index) => (
                    <li key={index}>
                        <span 
                            style={{ 
                                display: 'inline-block', 
                                width: '12px', 
                                height: '12px', 
                                backgroundColor: flexibleSpendingData.datasets[0].backgroundColor[index],
                                marginRight: '5px',
                            }}
                        ></span>
                        {label}
                    </li>
                ))}
            </ul>
            <Pie 
                data={flexibleSpendingData}
                options={{
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
            />
        </div>
    </div>
}
        </div>
    </div>
    )
}
