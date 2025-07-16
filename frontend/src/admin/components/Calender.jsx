"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  const cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-indigo-50 text-indigo-600 transition-colors"
          aria-label="Previous month"
        >
          <FiChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          {date.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-indigo-50 text-indigo-600 transition-colors"
          aria-label="Next month"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-3">
        {DAYS.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {cells.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className={`py-2 rounded-full transition-all ${
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-semibold shadow-md"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
            >
              {day}
            </div>
          ) : (
            <div key={idx} className="py-2" />
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;    