/* 
An interface to define the structure of the Event object. 
*/

export interface Event {
  id: number;
  name: string;
  eventStart: Date;
  eventDuration: number;
  address: string;
  description: string;
}
