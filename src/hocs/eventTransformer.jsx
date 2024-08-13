export function transformEvent(googleEvent) {
    const startDate = new Date(googleEvent.start.dateTime);
    const endDate = new Date(googleEvent.end.dateTime);
  
    return {
      id: googleEvent.id,
      url: googleEvent.htmlLink || '',
      title: googleEvent.summary || '',
      start: startDate,
      end: endDate,
      allDay: !googleEvent.start.dateTime,
      extendedProps: {
        calendar: googleEvent.organizer.email
      }
    };
  }
