import React, { useState } from 'react';

interface Birthday {
    id: number;
    name: string;
    date: string; // MM-DD
}

// Static birthday data (replace this with actual dates if available)
const birthdayData: Birthday[] = [
    { id: 1, name: 'Madison Hu', date: '06-01' },
    { id: 2, name: 'Fonua Pole', date: '06-02' },
    { id: 3, name: 'Kysaiah Pickett', date: '06-03' },
    { id: 4, name: 'Campbell Graham', date: '06-04' },
    { id: 5, name: 'Scott the Woz', date: '06-05' },
    { id: 6, name: 'Morissette (singer)', date: '06-06' },
    { id: 7, name: 'Adam Taggart', date: '06-07' },
    { id: 8, name: 'Pajtim Kasami', date: '06-08' },
    { id: 9, name: 'Dane Rampe', date: '06-09' },
    { id: 10, name: 'Steve Smith (cricketer)', date: '06-10' },
    { id: 11, name: 'Sergio Agüero', date: '06-11' },
    { id: 12, name: 'Awkwafina', date: '06-12' },
    { id: 13, name: 'Staniliya Stamenova', date: '06-13' },
    { id: 14, name: 'Maryka Holtzhausen', date: '06-14' },
    { id: 15, name: 'Yoann Huget', date: '06-15' },
    { id: 16, name: 'Matthew Koma', date: '06-16' },
    { id: 17, name: 'Angelo Mathews', date: '06-17' },
    { id: 18, name: 'Sonakshi Sinha', date: '06-18' },
    { id: 19, name: 'Todd Carney', date: '06-19' },
    { id: 20, name: 'Miyuki Sawashiro', date: '06-20' },
    { id: 21, name: 'Jack Afamasaga', date: '06-21' },
    { id: 22, name: 'Feleti Mateo', date: '06-22' },
    { id: 23, name: 'Chris Higgins (ice hockey)', date: '06-23' },
    { id: 24, name: 'Toni Livers', date: '06-24' },
    { id: 25, name: 'Jewel Staite', date: '06-25' },
    { id: 26, name: 'Nikolay Davydenko', date: '06-26' },
    { id: 27, name: 'Chin-Hui Tsao', date: '06-27' },
    { id: 28, name: 'Fabrizio Moretti', date: '06-28' },
    { id: 29, name: 'Bobby Simmons', date: '06-29' },
    { id: 30, name: 'Richard Skuse', date: '06-30' },
    { id: 31, name: 'Abby Wambach', date: '05-31' },
    { id: 32, name: 'Tomasz Wróblewski', date: '06-01' },
    { id: 33, name: 'Morena Baccarin', date: '06-01' },
    { id: 34, name: 'Butterfly Boucher', date: '06-01' },
    { id: 35, name: 'Dominic Cooper', date: '06-01' },
    { id: 36, name: 'Nikki Cox', date: '06-01' },
    { id: 37, name: 'Yi So-yeon', date: '06-01' },
    { id: 38, name: 'Justin Long', date: '06-01' },
    { id: 39, name: 'Teet Allas', date: '06-01' },
    { id: 40, name: 'AJ Styles', date: '06-01' },
];

const DatePicker: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleDateClick = (date: string) => {
        setSelectedDate(date);
    };

    const renderBirthdays = (date: string) => {
        const birthdayList = birthdayData.filter(birthday => birthday.date === date.substring(5));
        return birthdayList.length > 0 ? (
            <ul>
                {birthdayList.map(birthday => (
                    <li key={birthday.id}>{birthday.name}</li>
                ))}
            </ul>
        ) : (
            <p>No birthdays on this date.</p>
        );
    };

    const generateDates = () => {
        const dates = [];
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();

        for (let day = 1; day <= 31; day++) {
            const date = new Date(year, month, day);
            if (date.getMonth() !== month) break;
            dates.push(date.toISOString().split('T')[0]);
        }

        return dates;
    };

    return (
        <div className="date-picker">
            <div className="calendar">
                {generateDates().map(date => (
                    <div 
                        key={date} 
                        className={`calendar-day ${date === selectedDate ? 'selected' : ''}`} 
                        onClick={() => handleDateClick(date)}
                    >
                        {date.split('-')[2]}
                    </div>
                ))}
            </div>
            {selectedDate && (
                <div className="birthday-list">
                    <h3>Birthdays on {selectedDate}</h3>
                    {renderBirthdays(selectedDate)}
                </div>
            )}
        </div>
    );
};

export default DatePicker;
