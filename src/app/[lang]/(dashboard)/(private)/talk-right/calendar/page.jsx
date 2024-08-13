'use client'
import { useEffect } from 'react'

// MUI Imports
import Card from '@mui/material/Card'

// Component Imports
import CalendarWrapper from './components/CalendarWrapper'

// Styled Component Imports
import AppFullCalendar from '@/libs/styles/AppFullCalendar'
import { transformEvent } from '@/hocs/eventTransformer'; // Adjust the path as necessary


const CalendarApp = () => {

  const getCalenderData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apps/calender`)
      
      if (!res.ok) {
        const errorText = await res.text(); // Read the response as text to debug

        console.error('Error response:', errorText);
        throw new Error('Failed to fetch calendar data');
      }

      const data = await res.json();
      const transformedEvents = data.map(transformEvent);

      console.log(transformedEvents[0])
    } catch (error) {
      console.error('Fetch error:', error);
    }
  } 

  useEffect(() => {
    getCalenderData();
  }, []);

  return (
    <Card className='overflow-visible'>
      <AppFullCalendar className='app-calendar'>
        <CalendarWrapper />
      </AppFullCalendar>
    </Card>
  )
}

export default CalendarApp


