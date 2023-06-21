import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";

async function renderForm(availableTimes, updateTimes) {
    render(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />} />
            </Routes>
        </BrowserRouter>
    );
}

test('Initializes time', async () => {
    let availableTimes = [];
    const updateTimes = jest.fn();

    jest
        .useFakeTimers()
        .setSystemTime(new Date('2020-01-01'));

    await act(async () => {
        renderForm(availableTimes, updateTimes);
    });

    expect(updateTimes).toBeCalledWith([
        "17:00",
        "17:30",
        "18:00",
        "20:00",
        "21:00",
        "23:30",
    ]);
});

test('Updates time when date changes', async () => {
    let availableTimes = [];
    const updateTimes = jest.fn();

    await act(async () => {
        renderForm(availableTimes, updateTimes);
    });

    const input = screen.getByLabelText('Choose date')
    await act(async () => {
        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: '2022-05-21' } });
    });

    expect(updateTimes).toBeCalledWith([
        "17:00",
        "17:30",
        "18:00",
        "19:00",
        "20:00",
        "20:30",
        "21:00",
        "23:00",
        "23:30",
    ]);
});

