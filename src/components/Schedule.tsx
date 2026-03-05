import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Clock, BookOpen } from 'lucide-react';
import scheduleData from '../data/clean_schedule.json';

// Type definitions based on our clean JSON structure
type TimeSlot = {
    time: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
};

type WeekData = {
    title: string;
    days: string[];
    dates: string[];
    schedule: TimeSlot[];
};

const ScheduleCard = ({ title, content }: { title: string; content: string }) => {
    if (!content || content.trim() === '') return null;

    // Distinguish different types of activities
    const isBreak = content.includes('休息') || content.includes('吃飯');
    const isExam = content.includes('測驗') || content.includes('考試') || content.includes('模考');
    const isReview = content.includes('檢討');

    let bgColor = 'bg-blue-50 border-blue-200 text-blue-800';
    let icon = <BookOpen className="w-3 h-3 mr-1 mt-0.5 shrink-0" />;

    if (isBreak) {
        bgColor = 'bg-gray-100 border-gray-200 text-gray-500';
        icon = null;
    } else if (isExam) {
        bgColor = 'bg-red-50 border-red-200 text-red-800';
    } else if (isReview) {
        bgColor = 'bg-green-50 border-green-200 text-green-800';
    }

    return (
        <div className={`p-2 rounded-md border text-xs sm:text-sm font-medium ${bgColor} h-full flex items-start shadow-sm transition-all hover:shadow-md`}>
            {icon}
            <span className="whitespace-pre-wrap leading-snug">{content}</span>
        </div>
    );
};

export default function Schedule() {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    const weeks = scheduleData as WeekData[];
    const currentWeek = weeks[currentWeekIndex];

    const handlePrevWeek = () => {
        setCurrentWeekIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNextWeek = () => {
        setCurrentWeekIndex((prev) => Math.min(weeks.length - 1, prev + 1));
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
            {/* Header section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">2026 暑假讀書班複習進度表</h1>
                        <p className="text-sm text-slate-500 font-medium">全真教育 / AllTrue Study Plan</p>
                    </div>
                </div>

                {/* Week navigation */}
                <div className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                    <button
                        onClick={handlePrevWeek}
                        disabled={currentWeekIndex === 0}
                        className="p-2 rounded-md hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all text-slate-700"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="font-bold text-slate-800 min-w-[80px] text-center">
                        {currentWeek.title}
                    </div>

                    <button
                        onClick={handleNextWeek}
                        disabled={currentWeekIndex === weeks.length - 1}
                        className="p-2 rounded-md hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all text-slate-700"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Schedule Table grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWeek.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] border-collapse">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="py-4 px-4 border-b border-slate-200 text-left w-28 shrink-0 relative bg-slate-50/90 backdrop-blur top-0 z-10 shadow-sm">
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Clock className="w-4 h-4" />
                                            <span className="font-semibold text-sm">時間 / 日期</span>
                                        </div>
                                    </th>
                                    {currentWeek.days.map((day, idx) => (
                                        <th key={idx} className="py-4 px-4 border-b border-slate-200 text-center w-[calc(100%/6)]">
                                            <div className="flex flex-col items-center">
                                                <span className="text-base font-bold text-slate-800">{day}</span>
                                                <span className="text-xs font-medium text-slate-400 mt-1 bg-slate-100 px-2 py-0.5 rounded-full">
                                                    {currentWeek.dates[idx]}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {currentWeek.schedule.map((slot, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="py-3 px-4 align-top border-r border-slate-100 bg-slate-50/30">
                                            <div className="text-sm font-semibold text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm inline-block">
                                                {slot.time}
                                            </div>
                                        </td>
                                        <td className="p-2 align-top border-r border-slate-100">
                                            <ScheduleCard title="mon" content={slot.mon} />
                                        </td>
                                        <td className="p-2 align-top border-r border-slate-100">
                                            <ScheduleCard title="tue" content={slot.tue} />
                                        </td>
                                        <td className="p-2 align-top border-r border-slate-100">
                                            <ScheduleCard title="wed" content={slot.wed} />
                                        </td>
                                        <td className="p-2 align-top border-r border-slate-100">
                                            <ScheduleCard title="thu" content={slot.thu} />
                                        </td>
                                        <td className="p-2 align-top border-r border-slate-100">
                                            <ScheduleCard title="fri" content={slot.fri} />
                                        </td>
                                        <td className="p-2 align-top">
                                            <ScheduleCard title="sat" content={slot.sat} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
