/* 
An interface to define the structure of the Event object. 
*/

export interface Event {
  id: string;
  name: string;
  eventStart: string;
  eventDuration: string;
  address: string;
  description: string;
  attending?: boolean;
}
