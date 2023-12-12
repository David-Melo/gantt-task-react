import React from "react";
import { GridProps } from "../grid/grid";
import { CalendarProps } from "../calendar/calendar";
import { TaskGanttContentProps } from "./task-gantt-content";
export declare type TaskGanttProps = {
    gridProps: GridProps;
    calendarProps: CalendarProps;
    barProps: TaskGanttContentProps;
    ganttHeight: number;
    scrollY: number;
    scrollX: number;
    barTaskIndexMax: number;
};
export declare const TaskGantt: React.FC<TaskGanttProps>;
