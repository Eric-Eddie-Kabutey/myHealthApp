'use client';

import React from 'react'

function BillingHistory() {
    return (
        <div className='main-content w-full flex overflow-x-auto'>
            <table className="w-full text-sm">
                <thead>
                    <tr className="h-10 bg-gray-100">
                        <td><div className="px-3">Date</div></td>
                        <td><div className="px-3">Description</div></td>
                        <td><div className="px-3">Amount</div></td>
                        <td><div className="px-3">Payment Method</div></td>
                        <td><div className="px-3">Status</div></td>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {
                            date: "2024-05-15",
                            description: "Monthly Premium",
                            amount: "$450.00",
                            paymentMethod: "Auto - Pay",
                            status: "Paid",
                        },
                        {
                            date: "2024-04-15",
                            description: "Monthly Premium",
                            amount: "$450.00",
                            paymentMethod: "Auto - Pay",
                            status: "Paid",
                        },
                        {
                            date: "2024-04-08",
                            description: "Dental Cleaning Co-pay",
                            amount: "$25.00",
                            paymentMethod: "Credit Card",
                            status: "Paid",
                        },
                        {
                            date: "2024-04-02",
                            description: "Monthly Premium",
                            amount: "$450.00",
                            paymentMethod: "Auto - Pay",
                            status: "Paid",
                        },
                    ].map((item, idx) => (
                        <tr className="border-t" key={item.date + item.description}>
                            <td><div className="p-3">{item.date}</div></td>
                            <td><div className="p-3">{item.description}</div></td>
                            <td><div className="p-3">{item.amount}</div></td>
                            <td><div className="p-3">{item.paymentMethod}</div></td>
                            <td>
                                <div className="p-3">
                                    <div
                                        className={`p-3 py-1 w-fit rounded font-medium ${
                                            item.status === "Paid"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {item.status}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BillingHistory