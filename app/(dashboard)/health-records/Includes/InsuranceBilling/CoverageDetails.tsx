'use client';

import React from 'react'

function CoverageDetails() {
  return (
    <div className='main-content w-full flex overflow-x-auto'>
        <table className="w-full text-sm">
            <thead>
                <tr className="h-10 bg-gray-100">
                    <td><div className="px-3">Coverage Type</div></td>
                    <td><div className="px-3">Deductible</div></td>
                    <td><div className="px-3">Out-Of-Pocket Max</div></td>
                    <td><div className="px-3">Co-Insurance</div></td>
                    <td><div className="px-3">Status</div></td>
                </tr>
            </thead>
            <tbody>
                {[
                    {
                        type: "Medical",
                        deductible: "$1,500",
                        oopMax: "$5,000",
                        coInsurance: "80/20",
                        status: "Active",
                    },
                    {
                        type: "Dental",
                        deductible: "$50",
                        oopMax: "$1,500",
                        coInsurance: "100/80/50",
                        status: "Active",
                    },
                    {
                        type: "Vision",
                        deductible: "$0",
                        oopMax: "$300",
                        coInsurance: "100%",
                        status: "Active",
                    },
                    {
                        type: "Prescription",
                        deductible: "$200",
                        oopMax: "$3,000",
                        coInsurance: "Generic: $10",
                        status: "Active",
                    },
                ].map((item, idx) => (
                    <tr className="border-t" key={item.type}>
                        <td><div className="p-3">{item.type}</div></td>
                        <td><div className="p-3">{item.deductible}</div></td>
                        <td><div className="p-3">{item.oopMax}</div></td>
                        <td><div className="p-3">{item.coInsurance}</div></td>
                        <td>
                            <div className="p-3">
                                <div
                                    className={`p-3 py-1 w-fit rounded font-medium ${
                                        item.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : item.status === "Inactive"
                                            ? "bg-red-100 text-red-700"
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

export default CoverageDetails