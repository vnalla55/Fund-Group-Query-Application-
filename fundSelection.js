import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import fundListSlice from './../redux/fundListSlice';


export default function FundSelection() {
    const [fundData, setfundData] = useState([]);
    const [selectedFund, setselectedFund] = useState([]);
    const dispatch = useDispatch();
    const fundListActions = fundListSlice.actions;


    const fetchfunds = async () => {
        const { data } = await Axios.get(
          "http://localhost:5000/fundGroupList"
        );
        const fundData = data;
        setfundData(fundData);
        console.log(fundData);
      };
    
      useEffect(() => {
        fetchfunds();
      }, []);
    

      const handleGroup = (event) => {
        setselectedFund(event.target.value);
        console.log(event.target.value)
        // dispatch(fundListActions.selectedFundGroup(event.target.value))
    }

    return (
            <div>
                <h4 className='center underline'>Fund Selection</h4>
                <form id='fundSelection'>
                    <select id="FundGroup" name="FundGroup" onChange={handleGroup}>
                        <option className='disabled' defaultValue >Select Fund Group</option>
                        {fundData.filter(fund => fund.FUND_CATEGORY === null && fund.FUND_CLASS === null && fund.FUND_GROUP_STATUS === 'A').map((fund) => (
                                <option key={fund.ID} value={fund.FUND_GROUP_NAME}>
                                    {fund.FUND_GROUP} {fund.FUND_GROUP_NAME}
                                </option>
                            ))}
                    </select>
                    <select id="FundCategory" name="FundCategory" onChange={handleGroup} >
                            <option  className='disabled' defaultValue>Select Fund Category</option>
                            {fundData.filter(fund => fund.FUND_GROUP_NAME === selectedFund && fund.FUND_CLASS === null && fund.FUND_CATEGORY_STATUS === 'A').map((fund) => (
                                <option key={fund.ID} value={fund.FUND_CATEGORY_NAME}>
                                    {fund.FUND_CATEGORY} {fund.FUND_CATEGORY_NAME}
                                </option>
                            ))}
                    </select>
                    <select id="FundClass" name="FundClass" onChange={handleGroup}>
                            <option className='disabled' defaultValue>Select Fund Class</option>
                            {fundData.filter(fund => fund.FUND_CATEGORY_NAME === selectedFund && fund.FUND_CLASS !== null && fund.FUND_CLASS_STATUS === 'A').map((fund) => (
                                <option key={fund.ID} value={fund.FUND_CLASS_NAME}>
                                    {fund.FUND_CLASS} {fund.FUND_CLASS_NAME}
                                </option>
                            ))}
                    </select>
                        <button className='center' >Reset</button>
                </form>
             <div>
            <h4 className='center underline'>Fund Description</h4>
                <p>Fund Name:</p>
                <p>Fund Code: </p>
                <p>Fund Description: </p>
                <p>Transfers: </p>
                <p>Fund Revenue:</p>
                <p>Allowed Expenses:</p>
                <p>Non-Allowed Expenses:</p>
                <p>Budget Procedure:</p>
                <p>Available Budget:</p>
                <p>Links: </p>
        </div>
        </div>
    )
}
