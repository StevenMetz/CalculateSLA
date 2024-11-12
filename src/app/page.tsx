"use client";
import { useState } from "react";

export default function Home() {
  const [quater, setQuater] = useState<string>("");
  const [prevQuater, setPrevQuater] = useState<string>("");
  const [prevSla, setPrevSla] = useState<string>("");
  const [totalTickets, setTotalTickets] = useState<number>(0);
  const [ticketsSLA, setTicketsSLA] = useState<number>(0);
  const [showCalculations, setShowCalculations] = useState<boolean>(false);
  const [slaCalc, setSlaCalc] = useState<number>(0);
  const handleCalculationOfSLA = () => {
    const calculation = (ticketsSLA / totalTickets) * 100;
    setShowCalculations(true);
    setSlaCalc(calculation);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCalculationOfSLA();
    console.log(quater);
    console.log(totalTickets);
    console.log(ticketsSLA);
  };
  return (
    <main className="container mx-auto">
      <div className="flex justify-center flex-col">
        <h1 className="text-center text-7xl mt-20">Calculate SLA</h1>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col w-2/5 justify-center">
            <div className="p-5 flex justify-center flex-col">
              <label className="flex justify-center pb-3 text-xl">Previous Quater</label>
              <input
                tabIndex={0}
                aria-label="Previous Quater"
                type="text"
                name="previous-quater"
                placeholder="Q4"
                className="ml-3 h-10 rounded-md border-gray-600 border-2"
                value={prevQuater}
                onChange={(event) => setPrevQuater(String(event.target.value))}
              />
            </div>
            <div className="p-5 flex justify-center flex-col">
              <label className="flex justify-center pb-3 text-xl">Previous SLA</label>
              <input
                aria-label="Previous SLA"
                name="previous-SLA"
                placeholder="1.5"
                className="ml-3 h-10 rounded-md border-gray-600 border-2"
                value={prevSla}
                onChange={(event) => setPrevSla(event.target.value)}
              />
            </div>
            <div className="p-5 flex justify-center flex-col">
              <label className="flex justify-center pb-3 text-xl">Current Quater</label>
              <input
                aria-label="Current Quater"
                name="quater"
                type="text"
                placeholder="Q1"
                className="ml-3 h-10 rounded-md border-gray-600 border-2"
                value={quater}
                onChange={(event) => setQuater(String(event.target.value))}
              />
            </div>
            <div className="p-5 flex justify-center flex-col">
              <label className="flex justify-center pb-3 text-xl">Total Tickets</label>
              <input
                aria-label="Total Tickets"
                name="total-tickets"
                min="1"
                className="ml-3 h-10 rounded-md border-gray-600 border-2"
                placeholder="100"
                type="number"
                value={totalTickets}
                onChange={(event) => setTotalTickets(+event.target.value)}
              />
            </div>
            <div className="p-5 flex justify-center flex-col">
              <label className="flex justify-center pb-3 text-xl">Tickets outside SLA</label>
              <input
                aria-label="input for tickets outside SLA"
                name="tickets-outside"
                min="0"
                type="number"
                className=" ml-3 h-10 rounded-md border-gray-600 border-2 flex justify-start"
                value={ticketsSLA}
                onChange={(event) => setTicketsSLA(+event.target.value)}
              />
            </div>
            <button
              aria-label="Submit button for SLA form"
              type="submit"
              className="border-gray-400 border-2 bg-red-200 flex-initial h-12 w-3/5 mx-auto my-5"
            >
              Calculate SLA
            </button>
          </div>
        </form>
        {showCalculations && (
          <p className="text-2xl text-red-400 font-extrabold">{`In ${quater}, ${(100 - slaCalc).toFixed(2)}% of all People Services tickets were within the SLA with only ${slaCalc.toFixed(2)}% in violation (${prevQuater} was ${prevSla}%, for comparison).`}</p>
        )}
      </div>
    </main>
  );
}
