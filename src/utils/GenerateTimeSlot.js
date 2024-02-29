// Example: Generate time slots for the whole day with a 30-minute interval

export function generateTimeSlots(intervalMinutes) {
      const timeSlots = [];
      let currentTime = new Date();
      currentTime.setHours(0, 0, 0, 0);
      const endTime = new Date();
      endTime.setHours(23, 59, 59, 999);
    
      while (currentTime <= endTime) {
        const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push(timeString);
        
        currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
      }
    
      return timeSlots;
    }
    
    
    
    